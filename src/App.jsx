
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registration-form';
import Login from './components/login';
import WanderPalRoutes from './routes/WanderPalRoutes';




function App() {
  return (
    <Routes>
  
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<RegistrationForm />} />
      
      <Route path="/*" element={<WanderPalRoutes />} />
     
    
      
    </Routes>
  );
}

export default App;
