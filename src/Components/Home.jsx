import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BooksSection from "./BooksSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const books = useLoaderData([]);
    return (
        <div>
            <Helmet>
                <title>BookishBest | Home</title>
            </Helmet>
            <Banner></Banner>
            <BooksSection books={books}></BooksSection>
        </div>
    );
};

export default Home;