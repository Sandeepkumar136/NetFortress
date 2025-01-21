import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinners from "../Utils/Spinner";
import { animate, stagger } from "@motionone/dom";

const SearchResult = ({ searchQuery }) => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch filtered news based on search query
  const fetchFilteredNews = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const API_URL = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=ArtList&format=json`;
      const response = await axios.get(API_URL);
      const articles = response.data.articles || [];
      setFilteredNews(articles);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Trigger API call when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchFilteredNews(searchQuery);
    } else {
      setFilteredNews([]);
    }
  }, [searchQuery]);

  // Trigger slide-in animation when `filteredNews` updates
  useEffect(() => {
    if (filteredNews.length > 0) {
      const elements = document.querySelectorAll(".news-card-contain");
      animate(
        elements,
        { opacity: [0, 1], translateY: [50, 0] },
        { duration: 0.5, delay: stagger(0.1) }
      );
    }
  }, [filteredNews]);

  // Render loading spinner
  if (loading) return <Spinners />;
  if (error) return <div>Error: {error}</div>;
  if (!loading && filteredNews.length === 0) {
    return <div>No news articles found for the search query.</div>;
  }

  return (
    <div className="n-container">
      {filteredNews.map((article, index) => (
        <div
          key={index}
          className="news-card-contain"
          onMouseEnter={(e) =>
            animate(
              e.currentTarget,
              { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" },
              { duration: 0.3 }
            )
          }
          onMouseLeave={(e) =>
            animate(
              e.currentTarget,
              { scale: 1, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" },
              { duration: 0.3 }
            )
          }
        >
          <div className="n-overlay-cont">
            <h3>{article.title || "No Title Available"}</h3>
            <p>
              <strong>Date:</strong> {article.seendate || "N/A"}
            </p>
            <p>
              <strong>Source Country:</strong> {article.sourcecountry || "Unknown"}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
