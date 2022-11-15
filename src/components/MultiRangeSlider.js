import PropTypes from "prop-types";

import { useState, useRef, useCallback, useEffect } from "react";

//import { classnames } from "classnames";
const classnames = require("classnames");

// On instancie les props du composant
const MultiRangeSlider = ({ minprice, maxprice, onChange }) => {
  // On donne le type de chaque props
  MultiRangeSlider.propTypes = {
    minprice: PropTypes.number.isRequired,
    maxprice: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  // On ajoute 2 valeurs d'états
  const [minVal, setMinVal] = useState(minprice);
  const [maxVal, setMaxVal] = useState(maxprice);

  // On crée des refs
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  //JE CALCUL LA POSITION DE MA DIV "slider-container" pour pouvoir jouer sur le left des mes div affichant la valeur au déplacement des curseurs
  // HELAS NE FONCTIONNE PAS POUR LE MOMENT
  const boxRef = useRef();
  const [x, setX] = useState();
  const [y, setY] = useState();
  //2 usestate pour mes div contenant les valeurs
  // const [xLeftValue, setXLeftValue] = useState();
  // const [xRightValue, setXRightValue] = useState();
  // Fonction qui calcule X et Y
  const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);
    const y = boxRef.current.offsetTop;
    setY(y);
    // const xLeftValueNew = (x / maxVal) * minVal + x;
    // setXLeftValue(xLeftValueNew);
    // const xRightValueNew = x + 300;
    // setXRightValue(xRightValueNew);
  };
  // J'obtiens la position de ma div au début dans le useEffect
  useEffect(() => {
    getPosition();
  }, []);

  // Je recalcule X et Y quand la fenêtre est redimensionnée
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  // Ajout de la librairie pour ==> yarn add classnames, pour ajouter du css

  // Convertir en percentage
  const getPercent = useCallback(
    (value) => {
      Math.round(((value - minprice) / (maxprice - minprice)) * 100);
    },
    [minprice, maxprice]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ minprice: minVal, maxprice: maxVal });
  }, [minVal, maxVal, onChange]);

  // document.addEventListener("DOMContentLoaded", () => {
  //   const element = document.querySelector("slider-container");
  //   console.log("element=>", element);
  // });

  // let XDecalageMin = (x / maxVal) * minVal + x;
  // console.log("xLeftValueNew==>", xLeftValue);
  // console.log("minVal==>", minVal);
  // console.log("XDecalageMin==>", XDecalageMin);
  // let XDecalageMax = xRightValue;
  // console.log("XDecalageMax==>", XDecalageMax);

  return (
    <div className="slider-container" ref={boxRef}>
      <div style={{ display: "none" }}>
        <span>X: {x ?? "No result"}</span>
        <span>Y: {y ?? "No result"}</span>
      </div>
      <div className="slider__left-value">{minVal}</div>
      <div>
        <input
          type="range"
          name="point1"
          min={minprice}
          max={maxprice}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > maxprice - 100,
          })}
        />
        <input
          type="range"
          min={minprice}
          max={maxprice}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1); //Valeur de max = min + 1 pour ne pas se chevaucher et garder un rande de 1 minimum
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
      </div>
      <div className="slider__right-value">{maxVal}</div>
      {/* <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div> */}

      {/* <div className="slider__left-value" style={{ left: `${x}px` }}>
        {minVal}
      </div>
      <div className="slider__right-value">{maxVal}</div> */}
      {/* <div className="slider__left-value">{minVal}</div>
      <div className="slider__right-value">{maxVal}</div> */}
    </div>
  );
};

export default MultiRangeSlider;
