import { Link } from "react-router-dom"

function Login({links}) {
  return (
    <Link className="Loginbutton" type="button" to={links}>
      Login
    </Link>
  )
}

export default Login
