import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="neft_nav"></section>
                <section className="main">
                <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayouts;