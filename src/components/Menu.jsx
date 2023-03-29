import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const activeLinkStyle = {
    borderLeft: "2px solid #AA5656",
    outline: "none",
  };

  const inactiveLinkStyle = {
    borderBottom: "2px solid transparent",
    opacity: "80%",
  };

  return (
    <header>
      <nav className="navbar">
        <NavLink
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
          className="nav-link"
          to="."
        >
          <ion-icon name="pie-chart-outline"></ion-icon>
          Balance
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
          className="nav-link"
          to="deposits"
        >
          <ion-icon name="cash-outline"></ion-icon>
          Deposits
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
          className="nav-link"
          to="expenses"
        >
          <ion-icon name="card-outline"></ion-icon>
          Expenses
        </NavLink>
      </nav>
    </header>
  );
}
