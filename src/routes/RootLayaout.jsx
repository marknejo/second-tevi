import {Outlet} from "react-router-dom";
import MainHeader from "../Components/MainHeader";

function RootLayaout() {
    return <>
    < MainHeader/>
    <Outlet/>                                                                       
    </>
}

export default RootLayaout;