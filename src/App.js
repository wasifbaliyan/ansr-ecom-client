import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
