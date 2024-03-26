import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";






const cartasData = [
	{
		 imagenCarta:"https://lastfm.freetls.fastly.net/i/u/770x0/b2ad43b90bd5465a8b1dfc468899d65a.jpg#b2ad43b90bd5465a8b1dfc468899d65a",
		 tituloCarta:"Chasis",
		 textoCarta:"<strong>Chasis</strong>, un templo eterno de las cantaditas de los 90.Zapatilla!!",
		 botonEnlace:"https://www.youtube.com/watch?v=SCJfz3Fr_oc",
		 label:"Chasis in Session!"
	 },
	 {
		 imagenCarta:"https://larutadelbacalao.com/22-thickbox_default/pegatina-discoteca-chocolate.jpg",
		 tituloCarta:"Chocolate",
		 textoCarta:"<strong>Chocolate</strong>, la madre de la música bacalao,la discoteca que rompió los moldes!!",
		 botonEnlace:"https://www.youtube.com/watch?v=UO739CJAf7Q",
		 label:"Baila Chocolate!"
	 },
	 {
		 imagenCarta:"http://diarium.usal.es/enriquegarcia26/files/2010/11/1260569245057_f.jpg",       
		 tituloCarta:"Pont Aeri",
		 textoCarta:"<strong>Pont Aeri</strong>, la referencia de la fiesta donde todos recuerdan su himno!!",
		 botonEnlace:"https://www.youtube.com/watch?v=NgeyaExdZ-k",
		 label:"Volando libre!!"
	 },
	 {
		 imagenCarta:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Q4ivn4wXQpi-VCogZ8ZhqRvTDFNhEKW3ez2J1PuEhyymO6rfLzXcrhEPnnFYvopWSVi9CvqAjNJPw1YRMkwvCmbfZjFTyLgcaOjOtP7aX8K3no2l-i2GMAMIYU-pL6OPFz2loixtAPs/s1600/escorpia.jpg",
		 tituloCarta:"Scorpia",
		 textoCarta:"<strong>Scorpia</strong>, la discoteca conocida como la central del sonido!!",
		 botonEnlace:"https://www.youtube.com/watch?v=WHusPYYn8hM",
		 label:"Sonido Total!!"
	 }
 ]

const jumbotronDatos ={
		tituloJumbotron :"FIESTA desenfrenada y vibrante movimiento cultural!",
		textoJumbotron :"Adéntrate en un viaje a través de las calles bulliciosas de las ciudades españolas, donde la música electrónica y el espíritu festivo se fusionaban en una explosión de energía y creatividad. <br></br>En esta ruta, descubrirás los lugares emblemáticos donde la escena del bacalao cobraba vida, atrayendo a multitudes de jóvenes en busca de diversión y liberación.	Comienza tu recorrido en las icónicas discotecas de Valencia, epicentro de la movida bacaladera. Desde Spook Factory hasta Chocolate, estos templos de la música electrónica fueron testigos de noches interminables de baile y hedonismo. <br></br>Explora los rincones más insólitos de la geografía española, donde clubes clandestinos y fiestas al aire libre emergían como oasis de libertad y creatividad.<br></br>Sumérgete en la efervescencia de una época marcada por la rebeldía y la innovación, donde el bacalao trascendía las barreras sociales y culturales, conectando a personas de todos los ámbitos de la vida en una celebración de la autenticidad y la pasión. <br></br>",
		textoStrong:"En la Ruta del Bacalao de los años 90, la fiesta nunca terminaba y la música nunca dejaba de sonar.",
		pieTexto:"¡Prepárate para vivir una experiencia inolvidable en el corazón de una revolución cultural!",
		botonUrl:"https://www.youtube.com/watch?v=uEvOORmvxbo",
		botonLabel:"Chimo lo daba todo!!"	
	}	

const navbar ={
		tituloCabecera :"https://es.wikipedia.org/wiki/Ruta_Destroy",
		labelCabecera : "La ruta del Bakalao",
		linkTienda :"https://www.makinalegends.com/tienda/",
		labelTienda :'Regala<strong>La Ruta</strong>',
		linkEventos :"https://www.makinalegends.com/eventos/",
		labelEventos :"Proximas fiestas!",
		linkRadio:"https://www.locafm.com/remember/player.html",
		labelRadio:"Radio"
	}

const imagen ={
		imagenUrl:"https://valenciaplaza.com/public/Image/2018/1/Foto1mosaicorecoilacionesdance_NoticiaAmpliada.jpg"
}
//create your first component
const Home = () => {
	return (
		<>
		
			<Navbar props={navbar}/>			
			<div className="container">					
				<Jumbotron props={jumbotronDatos}/>	
			</div>
			<div className="container d-flex justify-content-center">	
				<Card props={cartasData}/>			
			</div>
			
		</>
	);
};

export default Home;
