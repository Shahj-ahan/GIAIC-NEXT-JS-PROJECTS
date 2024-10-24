
import  styleCss from "./header.module.css"


const Nav = () => {
  return (
    <div>
    <nav className={styleCss.Nav}>
      <h1 className={styleCss.h1}>Acution Table</h1>

          <ul>
            <li><a href="LandingPage">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </nav>
      </div>
  )
}

export default Nav;