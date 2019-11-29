import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Movies, Customers, Rentals, Login, NotFound } from '../../pages';

export default function Main() {
  return (
    <Switch>
      <Route path="/movies" component={Movies} />
      <Route path="/customers" component={Customers} />
      <Route path="/rentals" component={Rentals} />
      <Route path="/login" component={Login} />
      <Route path="/not-found" component={NotFound} />
      <Redirect exact from="/" to="/movies" />
      <Redirect to="/not-found" />
    </Switch>
  );
}
