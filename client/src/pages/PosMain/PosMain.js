import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../../components/Login/Login';
import PosNav from '../../components/PosNav/PosNav';
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';
import Auth from "../../utils/auth";

export default function PosMain() {
    const { loading, data } = useQuery(ME);
    console.log(data)
    const profile = data?.me || {};
    console.log(profile)

    if (!profile?.firstName) {
        return <Login />
    }
    if (loading) {
        // RETURNS A LOADING SCREEN IF DATA LOADING
        return <div>Loading...</div>;
    }

    if (Auth.loggedIn()) {
        return (
            <div className="container">
                <PosNav profile={profile} />
                <Outlet context ={[profile]}/>
            </div>
        );
    }
}
