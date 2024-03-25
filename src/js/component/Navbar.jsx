import React from "react";

const Navbar = () =>{

    return (
        <> 
<nav className="navbar navbar-expand-lg bg-warning border border-dark">
  <div className="container-fluid">
    <a className="navbar-brand m-2 fs-3 fw-bolder" href="https://es.wikipedia.org/wiki/Ruta_Destroy">La ruta del Bakalao</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" navbar d-flex justify-contend-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.makinalegends.com/tienda/">Regala<strong>La Ruta</strong></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.makinalegends.com/eventos/">Proximas fiestas!</a>
        </li>       
        <li className="nav-item">
          <a className="nav-link" href="https://www.locafm.com/remember/player.html">Radio</a>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;