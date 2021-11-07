
const getPersonaje = (datas,nuevosPersonajes) =>{

    const filtrar = datas.filter(data => {
        if(data.name.toString().toLowerCase().includes(nuevosPersonajes.toLowerCase())){
            return data;
         }           
    })
    return filtrar;
}

export default getPersonaje;