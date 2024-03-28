import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BooksSection from "./BooksSection";

const Home = () => {
    const books = useLoaderData([]);
    return (
        <div>
            <Banner></Banner>
            <BooksSection books={books}></BooksSection>
        </div>
    );
};

export default Home;