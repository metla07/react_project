import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <header >
                <Link to={'/'} className={'link'}>
                    <h2>
                        Главная
                    </h2>
                </Link>
                <Link to={'/profile'} className={'link'}>
                    <h2>
                        Профайл
                    </h2>
                </Link>
                <Link to={'/chats'} className={'link'}>
                    <h2>
                        Чаты
                    </h2>
                </Link>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer
                style={{
                    backgroundColor:'grey',
                    height: 200
            }}>
                Футер
            </footer>
        </>
    );
};

export default Layout;