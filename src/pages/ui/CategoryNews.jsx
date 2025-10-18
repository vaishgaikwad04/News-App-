import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryNews() {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=ab6bf503124be66cffbd9a87b5591339`
        );
        const data = await res.json();
        setNews(data.articles || []);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Latest <span className="text-blue-600 capitalize">{category}</span> News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {article.description?.slice(0, 100)}...
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 font-medium mt-3 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
