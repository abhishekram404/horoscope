import React from "react";
import "./Body.css";

const Body = (props) => {
  return (
    <div className="body-cont">
      <div className="title">
        <h2>Result</h2>
      </div>
      <div className="result-cont">
        <Result period="Daily" Signs={props.Signs} />
      </div>
    </div>
  );
};

const Result = (props) => {
  //   const s = { backgroundColor: props.Sign[0].color };
  return (
    <div className="card">
      <div className="wrapper">
        <h3>Today (27 June)</h3>
        <img
          src={props.Signs[0].symbol}
          alt="Symbol"
          className="result-symbol"
        />
        <h2 className="zodiac-name">Zodiac : {props.Signs[0].name}</h2>
        <p>
          Lucky Color : {props.Signs[0].color} <i></i>
        </p>
        <p>
          Compatibility with : Virgo{" "}
          <img src={props.Signs[0].symbol} alt="small" className="small-img" />
        </p>
        <p>Lucky Number : 76</p>
        <p>Lucky Time : 9pm</p>
        <p>Mood : Attractive</p>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod
          maiores dolor, odit labore voluptatibus?
        </blockquote>
      </div>
    </div>
  );
};

export default Body;
