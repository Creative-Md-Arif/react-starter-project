
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} >
          <Route path='/' element={<Home/> }></Route>
          <Route path='/contact' element={<Contact/> }></Route>


        </Route>
      </Route>
    )
  );
  return  <RouterProvider router={router} />
}

export default App
