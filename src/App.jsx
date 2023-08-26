import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RegistrationForm from './components/registration-form';
import Login from './components/login';
import WanderPalRoutes from './routes/WanderPalRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes */}
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<RegistrationForm />} />

        {/*private routes */}
        <WanderPalRoutes /> 

        

      </Route>
    </Routes>
  );
}

export default App;
