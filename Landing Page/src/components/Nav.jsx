import logo from "../assets/brand_logo.png";
import "./Nav.css";

export function Nav() {
  return (
    <div>
      <nav className="container">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul>
            <li href="#"> Menu</li>
            <li href="#">Logo</li>
            <li href="#"> About</li>
            <li href="#"> Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}
