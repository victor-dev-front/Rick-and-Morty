import { useParams,useHistory } from "react-router-dom";
import { useContext } from 'react';
import { PersonajesContext } from "../../Context/PersonajesContext";
import { colorBorde } from "../../utils/colorBorde";
import styles from './personajeInformacion.module.css';



const PersonajeInformacion = () => {
    const {datas} =useContext(PersonajesContext);
    //id del personaje seleccionado
    const {personajeId}= useParams();
    const history = useHistory();

    
    //filtro solo el personaje que deseo ver
    const filtrar= datas.filter(data => parseInt(personajeId) === data.id)[0];
    
    const {image,name,gender,species,status,location}= filtrar;
    
    return ( 
        <div className={styles.contenedor__personaje}>
            <div className={styles.card}>
                <div className={styles.card__position}>
                    <div className={styles.card__img} style={colorBorde(filtrar)}>
                        <img src={image}/>
                    </div>
                </div>

                <div className={styles.infoPersonaje}>
                    <div className={styles.info__nombre}>
                        <h2>{name}</h2>
                    </div>
                    <div className={styles.info__estado}>
                        <p><span>Estado:</span> {status}</p>
                    </div>
                    <div className={styles.info__estado}>
                        <p><span>Genero:</span> {gender}</p>
                    </div>
                    <div className={styles.info__estado}>
                        <p><span>Especie:</span> {species}</p>
                    </div>
                    <div className={styles.info__estado}>
                        <p><span>Ubicacion:</span> {location.name}</p>
                    </div>
                    <div className={styles.contenedorBtn}>
                        <button className={styles.btn} onClick={()=>history.push("/")} >Volver</button>    
                    </div>
                </div>
            </div>
        </div>
       
     );
}
 
export default PersonajeInformacion;