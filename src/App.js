import React,{useEffect, useState} from "react";
import HomePage from "./componunt/HomePage";
import NavigationBar from "./componunt/NavigationBar";
import ConstctUs from "./componunt/ContactUs";
import AboutUs from "./componunt/ProductDetails";
import Category from "./componunt/Category";
import {BrowserRouter as  Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";

const App = () => {
  const[product, setProduct] = useState([]);
  useEffect(() => {
    (async function () {
        let result = await axios.get('https://fakestoreapi.com/products');
        setProduct(result.data);

        // let categoryTabs = result.map(e => e.category);
        // let temp = new Set(categoryTabs);
        // categoryTabs = [...temp]
        // setCatTabs(categoryTabs);  
    })();
  }, []);

  return (
    <>
      <NavigationBar />
      <HomePage cartData={product}  />
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={Profile} />
        <Redirect  to="/" />
      </Switch> */}
    </>
  );
}

export default App;
