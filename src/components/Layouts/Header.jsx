import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';


function Header() {
  // const loginUser = useSelector((state) => state.auth.userData);
  const loginUser = {
    first_name:localStorage.getItem('first_name'),
    last_name:localStorage.getItem('last_name'),
  }
  return (
     <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/appointments">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Link</NavLink>
              </li>   
            </ul>
            <ul className="navbar-nav ml-auto">
              {loginUser?
              <>
                <li class="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle"></i> {loginUser && loginUser.first_name+' '+loginUser.last_name}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/profile/update/password">Change Password</a></li>
                    <li><a className="dropdown-item" href="/profile/update/image">Update Profile Image</a></li>
                     
                  </ul>
                </li>
              </>:
              <>
                <li>
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
              </>
              }
            </ul>   
          </div>
        </div>
      </nav>
     </React.Fragment>
  )
}

export default Header
