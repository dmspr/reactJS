import React from 'react'
import LoginPage from './pages/auth/login'
import Register from './pages/auth/register'
import HomePage from './component/HomePage'
import Catalog from './pages/catalog'
import NotFound from './pages/NotFound/NotFound'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
  Outlet
} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import ProductList from './pages/dashboard/routes'




const RequiredAuth = () => {
  let isAuth = localStorage.getItem('access_token');
  if (!isAuth) {
    return <Navigate to="/" />
  }

  //outlet is childer of private route
  return <Outlet />
}

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*public routes pages*/}

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog">
            {/* <Route path=":id" element={<CatalogById />} /> */}
            <Route index element={<Catalog />} />
          </Route>




          {/*Private/Protected Routes pages*/}
          <Route element={<RequiredAuth />}>
            {/* list of RequiredAuth Outlet */}
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route index path="/product" element={<ProductList />} />



            {/*
            example another routes
             <Routes index path="/profile" element={<profile />} /> */}

          </Route>
          {/* Not Found Pages */}

          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>

    </>
  )
}






























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
