import { useContext } from 'react';
import { PersonajesContext } from '../../Context/PersonajesContext';
import { useHistory } from "react-router-dom";
import { colorBorde } from '../../utils/colorBorde';


const Personaje = ({data}) => {
   
    const history = useHistory();

    const {datas,setData} = useContext(PersonajesContext);

    //funcion para eliminar personajes
    const eliminarPersonaje =(id) =>{
     const nuevaLista = datas.filter(data => data.id !== id)
     setData(nuevaLista);
    }

    return ( 

        <div className="card">
            <div className="card__position">
                <div className="card__img"  style={colorBorde(data)}>
                    <img src={data.image}/>
                </div>
            </div>
           
           <div className="infoPersonaje">
               <div className="info__nombre">
                   <h2>{data.name}</h2>
               </div>
               <div className="info__estado">
                   <p><span>{data.status}</span></p>
               </div>
               <div className="contenedorBtn">
                   <button className="btn" onClick={()=>history.push(`/informacion/${data.id}`)}>Ver</button>
                   <button className="btn" onClick={()=>eliminarPersonaje(data.id)}>Eliminar</button>
               </div>
           </div>
        </div>
           
     );
}
 
export default Personaje;