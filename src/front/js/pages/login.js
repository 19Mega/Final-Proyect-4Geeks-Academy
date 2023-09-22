import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import { useFormik } from 'formik';
import * as Yup from 'yup';


const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // let actualLocation = useLocation();
    // console.log("Estoy en login", actualLocation.pathname)

    // function handleInputEmail (event) {
    //     setEmail(event.target.value); // captura el email que escribe el usuario
    // }

    // function handleInputPassword (event) {
    //     setPassword(event.target.value); // captura la contraseña que escribe el usuario
    // }

    // async function handleSubmit(event) { // al presionar el botón login, si los datos están ok, redirecciona al home
    //     event.preventDefault()
    //     let logged = await actions.login(email, password);
    //     if (logged === true) {
    //         navigate("/")
    //     }
    // }

    const formik = useFormik({
        initialValues: {
              email: '',
              password: '',
        },

        validationSchema: Yup.object({
              // firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              // lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
              email: Yup.string().email('Invalid email address.').required('Required').matches(/.*\.com$/, 'Email must end in .com'),
              password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
          }),

          onSubmit: async (values) => {
              //alert(JSON.stringify(values, null, 2));
              let logged = await actions.login(values.email, values.password);
              console.log("TESTTTT: ",values.email, " ", values.password)
              if(logged) { 
                navigate("/") 
              }          
          },
    });


      const menuColor = "#900C3F"

      return (

        <div style={{background: "linear-gradient(to right, rgb(144 12 63 / 5%), rgb(144 12 63 / 5%))"}}>
<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card my-5" style={{ borderImage: 'linear-gradient(to right, #900C3F, #FD5812)', borderImageSlice: '1', borderStyle: 'solid', borderWidth: '6px'}}>
          <div className="card-body p-2 p-sm-5" style={{backgroundColor:"#c7b08c1f"}}>
            <h5 className="card-title text-center mb-5 fw-light fs-2 fw-semibold" style={{color:"#900C3F"}}>Log In</h5>
            <form onSubmit={formik.handleSubmit} >

              <div className="form-floating mb-4">
                <input className="form-control" placeholder="name@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                name="email"
                type="email"
                />

                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: menuColor}} >{formik.errors.email}</div>    
                ) : null}
                
                <label for="floatingInput" style={{ color: menuColor}}>Email address</label>
              </div>

              <div className="form-floating mb-4">
                <input className="form-control" placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
                type="password"
                />
                
                {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: menuColor}} >{formik.errors.password}</div>    
                ) : null}

                <label for="floatingPassword" style={{ color: menuColor}}>Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" htmlFor="rememberPasswordCheck" style={{ color: menuColor}}>
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-login text-uppercase fw-bold text-white" type="submit" style={{backgroundColor:menuColor}}>Log in</button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase text-white fw-bold border border-2" type="submit" style={{backgroundColor:"#3c434c"}}>
                <i className="fa-brands fa-github fa-lg me-2"></i> Sign in with Github
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-login text-uppercase fw-bold text-white" type="submit" style={{backgroundColor:menuColor}}>Sing up</button>
        
                {/* <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  </div>

      );
}
 export default Login;






{/* 
<div className="container">
            <h1 className="mt-5 text-center" id="login-title">Login</h1>
            <div className="d-flex justify-content-center" id="form_container">
                <form 
                onSubmit={formik.handleSubmit}
                id="login-form">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        id="email"
                        name="email"
                        type="email"
                        />

                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>    
                        ) : null}

                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        id="password"
                        name="password"
                        type="password"
                        />
                        
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>    
                        ) : null}

                        <div id="emailHelp" className="form-text"><Link to={"/none"}>Forgot your password?</Link></div>
                    </div>

                    <button type="submit" className="btn btn-success" id="btn-login">Login</button>
                    <div id="emailHelp" className="form-text">Don't have an account yet? <Link to={"/signup"}>Sign Up.</Link></div>
                </form>
            </div>
        </div> */}



 