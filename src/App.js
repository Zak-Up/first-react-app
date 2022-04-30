import logo from './logo.svg';
import './App.css';
import Componente from "./componentes/Componente";
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoElementos from './componentes/RenderizadoElementos';
import EventosES6, { EventosES7, MasSobreEventos } from './componentes/Eventos';
import ComunicacionComponentes from './componentes/ComunicacionComponentes';
import CicloVidaComponentes from './componentes/CicloVidaComponentes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>


        <section>
          <Componente msg="Hola soy una Prop variable"/>
          <hr/>
          <Propiedades cadena="Esto es una String" 
          numero= {54} 
          boolean= {false}
          arreglo = {[1,2,3,4,5]}
          objeto={{nombre: "Andres", correo: "andresjr195@hotmail.com"}}
          elementoReact = {<i>Elemento React</i>}
          funcion={(num) => num*num}
          componenteReact={<Componente msg="Soy un componente en una Prop"/>}
          />
          <hr></hr>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVidaComponentes/>
        </section>
        
      </header>
      
    </div>
  );
}

export default App;
