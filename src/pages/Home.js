import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/regnlivesoon">RegnLiveSoon</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/theatre">Theatre</Link>
        </li>
        <li>
          <Link to="/dance">Dance</Link>
        </li>
        <li>
          <Link to="/literary">Literary</Link>
        </li>
        <li>
          <Link to="/arts">Arts</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;