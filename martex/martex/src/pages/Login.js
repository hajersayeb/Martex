import 'bootstrap/dist/css/bootstrap.css';
import loginImg from "../pages/images/office.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import '../pages/styles/Login.css';
import { useState } from 'react';
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The email you entered was: ${email}, The password you entered was: ${password}`);
}

    return(
        <>
        <div className='container-fluid'>
<div className='row'>
<div className='col-6 lg-6 sm-3'>
<img src={loginImg} className='img-fluid' alt=''>

</img>

</div>
<div className='col-6 lg-6 sm-3'>
    <form onSubmit={handleSubmit}>
        <h1>
            Login your account
        </h1>
<div class="mb-3 row">

    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" readonly class="form-control" id="s" placeholder="email" value={email} 
      onChange={(e) => setEmail(e.target.value)} />
    </div>
  </div>
  <div class="mb-3 row">

    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="" placeholder="password" value={password}
      onChange={(p) => setPassword(p.target.value)} />

    </div>
  </div>
  <button type="submit" className="btn btn-danger">Login</button>
  
  <p>
  <FontAwesomeIcon icon={faUserLock} /> create new account
  </p>
  </form>
</div>
</div>
        </div>

</>
)
};
export default Login;