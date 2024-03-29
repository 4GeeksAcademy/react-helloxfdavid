import React from "react";
//import { ProgressPlugin } from "webpack";



const Card = ({ props }) => {
  return (
    <>
      <div className="container row m-auto
      ">
        {props.map((objeto, index) => (
          <div key={index} className="card m-4 border border-solid border-dark" style={{ width: "16rem" }}>
            <img src={objeto.imagenCarta} className="card-img-top m-auto mt-2" alt="..." style={{ width: "180px", height: "180px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title text-center">{objeto.tituloCarta}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: objeto.textoCarta }}></p>
              <a href={objeto.botonEnlace} className="btn btn-primary mx-auto d-block" target="_blank">{objeto.label}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
