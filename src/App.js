import PersonajesProvider from "./Context/PersonajesContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import PersonajeInformacion from "./pages/PersonajeInformacion";

function App() {

  return ( 
    <div className="contenedor">
       <h1 className="titulo">Rick And Morty</h1>
        <Router>
          <PersonajesProvider>     
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/informacion/:personajeId" component={PersonajeInformacion}/>
                </Switch>
          </PersonajesProvider>
      </Router>
   </div>
  );
}

export default App;
