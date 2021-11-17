import {  Link } from "react-router-dom";
import React from 'react';

import s from './navigation.module.css'

const Navigation = () => (
    <nav>
        <Link className={s.navLink} to="/">home</Link>
        <Link className={s.navLink}  to="/counter">counter</Link>
        <Link className={s.navLink}  to="/todos">todos</Link>
    </nav>
);

export default Navigation;