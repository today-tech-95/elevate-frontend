import { BrowserRouter } from "react-router-dom";
import ElevateRoutes from "./routes";
import { ToastContainer} from 'react-toastify';
import './App.css';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <BrowserRouter>
    <ToastContainer position="top-center" theme="colored"/>
    <ElevateRoutes/>
    </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
