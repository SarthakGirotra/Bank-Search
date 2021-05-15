import './App.css';
import Search from "./components/Search/search"
import Table from "./components/table/table";
import Fav from "./components/fav/fav"
import Page from "./components/page/page"
import { useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const data = useSelector((state) => state.banks)
  return (
    <Router>
      <div className="App">
        <Search />

        <Switch>
          <Route exact path="/Bank-Search/favs" component={Fav} />
          <Route exact path="/Bank-Search/:ifsc" component={Page} />
          <Route path="/Bank-Search">
            <Table data={data} />
          </Route>



        </Switch>

      </div>
    </Router >
  );
}

export default App;
