import { Link } from "react-router-dom";
import { Fluent_Calendar } from "../Components/Calendar";
import { useEffect, useState } from "react";
import { retrieveNews } from "../api/newsAPI";
import News from "../Components/News";

const Dashboard = () => {
  // Placeholder Button returns to Login Page
  const [newsTitle, setNewsTitle] = useState<string>();

  useEffect(() => {
    fetchNewsData();
  })

  const fetchNewsData = async () => {
    const newsTitle = await retrieveNews();
    if (newsTitle != null) {
      setNewsTitle(newsTitle)
    } else {
      console.log("No news data can be retrieved");
    }
  }

  return (
    <div>
      <Fluent_Calendar />
      <Link to={"/"} className="btn btn-primary">
        Dashboard page, click to Login
      </Link>
      <News newsTitle={newsTitle} />
    </div>
  );
}

export default Dashboard