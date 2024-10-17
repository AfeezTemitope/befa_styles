import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
console.log(process.env)

const SportNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sports-news'); 
        setNewsArticles(response.data);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <StyledHeading>--- Trending Naija News ---</StyledHeading>
      <NewsContainer>
        {newsArticles.slice(0, visibleCount).map((article, index) => (
          <Article key={index}>
            {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </Article>
        ))}
      </NewsContainer>
      {visibleCount < newsArticles.length && (
        <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};

export default SportNews;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Article = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px); 
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LoadMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledHeading = styled.h3`
  text-align: center; 
  width: 50%;
  margin: 20px auto; 
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50; 
  padding: 10px; 
  background-color: #ecf0f1; 
  border-radius: 5px; 
  box-shadow: 0 2px 5px rgba(0, 128, 0, 0.3);
`;

