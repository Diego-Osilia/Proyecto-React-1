import './App.css';
import Testimonio from "./componentes/Testimonio.js"

function App() {
  return (
    <div className='app'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los empleados</h1>
        <Testimonio 
        nombre='Veronika Zuleta'
        pais='Reino Unido'
        imagen='./imagenes/persona1.jpg'
        cargo='Diseñadora Digital'
        empresa='Hou'
        testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        />
      </div>
    </div>
  );
}

export default App;
