import React from "react";
import {Routes , Route} from 'react-router-dom'

import {} from 'react-router-dom';

import Statement from "../pages/Statement"

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Statement/>} />
    </Routes>
);

export default AppRoutes;