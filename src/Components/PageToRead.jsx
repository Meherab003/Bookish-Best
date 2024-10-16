import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Helmet } from "react-helmet-async";

const PageToRead = () => {
  const [readListBooks, setReadListBooks] = useState([]);
  const bookListsData = useLoaderData();
  useEffect(() => {
    const readListBooks = getStoredReadBooks();
    const booksReadList = bookListsData.filter((book) =>
      readListBooks.includes(book.id)
    );
    setReadListBooks(booksReadList);
  }, [bookListsData]);

  //   Barchart realted
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div>
      <Helmet> 
        <title>BookishBest | Page To Read</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-[#13131308]">
        <BarChart
          width={500}
          height={300}
          data={readListBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readListBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PageToRead;
