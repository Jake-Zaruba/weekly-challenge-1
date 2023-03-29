import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

export default function Layout() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
