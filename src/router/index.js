import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Router,
  Outlet,
} from "react-router-dom";
import Login from "../view/Login/Login";
import Home from "../view/Home/Home";
import MainBox from "../view/MainBox/MainBox";
import UserList from "../view/UserManage/UserList";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<MainBox></MainBox>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/user-manage/list"
            element={<UserList></UserList>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
