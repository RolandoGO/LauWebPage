import React, { useEffect } from "react";
import Home from "./screen/public/landingPage/Home";
import Admin from "./screen/protected/admin/Admin"
import NavbarComponent from "./common/nav/Navbar"
import Footer from "./common/footer/Footer"
import AdminProtectRoute from "./auth/protectedRoutes/AdminProtectRoute"
import LoginProtectedRoute from "./auth/protectedRoutes/LoginProtectedRoute";
import {Switch, Route, Redirect, useHistory} from "react-router-dom"
import LogIn from "./auth/login/LogIn";
import Pictures from "./screen/public/pictures/Pictures"
import Contact from "./screen/public/contact/Contact"
import PicturesContext from "./context/picturesContext";

function App() {
  
  const history = useHistory()

 
  
  return (
    <div className="App">
      <NavbarComponent/>
      <main className="myContainer">
        <PicturesContext>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact  path="/contact" component={Contact}/>
            <Route exact path="/pictures" component={Pictures}/>

            <LoginProtectedRoute path ="/adminLogin" component={LogIn}/>
            

            <AdminProtectRoute path="/admin" component={Admin}/>
            <Redirect  to="/"/>

          </Switch>
        </PicturesContext>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
