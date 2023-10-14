import { BrowserRouter } from "react-router-dom";
import ElevateRoutes from "./routes";
import { ToastContainer} from 'react-toastify';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-center" theme="colored"/>
    <ElevateRoutes/>
    </BrowserRouter>
  );
}

export default App;
