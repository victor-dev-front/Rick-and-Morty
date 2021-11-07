import Axios from "axios";

const getAllInfo = async (setData) =>{ 
   const  res = await Axios.get("https://rickandmortyapi.com/api/character");
   setData(res.data.results);
}

export default getAllInfo;