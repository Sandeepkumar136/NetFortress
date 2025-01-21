import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinners from "../Utils/Spinner";
import { animate, stagger } from "@motionone/dom";

const SearchResult = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch news data
  const fetchNews = async () => {
    try {
      const API_URL =
        "https://api.gdeltproject.org/api/v2/doc/doc?query=cybersecurity&mode=ArtList&format=json";
      const response = await axios.get(API_URL);
      setNews(response.data.articles || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchNews();
  }, []);

  // Trigger slide-in animation when `news` updates
  useEffect(() => {
    if (news.length > 0) {
      const elements = document.querySelectorAll(".news-card-contain");
      animate(
        elements,
        { opacity: [0, 1], translateY: [50, 0] }, // Animate from below with fade-in
        { duration: 0.5, delay: stagger(0.1) } // Add stagger effect
      );
    }
  }, [news]);

  // Mouse hover animations for cards
  const handleMouseEnter = (e) => {
    animate(
      e.currentTarget,
      { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" },
      { duration: 0.3 }
    );
  };

  const handleMouseLeave = (e) => {
    animate(
      e.currentTarget,
      { scale: 1, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" },
      { duration: 0.3 }
    );
  };

  // Render loading spinner
  if (loading) return <Spinners />;

  // Render error message if an error occurs
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="n-container">
      {news.map((article, index) => (
        <div
          key={index}
          className="news-card-contain"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="n-overlay-cont">
            <h3>{article.title || "No Title Available"}</h3>
            <p>
              <strong>Date:</strong> {article.seendate || "N/A"}
            </p>
            <p>
              <strong>Source Country:</strong> {article.sourcecountry || "Unknown"}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
