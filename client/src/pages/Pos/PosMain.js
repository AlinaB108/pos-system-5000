import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../../components/Front/Login';
import PosNav from '../../components/Pos/Nav';
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';
import Auth from "../../utils/auth";

export default function PosMain() {
    const { loading, data } = useQuery(ME);
    const profile = data?.me || {};

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
                <PosNav profile ={profile} />
                <Outlet context ={[profile]} />
            </div>
        );
    }
}
