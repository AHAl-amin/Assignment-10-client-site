
import { Outlet } from 'react-router-dom';
import Navber from '../componants/Navber';

import Footer from "../componants/Footer";
const Main = () => {
    return (
        <div>
            
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;