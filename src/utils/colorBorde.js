
const verde = {
    border: ".8rem solid green",
    borderRadius: "50%"
}
const rojo = {
    border: ".8rem solid red",
    borderRadius: "50%"
}

const gris = {
    border: ".8rem solid #777373",
    borderRadius: "50%"
}

export const colorBorde = (data) =>{

    if(data.status === "Alive"){
      return verde;
    } else if(data.status === "Dead"){
        return rojo;
    } else if (data.status === "unknown"){
        return gris;
    }
   
}
 
