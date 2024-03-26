import React from "react";

const Navbar = ({props}) =>{

    return (
        <> 
            <nav className="navbar navbar-expand-lg bg-warning border border-dark">
              <div className="container-fluid">
                <a className="navbar-brand m-2 fs-3 fw-bolder" href={props.tituloCabecera} target="_blank" >{props.labelCabecera}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar d-flex justify-contend-end" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href={props.linkTienda} target="_blank" dangerouslySetInnerHTML={{ __html: props.labelTienda }}></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={props.linkEventos} target="_blank">{props.labelEventos}</a>
                    </li>       
                    <li className="nav-item">
                      <a className="nav-link" href={props.linkRadio} target="_blank">{props.labelRadio}</a>
                    </li> 
                  </ul>
                
                </div>
              </div>
            </nav>
        </>
    );
}
export default Navbar;