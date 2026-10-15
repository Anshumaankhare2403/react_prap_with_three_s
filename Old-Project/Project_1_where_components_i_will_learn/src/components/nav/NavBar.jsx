import Login from "../buttons/Login"
import { IoCart } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
function NavBar({onLogin}) {
  return (
    <>
    <div className="Nrow">
        <div className="Ncol"><h1 className="h1">WallpaperApp</h1></div>
        <div className="Ncol">
            <Link className="Ncol" to="/">Home</Link>
            <Link className="Ncol" to="/about">About</Link>
            <Link className="Ncol">ContactUs</Link>
        </div>
        <div className="Ncol">
          {!onLogin?<Login links = "/login"/>:<FaUserAlt />}
            
            <IoCart style={{"fontSize":"1.8rem"}} />
        </div>
        
        
    </div>
    </>
  )
}

export default NavBar
