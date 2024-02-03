import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
    //   import.meta.env.API_KEY}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e2a033ce6aa34648be4a11f6d0cce7d2`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e2a033ce6aa34648be4a11f6d0cce7d2`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest{" "}
        <>
          <span className=" badge bg-danger text-white">News</span>
        </>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem className=""
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default NewsBoard;
