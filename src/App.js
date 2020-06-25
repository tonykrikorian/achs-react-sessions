import React, { lazy, Suspense } from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HelloWorldUser = lazy(() => import("./components/HelloWorldUser"));
const SearchPokemon = lazy(() => import("./components/SearchPokemon"));
const PlaceholderComponent = lazy(() =>
  import("./components/PlaceholderComponent")
);
export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<span>...loading</span>}>
          <Switch>
            <Route path="/" exact render={() => <span>Home Page</span>} />
            <Route path="/acerca" exact render={() => <span>Acerca</span>} />
            <Route
              path="/contacto"
              exact
              render={() => <span>Contacto</span>}
            />
            <Route path="/user/:id" exact render={() => <HelloWorldUser />} />
            <Route path="/search" exact render={() => <SearchPokemon />} />
            <Route
              path="/placeholder"
              exact
              render={() => <PlaceholderComponent />}
            />
            <Route render={() => <span>No encontrado</span>} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
