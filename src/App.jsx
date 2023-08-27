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

        {/* Public routes */}
        <Route index element={<Login />} />
        <Route path="registration" element={<RegistrationForm />} />

        {/* Private routes */}
        <Route element={<RequiredAuth />}> 
          <Route path="/*" element={<WanderPalRoutes />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
