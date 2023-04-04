import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const activeLinkStyle = {
    borderLeft: "2px solid #AA5656",
    outline: "none",
    transition: "all 0.2s",
    fontWeight: "500",
  };

  const inactiveLinkStyle = {
    borderLeft: "2px solid transparent",
    opacity: "80%",
    transform: "scale(0.9)",
    transition: "all 0.2s",
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
        <NavLink
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
          className="nav-link"
          to="goals"
        >
          <ion-icon name="rocket-outline"></ion-icon>
          Goals
        </NavLink>
      </nav>
    </header>
  );
}
