import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">MovieApp</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
          <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        </ul>
      </div>
    </nav>
  )
}
