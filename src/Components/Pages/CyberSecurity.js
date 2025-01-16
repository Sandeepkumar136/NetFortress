import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CyberSecurity = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchNews = async () => {
        const API_URL = "https://api.gdeltproject.org/api/v2/doc/doc?query=cybersecurity&mode=ArtList&format=json";

        try {
            const response = await axios.get(API_URL);
            setNews(response.data.articles || []);
            setLoading(false);
        } catch (error) {
            setError(true);
        } finally {
            setError(false)
        }

    }

    useEffect(() => {
      fetchNews();
    }, []);

    if(loading) return <div>Loading..</div>
    if(error) return <div>{error}</div>
    

    return (
        <div>
            <h2>CyberSecurity News</h2>
            <div>
                {
                    news.map((article, index)=>(
                        <div key={index} className='news-card-contain'>
                            <h3>{article.title}</h3>
                            <p>{article.seendate}</p>
                            <p>{article.sourcecountry}</p>
                            <a href={article.url} target='_blank'
                            rel='noopener noreferrer'
                            >Readmore</a>
                        </div>
                    ))
                }

            </div>



        </div>
    )
}

export default CyberSecurity
