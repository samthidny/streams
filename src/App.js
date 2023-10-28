import './App.css';
import ErrorPage from './ErrorPage';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Routes, Route, Outlet, Link, createBrowserRouter, RouterProvider, createHashRouter, BrowserRouter, HashRouter } from "react-router-dom";
import { Title } from './pages/Title';

function App() {
  
  console.log('v 0.0.1');
  
  return (
    <div className="App">
      <HashRouter>
      {/* <BrowserRouter> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="title/" >
            <Route path=":titleID" element={<Title />} />
          </Route>   
        </Routes>
      {/* </BrowserRouter> */}
      </HashRouter>

      {/* <RouterProvider router={router} /> */}


    </div>
  );
}

export default App;
