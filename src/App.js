import { Route, Switch } from "react-router-dom";
import HomepageLayout from "./layouts/HomePageLayout";
import Main from "./components/Main";

function App() {
  return (
    <div className="">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Main />
            </HomepageLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
