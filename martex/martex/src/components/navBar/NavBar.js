import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
    return (
        <>
       
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link class="navbar-brand"to="/">Acceuil</Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/features'>Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='login'>Login</Link>
        </li>
      </ul>
    </div>
            
  </div>
        </nav>
        <Outlet />
        </>
    )
};
export default NavBar;
