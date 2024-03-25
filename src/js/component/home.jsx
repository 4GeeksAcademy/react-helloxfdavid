import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


//create your first component
const Home = () => {
	return (
		<>

		<Navbar/>
		
		<div className="container">	
			<Jumbotron/>	
		</div>
		<div className="container">	
			<Card/>
		</div>
			
			
		</>
	);
};

export default Home;
