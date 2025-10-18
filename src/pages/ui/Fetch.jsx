import React, { useEffect, useState } from "react";

const categories = [
  "general",
  "technology",
  "sports",
  "business",
  "entertainment",
  "science",
  "health",
  "world",
  "nation",
];

const Fetch = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");

  const fetchNews = async (selectedCategory) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=ab6bf503124be66cffbd9a87b5591339`
      );
      const data = await res.json();
      console.log(data.articles)
      setNews(data.articles || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const placeholderImage = "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Latest <span className="text-blue-600 capitalize">{category}</span> News
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-medium shadow-md transition-all duration-300 transform hover:scale-105 ${
              category === cat
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* News Section */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading latest stories...
        </p>
      ) : news.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No news found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.image || placeholderImage}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs px-3 py-2">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description || "No description available."}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read full article →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetch;
