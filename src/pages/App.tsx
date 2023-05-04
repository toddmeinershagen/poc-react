import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CounterDemo from './CounterDemo';
 

const App = () => {

  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/demo-counter">Demo - Counter</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/demo-counter"  Component={CounterDemo} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
  );
}

export default App;
