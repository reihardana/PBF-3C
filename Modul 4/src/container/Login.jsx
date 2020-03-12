import React from 'react';
import './Login.css';
class Login extends React.Component{
    render(){
        return (
            <div className="login">
                <h3 className="text-h3">Form Login</h3>
                <div className="card">
                    <h2 className="text-h2">Tugas Pertemuan Ketiga</h2>
                    <form action="#">
                        <label className="label-form" htmlFor="username">Username</label><br/>
                        <input type="text" placeholder="masukkan username" className="input"/><br/>
                        <label className="label-form" htmlFor="password">Password</label><br/>
                        <input type="password" placeholder="masukkan password" className="input"/>
                        <button className="btn-login">Login</button><br/>
                        <input type="checkbox" id="remember"/> Remember Me
                        <br/>
                        <button className="btn-cancel">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;