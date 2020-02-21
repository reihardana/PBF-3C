import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myPhoto from './photo.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hello = () =>{
    return <p>hello</p>
}

const Biodata = () =>{
    return(
        <div className="Biodata">
            <header className="App-header">
                <h2 id="bio">Biodata</h2>
                <img src={myPhoto} alt="" id="photo"/>
                <p>
                    <table id="table" align="center" className="table table-borderless">
                        <tr>
                            <td>Nama</td><td>:</td><td>Reinaldo Hardana</td>
                        </tr>
                        <tr>
                            <td>NIM</td><td>:</td><td>1741720009</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td><td>:</td><td>Teknologi Informasi</td>
                        </tr>
                        <tr>
                            <td>Prodi</td><td>:</td><td>DIV Teknik Informatika</td>
                        </tr>
                        <tr>
                            <td>Kelas</td><td>:</td><td>TI-3C</td>
                        </tr>
                    </table>
                </p>
            </header>
        </div>
    );
}

//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Biodata />, document.getElementById('biodata'));
//ReactDOM.render(<p>hello world</p>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
