import Navbar from './componentes/navbar/Navbar';
import { Navigate, Route ,Routes } from 'react-router-dom'
import Nosotros from './componentes/nosotros/Nosotros';
import Contacto from './componentes/contacto/Contacto';
import Login from './componentes/login/Login';
import Index from './componentes/index/Index';
import './estilos/estilos.css'
import NotFound from './componentes/notfound/NotFound';
import AuthProvider from './componentes/contextos/AuthContext';

function App() {
  return (
    <div className='gradiant'>

      <AuthProvider >
        <Navbar/> 

        <Routes>
          <Route path='/' element={<Index /> } />
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/login' element={<Login />}/>
          {/* 404 */}
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
