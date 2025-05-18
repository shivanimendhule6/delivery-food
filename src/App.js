import { useState , useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";


const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer bg-orange-100 text-center px-2 py-3 mt-10">
      <p className="">
        Copyright &copy; {currYear}, Made with 💗 by <strong>Shiv</strong>
      </p>
    </footer>
  );
};


const Applayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () =>{
    const data = await fetch('https://api.github.com/users/shivanimendhule6');
    const json = await data.json();
    setUserName(json.name);
  }
  
    return (
        <div>
          <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
              <div className="app">
                  <Header />
                  <Outlet/>
                  <Footer />
              </div>
            </UserContext.Provider>
          </Provider>
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
      },
       {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement : <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<Applayout/>)