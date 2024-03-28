import { FaRegFaceSadTear } from "react-icons/fa6";
const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-5 lg:gap-10 items-center justify-center h-screen bg-gray-900">
            <h1 className="text-yellow-600 text-5xl lg:text-9xl text-center"><FaRegFaceSadTear /></h1>
            <h1 className="text-red-600 text-4xl lg:text-7xl font-bold text-center">Oops!</h1>
            <h2 className="text-white text-xl lg:text-6xl font-semibold text-center">Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;