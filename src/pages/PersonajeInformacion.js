import { useParams,useHistory } from "react-router-dom";
import { useContext } from 'react';
import { PersonajesContext } from "../Context/PersonajesContext";
import { colorBorde } from "../services/colorBorde";



const PersonajeInformacion = () => {
    const {datas} =useContext(PersonajesContext);
    //id del personaje seleccionado
    const {personajeId}= useParams();
    const history = useHistory();

    
    //filtro solo el personaje que deseo ver
    const filtrar= datas.filter(data => parseInt(personajeId) === data.id)[0];
    
    const {image,name,gender,species,status,location}= filtrar;
    
    return ( 
        <div className="contenedor__personaje">
            <div className="card">
                <div className="card__position">
                    <div className="card__img" style={colorBorde(filtrar)}>
                        <img src={image}/>
                    </div>
                </div>

                <div className="infoPersonaje">
                    <div className="info__nombre">
                        <h2>{name}</h2>
                    </div>
                    <div className="info__estado">
                        <p><span>Estado:</span> {status}</p>
                    </div>
                    <div className="info__estado">
                        <p><span>Genero:</span> {gender}</p>
                    </div>
                    <div className="info__estado">
                        <p><span>Especie:</span> {species}</p>
                    </div>
                    <div className="info__estado">
                        <p><span>Ubicacion:</span> {location.name}</p>
                    </div>
                    <div className="contenedorBtn">
                        <button className="btn" onClick={()=>history.push("/")} >Volver</button>    
                    </div>
                </div>
            </div>
        </div>
       
     );
}
 
export default PersonajeInformacion;