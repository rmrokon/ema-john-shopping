import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';


const TitleHelmet = ({ title, ...props }) => {
    return (

        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Routes>
                <Route {...props}></Route>
            </Routes>

        </>
    );
};

export default TitleHelmet;