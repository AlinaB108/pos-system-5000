import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './Footer.css'

function Footer() {
  return (
    <div>
      <h2>Footer section</h2>
    </div>
  );
}

export default Footer;