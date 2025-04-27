import React  from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer bg-orange-100 text-center px-2 py-3 mt-10">
      <p className="">
        Copyright &copy; {currYear}, Made with 💗 by <strong>Shiv</strong>
      </p>
    </footer>
  );
};

const Applayout = () => {
    return (
        <div>
            <div className="app">
                <Header />
                <Outlet/>
                <Footer />
            </div>
        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Applayout/>,
    children : [
      {
        path: "/",
        element : <Body/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path: "/contact",
        element : <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element : < RestaurantMenu />
      }
    ],
    errorElement : <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<Applayout/>)