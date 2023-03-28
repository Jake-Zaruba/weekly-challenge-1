import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav className="navbar">
        <NavLink className="nav-link" to=".">
          Balance
        </NavLink>
        <NavLink className="nav-link" to="deposits">
          Deposits
        </NavLink>
        <NavLink className="nav-link" to="expenses">
          Expenses
        </NavLink>
      </nav>
    </header>
  );
}
