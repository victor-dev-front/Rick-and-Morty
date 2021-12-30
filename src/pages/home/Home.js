import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";
import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";
import getPersonaje from "../../utils/filtrarPersonajes";
import Error from "../../components/error/Error";

const Home = () => {
    const {datas,nuevosPersonajes} = useContext(PersonajesContext);
    return ( 
        <>
            <Search />
            { getPersonaje(datas,nuevosPersonajes).length <= 0 
                ? <Error/>
                : <Cards/>
            }
        </>
     );
}
 
export default Home;