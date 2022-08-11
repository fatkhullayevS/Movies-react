import { useAuth } from './hook/useAuth'
import { Login } from './Pages/Login';
import { Routes, Route } from "react-router-dom"
import { Header } from './Pages/Header/Header';
import { Home } from './Pages/Home/home';
import { Popular } from './Pages/Popular/Popular';


function App() {
  const { token } = useAuth()
  return (
    <>
      {token ? <Header /> : <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/popular' element={<Popular />} />
      </Routes>
    </>

  );
}

export default App;
