import logo from './logo.svg';
import './App.css';
// import the component you wait to be visible
// import Greeting from './components/pure/greeting';

// Con esto importamos el componente (función que retorna un contenido).
import Example1UseState from './hooks/Example-1_useState';

// main component of type function which returns an html element
// the component only returns an html element
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*paint the component* and pass data the builder*/}
        {/*<Greeting name={'Cristo'}></Greeting>*/}

        {/*Con esto añadimos el componente dentro de la página principal*/}
        <Example1UseState></Example1UseState>

      </header>
    </div>
  );
}

export default App;