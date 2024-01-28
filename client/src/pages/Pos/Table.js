import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TABLE } from "../../utils/queries";
import { useParams } from "react-router-dom";
import SingleOrder from "../../components/Pos/SingleOrder";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentModal from "../../components/PaymentModal";

const stripePromise = loadStripe('pk_test_51OcloAA1E5eaO9iGpyEKeknWFQC1wNcvlNAUgesTpdtMLNIr2AA9n0RlElzUCaIBOiGshPkZxCXifT78HYeYTnF00p0U5DdPk');

export default function Table() {
    const id = useParams();
    const { loading, data } = useQuery(QUERY_TABLE, {
        variables: { "id": id._id },
    });
    if (loading) {
        return <div > loading...</div>
    } else {
        const tableOrder = data?.table || {};
        return <SingleOrder tableOrder={tableOrder} />;
    }

}
