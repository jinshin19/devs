import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Index from "./pages";
import Update from "./pages/Update";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Index/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/update/:id" element={ <Update/> } />
    </Routes>
  )

}

export default App;