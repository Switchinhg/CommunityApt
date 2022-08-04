import Navbar from './componentes/navbar/Navbar';
import {  Route ,Routes } from 'react-router-dom'
import Nosotros from './componentes/nosotros/Nosotros';
import Contacto from './componentes/contacto/Contacto';
import Login from './componentes/login/Login';
import Index from './componentes/index/Index';
import './estilos/estilos.css'

function App() {
  return (
    <>
    
    <Navbar />

    <Routes >
      <Route path='/' element={<Index /> } />
      <Route path='/nosotros' element={<Nosotros />}/>
      <Route path='/contacto' element={<Contacto />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
