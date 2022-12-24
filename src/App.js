import './App.css';
import Testimonio from "./componentes/Testimonio.js"

function App() {
  return (
    <div className='app'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los empleados</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
