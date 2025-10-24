import React, { useEffect, useState } from "react";

const HotNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "ab6bf503124be66cffbd9a87b5591339"; // your key

  useEffect(() => {
    const fetchHotNews = async () => {
      try {
        const res = await fetch(
          `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=8&apikey=${API_KEY}`
        );
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching hot news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotNews();
  }, []);

  if (loading)
    return (
      <p className="text-center text-lg text-gray-500 py-10 animate-pulse">
        Loading Hot News...
      </p>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {news.map((article, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={article.image || "https://via.placeholder.com/400x200"}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* 🔥 Hot Tag */}
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                HOT
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-600 font-medium mt-auto inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotNews;
