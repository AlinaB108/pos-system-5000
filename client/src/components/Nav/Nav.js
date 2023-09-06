import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './Nav.css'

function Nav() {
  return (
    <div>
      <h2>Nav section</h2>
    </div>
  );
}

export default Nav;