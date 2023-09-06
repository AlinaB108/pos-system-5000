import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './About.css'
// Something else

function About() {
  return (
    <div>
      <h2>About us section</h2>
    </div>
  );
}

export default About;