import axios from "axios";
import React, { useEffect, useState } from "react";
import { animate, stagger } from "@motionone/dom";
import Spinner from "../Utils/Spinner";

const CyberSecurity = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = async () => {
    const API_URL =
      "https://api.gdeltproject.org/api/v2/doc/doc?query=cybersecurity&mode=ArtList&format=json";

    try {
      const response = await axios.get(API_URL);
      setNews(response.data.articles || []);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setError(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    // Trigger the slide-in animation when `news` updates
    if (news.length > 0) {
      const elements = document.querySelectorAll(".news-card-contain");
      animate(
        elements,
        { opacity: [0, 1], translateY: [50, 0] }, // Animate from 50px below and fade in
        { duration: 0.5, delay: stagger(0.1) } // Staggered animation with 0.1s delay
      );
    }
  }, [news]);

  if (loading) return <Spinner loading={loading}/>
  if (error) return <div>Error fetching news!</div>;

  const handleMouseEnter = (e) => {
    animate(e.currentTarget, { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }, { duration: 0.3 });
  };

  const handleMouseLeave = (e) => {
    animate(e.currentTarget, { scale: 1, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }, { duration: 0.3 });
  };

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
            <h3>{article.title}</h3>
            <p>{article.seendate}</p>
            <p>{article.sourcecountry}</p>
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

export default CyberSecurity;
