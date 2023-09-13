import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TABLE } from "../../utils/queries";
import { useParams } from "react-router-dom";
import SingleOrder from "../../components/Pos/SingleOrder";

export default function Table() {
    const id = useParams();
    const { loading, data } = useQuery(QUERY_TABLE, {
        variables: { "id": id._id },
    });
    if(loading){
        return <div > loading...</div>
    }else{
        const tableOrder = data?.table || {};
        return <SingleOrder tableOrder = {tableOrder}/>
    }
    
}
