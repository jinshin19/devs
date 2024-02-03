import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Index from "./pages";
import Update from "./pages/Update";
import Read from "./pages/Read";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Index/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/read/:id" element={ <Read/> } />
      <Route path="/update/:id" element={ <Update/> } />
    </Routes>
  )

}

export default App;