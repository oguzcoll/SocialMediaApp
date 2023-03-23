import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sit
            eos laborum nesciunt tempore rerum quidem nisi maxime nam eligendi
            error ex recusandae cum ducimus, natus blanditiis tempora sapiente
            molestias?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
