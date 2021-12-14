import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './../Login.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterSubmit = e =>{
        e.preventDefault();
        // Some firebase stuff

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{

                //successfully created a new user with email and password
                console.log(auth);
            })
            .catch(error=>alert(error.message))
            if (auth){
                history.push('/')
            }
    }


    const handleSignInSubmit = (e) =>{
        e.preventDefault()
        //Some firebase signin stuff

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error=> alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={event=>setPassword(event.target.value)} 
                    />

                    <button 
                        className="login__signInButton"
                        onClick={handleSignInSubmit}
                        >Sign In
                    </button>

                    <p>
                        By signing-in you agree to Amazon's conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads Notice.
                    </p>

                    <button 
                        className="login__registerButton" 
                        onClick={handleRegisterSubmit}
                        >Create your Amazon account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;