import './App.css';
import Home from './containers/pages/Home';
import { Route, Switch } from 'react-router-dom';
import Products from './containers/pages/Products';
import Singleproduct from './containers/pages/Singleproduct';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/singleproduct" component={Singleproduct}/>
      </Switch>
      
    </div>
  );
}

export default App;
