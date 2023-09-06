import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './Contact.css'

function Contact() {
  return (
    <div>
      <h2>Contact section</h2>
    </div>
  );
}

export default Contact;