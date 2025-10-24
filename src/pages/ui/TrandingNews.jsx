import React, { useEffect, useState } from "react";

const TrendingNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "ab6bf503124be66cffbd9a87b5591339";

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${API_KEY}`
        );
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching trending news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading)
    return (
      <p className="text-center py-10 text-lg text-gray-500 animate-pulse">
        Loading trending news...
      </p>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <img
              src={article.image || "https://via.placeholder.com/400x200"}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium mt-auto inline-block"
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

export default TrendingNews;
