import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TABLE } from "../../utils/queries";
import { useParams } from "react-router-dom";
import SingleOrder from "../../components/Pos/SingleOrder";

export default function Table() {
    const id = useParams();
    console.log(id)
    const { loading, data } = useQuery(QUERY_TABLE, {
        variables: { "id": id._id },
    });
    if(loading){
        return <div > loading...</div>
    }else{
        console.log(data)
        const tableOrder = data?.table || {};
        console.log(tableOrder);
        return <SingleOrder tableOrder = {tableOrder}/>
    }
    
}
