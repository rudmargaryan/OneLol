import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import MyPost from "./pages/MyPage";
import Pag from "./pages/Pag";
import { Register } from "./pages/Register";
import { See } from "./pages/See";
import { GlobalStyles } from "./stylesComponent/Home";


function App() {
  return (
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loading' element={<Loading/>}/>
          <Route path='/page' element={<Pag/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/post/mypage' element={<MyPost/>}/>
          <Route path='/post/mypage/createpost' element={<CreatePost/>}/>
          <Route path='/post/see' element={<See/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
