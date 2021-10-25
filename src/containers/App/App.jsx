import styles from "./App.module.css";
import PeoplePage from "../PeoplePage/PeoplePage";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/Header/Header";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Switch>
              {routesConfig.map(({ path, exact, component},index) => (
                <Route key={index} path={path} exact={exact} component={component} />
              ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
