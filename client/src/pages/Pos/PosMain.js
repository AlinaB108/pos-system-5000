import React from 'react';
import { Outlet } from 'react-router-dom';
import PosNav from '../../components/Pos/Nav';
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';
import Auth from "../../utils/auth";
import PosLoginKeyPad from '../../components/Pos/LoginKeyPad';

// , {
//     variables: { "id": id._id },
// }
export default function PosMain() {
    const { loading, data } = useQuery(ME);
    const profile = data?.me || {};

    if (loading) {
        // RETURNS A LOADING SCREEN IF DATA LOADING
        return <div>Loading...</div>;
    }

    if (!Auth.loggedIn())  {
        return (
        <>
            <PosNav profile = {profile} />
            <PosLoginKeyPad />
        </>
        )
    }

    if ( Auth.loggedIn()) {
    return (
            <>
                <PosNav profile ={profile} />
                <Outlet context ={[profile]} />
            </>
        );
    }
};
