import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="">
            <a href="/home" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="">
          <li className="">
            <Link to="/home/signup">
              Signup
            </Link>
          </li>
          <li className="">
            <Link to="/home/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="">
      <h1>
        <Link to="/home">
          Sapori D'Italia
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
