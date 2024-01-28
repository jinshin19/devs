import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Index from "./pages";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Index/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
    </Routes>
  )

}

export default App;