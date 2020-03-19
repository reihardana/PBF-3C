import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pocophone from './pocophone.jpg';
import Iphone from './iphone.jpg';
import Rog from './rog.jpg';
import Mipad from './mipad.jpg';
import Ipad from './ipad.jpg';
import Taba from './taba.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/about">SHOPHUB</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/about">about</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton/>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <ShopRoute path="/shop">
            <ShopPage/>
          </ShopRoute>
        </Switch>
        <footer class="page-footer font-small blue">
      <div class="footer-copyright text-center py-3">© 2020 Copyright: Reinaldo Hardana</div>
    </footer>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
      <button class= "btn btn-warning" onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}>
        Sign out
      </button>
  ) : (
    <button className="btn btn-primary" onClick={login}>Log in</button>
  );
}
function ShopRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : ( 
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />    
        ) 
      }
    />  
  );
}
function AboutPage() {
  return (
    <h3>Shophub is e-commerce platform in POLINEMA</h3>
  );
}
function ShopPage() {
  return (
    <Router>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/tablets">Tablets</Link>
          </li>
          <li className="list-group-item">
            <Link to="/smartphones">Smartphones</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/tablets">
            <Tablets/>
          </Route>
          <Route path="/smartphones">
            <Smartphones/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button className="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}
function Smartphones() {
  let {path, url} = useRouteMatch();
  return (
    <div>
      <h2>Smartphone</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/Pocophone F1, Snapdragon 845, IDR 3.199.000`}>
            <img src={Pocophone} alt="" className="productimg"/>
            <div class="producttitle">Pocophone F1</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Iphone 11 Pro Max, IOS 13, IDR 23.699.000`}>
            <img src={Iphone} alt="" className="productimg"/>
            <div class="producttitle">Iphone 11 Pro Max</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/ROG Phone 2, Snapdragon 855+, IDR 8.199.000`}>
            <img src={Rog} alt="" className="productimg"/>
            <div class="producttitle">ROG Phone 2</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Pilih smartphone untuk detail dan harga!</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <Smartphone />
        </Route>
      </Switch>
    </div>
  );
}
function Smartphone() {
    let {productId} = useParams();
    return (
      <div>
        <h3>{productId}</h3>
      </div>
    );
}
function Tablets() {
  let {path, url} = useRouteMatch();
  return (
    <div>
      <h2>Tablets</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/Mi Pad 4, 200 x 120, IDR 2.860.000`}>
            <img src={Mipad} alt="" className="productimg"/>
            <div class="producttitle">Xiaomi Mi Pad 4</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Ipad Pro, 12.9 Inch, IDR 20.100.000`}>
            <img src={Ipad} alt="" className="productimg"/>
            <div class="producttitle">Apple Ipad Pro</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Samsung Tab A, T295, IDR 2.100.000`}>
            <img src={Taba} alt="" className="productimg"/>
            <div class="producttitle">Samsung Tab A</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Pilih tablet untuk detail dan harga!</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <Tablet />
        </Route>
      </Switch>
    </div>
  );
}
function Tablet() {
    let {productId} = useParams();
    return (
      <div>
        <h3>{productId}</h3>
      </div>
    );
}

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route path="/topics">
//             <Topics/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>  
//   );
// }
// function Topics() {
//   let {path, url} = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic!</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//     let {topicId} = useParams();
//     return (
//       <div>
//         <h3>{topicId}</h3>
//       </div>
//     );
// }

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<Child/>}/>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();
//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// export default function BasicExamples() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route exact path="/about">
//             <About/>
//           </Route>
//           <Route exact path="/dashboard">
//             <Dahsboard/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   ); 
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   ); 
// }

// function Dahsboard() {
//   return (
//     <div>
//       <h2>Dahsboard</h2>
//     </div>
//   ); 
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//         <div className="btn btn-primary btn-sm">BOOTSTRAP</div>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
