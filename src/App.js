import './App.css';
import ErrorPage from './ErrorPage';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Routes, Route, Outlet, Link, createBrowserRouter, RouterProvider, createHashRouter, BrowserRouter, HashRouter } from "react-router-dom";
import { Title } from './pages/Title';
import { Provider } from 'react-redux'
import Store from './redux/Store';
import { Favourites } from './pages/Favourites';
import Signin from './pages/Signin';

function App() {

  console.log('v 0.0.1');

  //https://react-redux.js.org/tutorials/quick-start

  return (
    <div className="App">
      <Provider store={Store}>
        <HashRouter>
          {/* <BrowserRouter> */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/" element={<About />} />
            <Route path="favourites/" element={<Favourites />} />
            <Route path="signin/" element={<Signin />} />
            <Route path="title/" >
              <Route path=":titleID" element={<Title />} />
            </Route>
          </Routes>
          {/* </BrowserRouter> */}
        </HashRouter>

        {/* <RouterProvider router={router} /> */}
      </Provider>

    </div>
  );
}

export default App;
