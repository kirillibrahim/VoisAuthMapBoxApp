

// Layout.tsx
import React from "react";
import RouterApp from "../RouterApp";
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MainLayout: React.FC = () => { // Rename your Layout component to MainLayout
    const location = useLocation();
    console.log(location.pathname);
    const navVisibleRoutes = ['/users', '/map'];
    return (
        <div className="layout">
            {navVisibleRoutes.includes(location.pathname) && <Navigation />}
            <RouterApp />
        </div>
    );
}

export default MainLayout; // Export MainLayout with the new name
