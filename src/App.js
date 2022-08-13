import { useAuth } from './hook/useAuth'
import { Login } from './Pages/Login';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home/home';
import { Popular } from './Pages/Popular/Popular';
import { Top } from './Pages/TopRated/Top';
import { UpComing } from './Pages/UpComing/UpComing';
import { TvShow } from './Pages/TvShow/TvShow';
import { Header } from './Pages/Header/Header';
import { RenderPosts } from './RenderPosts/RenderPosts';
import { PostsPopularRender } from './RenderPosts/PopularRender/PostPopularRender';


function App() {
  const { token } = useAuth()
  return (
    <>
      {token ? <Header /> : <Login />}

      <div className="row">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/top-rated' element={<Top />} />
          <Route path='/upcoming' element={<UpComing />} />
          <Route path='/tv-show' element={<TvShow />} />
          <Route path='/tv/:id' element={<RenderPosts />} />
          <Route path='/movies/:id' element={<PostsPopularRender />} />
        </Routes>
      </div>


    </>

  );
}

export default App;
