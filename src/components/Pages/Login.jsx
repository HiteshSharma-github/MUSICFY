import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";
<link rel="manifest" href="/manifest.json"></link>
class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">🎶Musicfy</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>..Sing Along...</h1>
                            <p>Sometimes All You Need Is Music, If You Wanna Feel Better</p>
                            <Link to={"/home"} className="btn">
                            🎧 START LISTENING 🎧
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;