import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex flex-col gap-5 lg:gap-7 items-center justify-center h-screen bg-gray-900">
            <h1 className="text-yellow-600 text-5xl lg:text-9xl text-center"><FaRegFaceSadTear /></h1>
            <h1 className="text-red-600 text-4xl lg:text-7xl font-bold text-center">Oops!</h1>
            <h2 className="text-white text-xl font-semibold text-center">{error.status}</h2>
            <h2 className="text-white text-xl lg:text-6xl font-semibold text-center">{error.statusText}</h2>
            <Link className="btn text-lg bg-yellow-600 border-none text-black font-semibold">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;