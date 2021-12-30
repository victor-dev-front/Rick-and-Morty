import { useContext } from 'react';
import { PersonajesContext } from '../../Context/PersonajesContext';
import { useHistory } from "react-router-dom";
import { colorBorde } from '../../utils/colorBorde';
import styles from './personaje.module.css';


const Personaje = ({data}) => {
   
    const history = useHistory();

    const {datas,setData} = useContext(PersonajesContext);

    //funcion para eliminar personajes
    const eliminarPersonaje =(id) =>{
     const nuevaLista = datas.filter(data => data.id !== id)
     setData(nuevaLista);
    }

    return ( 

        <div className={styles.card}>
            <div className={styles.card__position}>
                <div className={styles.card__img}  style={colorBorde(data)}>
                    <img src={data.image}/>
                </div>
            </div>
           
           <div className={styles.infoPersonaje}>
               <div className={styles.info__nombre}>
                   <h2>{data.name}</h2>
               </div>
               <div className={styles.info__estado}>
                   <p><span>{data.status}</span></p>
               </div>
               <div className={styles.contenedorBtn}>
                   <button className={styles.btn} onClick={()=>history.push(`/informacion/${data.id}`)}>Ver</button>
                   <button className={styles.btn} onClick={()=>eliminarPersonaje(data.id)}>Eliminar</button>
               </div>
           </div>
        </div>
           
     );
}
 
export default Personaje;