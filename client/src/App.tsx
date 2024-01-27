import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

const App = () => {

  return (
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
    </Routes>
  )

}

export default App;