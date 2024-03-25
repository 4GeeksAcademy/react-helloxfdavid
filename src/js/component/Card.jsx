import React from "react";

const Card = () =>{
    return (
        <>
        <div className="container-fluid row">            
            <div className="card m-2 border border-solid border-dark" style={{width:"16rem"}}>
                <img src="https://lastfm.freetls.fastly.net/i/u/770x0/b2ad43b90bd5465a8b1dfc468899d65a.jpg#b2ad43b90bd5465a8b1dfc468899d65a" class="card-img-top m-auto mt-2" alt="..."  style={{width:"180px",height:"180px",objetFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">Chasis</h5>
                    <p className="card-text"><strong>Chasis</strong>, un templo eterno de las cantaditas de los 90. <br></br>Zapatilla!!</p>
                    <a href="https://www.youtube.com/watch?v=SCJfz3Fr_oc" className="btn btn-primary mx-auto d-block">Chasis in Session!</a>
                </div>
            </div>
            <div className="card m-2 border border-solid border-dark" style={{width:"16rem"}}>
                <img src="https://larutadelbacalao.com/22-thickbox_default/pegatina-discoteca-chocolate.jpg" class="card-img-top m-auto mt-2" alt="..."  style={{width:"180px",height:"180px",objetFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">Chocolate</h5>
                    <p className="card-text"><strong>Chocolate</strong>, la madre de la música bacalao,la discoteca que rompió los moldes!!</p>
                    <a href="https://www.youtube.com/watch?v=UO739CJAf7Q" className="btn btn-primary mx-auto d-block">Baila Chocolate!</a>
                </div>
            </div>
            <div className="card m-2 border border-solid border-dark " style={{width:"16rem"}}>
                <img src="http://diarium.usal.es/enriquegarcia26/files/2010/11/1260569245057_f.jpg" class="card-img-top m-auto mt-2" alt="..."  style={{width:"180px",height:"180px",objetFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">Pont Aeri</h5>
                    <p className="card-text"><strong>Pont Aeri</strong>, la referencia de la fiesta donde todos recuerdan su himno!!</p>
                    <a href="https://www.youtube.com/watch?v=NgeyaExdZ-k" className="btn btn-primary mx-auto d-block">Volando libre!!</a>
                </div>
            </div><div className="card m-2 border border-solid border-dark" style={{width:"16rem"}}>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Q4ivn4wXQpi-VCogZ8ZhqRvTDFNhEKW3ez2J1PuEhyymO6rfLzXcrhEPnnFYvopWSVi9CvqAjNJPw1YRMkwvCmbfZjFTyLgcaOjOtP7aX8K3no2l-i2GMAMIYU-pL6OPFz2loixtAPs/s1600/escorpia.jpg" class="card-img-top m-auto mt-2" alt="..."  style={{width:"180px",height:"180px",objetFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">Scorpia</h5>
                    <p className="card-text"><strong>Scorpia</strong>, la discoteca conocida como la central del sonido!!</p>
                    <a href="https://www.youtube.com/watch?v=WHusPYYn8hM" className="btn btn-primary mx-auto d-block">Sonido Total!!</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;