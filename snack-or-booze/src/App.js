import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddItem from "./AddItem";
import MissingPage from "./MissingPage";
import ThemeProvider from "./ThemeProvider";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  const addItem = (formData, type) => {
    if (type === "snacks") {
      setSnacks((snacks) => [...snacks, { ...formData, id: formData.name }]);
    } else {
      setDrinks((drinks) => [...drinks, { ...formData, id: formData.name }]);
    }
  };

  if (isLoading) {
    return <p className=" pp-loading">Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home snacks={snacks} drinks={drinks} />
              </Route>
              <Route exact path="/snacks">
                <Menu type="snacks" items={snacks} title="Snacks" />
              </Route>
              <Route exact path="/drinks">
                <Menu type="drinks" items={drinks} title="Drinks" />
              </Route>
              <Route path="/:type/new">
                <AddItem addItem={addItem} />
              </Route>
              <Route path="/snacks/:id">
                <Snack type="snacks" items={snacks} cantFind="/snacks" />
              </Route>
              <Route path="/drinks/:id">
                <Snack type="drinks" items={drinks} cantFind="/drinks" />
              </Route>
              <Route>
                <MissingPage />
              </Route>
            </Switch>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
