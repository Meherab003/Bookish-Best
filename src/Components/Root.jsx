import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
    return (
        <div className="w-[96%] lg:w-11/12 mx-auto secondary-font">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;