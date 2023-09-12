import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TABLE } from "../../utils/queries";
import { useParams } from "react-router-dom";
import SingleOrder from "../../components/SingleOrder/SingleOrder";

export default function Table() {
    const id = useParams();
    console.log(id)
    const { loading, data } = useQuery(QUERY_TABLE, {
        variables: { "id": id._id },
    });
    const tableOrder = data?.table || {};
    console.log(tableOrder);

    return <SingleOrder tableOrder = {tableOrder}/>
}
