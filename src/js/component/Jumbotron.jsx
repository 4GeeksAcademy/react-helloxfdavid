import React from "react";

const Jumbotron = ({props}) =>{
    
        return (
        <>                 
                <div className="mt-4 bg-ligth text-dark rounded">
                    <h1 className="text-center">{props.tituloJumbotron}</h1>
                    <p className="m-4" dangerouslySetInnerHTML={{ __html: props.textoJumbotron }}></p>
                    <h5 className="text-center">{props.textoStrong}</h5> 
                    <p className="text-center">{props.pieTexto}</p>
                    <div className="container d-flex justify-content-center m-2">
                        <a className="btn btn-outline-dark bg-warning" target="_blank" href={props.botonUrl} role="button">{props.botonLabel}</a>          
                    </div>
                </div>                  
        
        </>
        
    )
}

export default Jumbotron;