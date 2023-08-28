
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registration-form';
import Login from './components/login';
import WanderPalRoutes from './routes/WanderPalRoutes';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<RegistrationForm />} />

      {/* Private routes */}
      <Route element={<PrivateRoute />}> 
      
          <Route path="/*" element={<WanderPalRoutes />} />
        </Route>
      
    </Routes>
  );
}

export default App;
