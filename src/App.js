import './App.css';
import Home from "./pages/Home"
import AddUserForm from "./pages/AddUserForm"
import EditUserForm from "./pages/EditUserForm"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/Add-user" element={<AddUserForm/>} />
        <Route path="/Edit-user/:userId" element={<EditUserForm/>} />
        <Route path="*" element={<h1 style={{color:"red"}}>ERROR 404:PAGE NOT FOUND</h1>} />



      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
