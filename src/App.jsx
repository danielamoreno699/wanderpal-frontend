import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RegistrationForm from './components/registration-form';
import Login from './components/login';
import WanderPalRoutes from './routes/WanderPalRoutes';
import RequiredAuth from './components/RequiredAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/*public routes */}
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<RegistrationForm />} />

        {/*private routes */}
        <Route element={<RequiredAuth />}> 
        <WanderPalRoutes /> 
        </Route>

        

      </Route>
    </Routes>
  );
}

export default App;
