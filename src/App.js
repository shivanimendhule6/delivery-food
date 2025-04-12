import React  from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';



const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Shiv</strong>
      </p>
    </footer>
  );
};

const Applayout = () => {
    return (
        <div>
            {/* <Number />  */}
            <div className="app">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)