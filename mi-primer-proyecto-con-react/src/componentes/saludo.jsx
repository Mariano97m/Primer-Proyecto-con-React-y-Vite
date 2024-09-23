import React from "react";



const Saludo = () => {
    return <> 
        <h1>¡Bienvenidos a mi aplicacion de React!</h1>
        <h2 className="estilos" >Lista de cosas por hacer:</h2>
        <ul className="estilos-lista">
            <li>Aprende con React</li>
            <li>Practicar con Vite</li>
            <li>Construir proyectos increibles</li>
            
        </ul>
     </>
};

export default Saludo;