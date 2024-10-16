import React, { useState } from 'react';





const AdminDashboard = () => {
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button>Create Article</button>
      <button>Edit Article</button>
      <button>Delete Article</button>
    </div>
  );
};

const NewsArticle = ({ article }) => {
  
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

const BlogPage = () => {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [showSecretKeyInput, setShowSecretKeyInput] = useState(false);

  const handleAdminLogin = () => {
    setShowSecretKeyInput(true);
  };

  const handleAdminAuth = (event) => {
    event.preventDefault();
   
    const secretKey = event.target.secretKey.value;
    console.log(process.env.REACT_APP_ADMIN_SECRET_KEY)
    if (secretKey === process.env.REACT_APP_ADMIN_SECRET_KEY) {
      setAdminAuthenticated(true);
      setShowSecretKeyInput(false);
    } else {
      alert('Invalid secret key');
    }
  };

  const handleCreateArticle = (article) => {

    setNewsArticles([...newsArticles, article]);
  };

  const handleEditArticle = (article) => {
    
    setNewsArticles(newsArticles.map((a) => (a.id === article.id ? article : a)));
  };

  const handleDeleteArticle = (articleId) => {
    
    setNewsArticles(newsArticles.filter((a) => a.id !== articleId));
  };

  return (
    <div>
      <h1>Blog Page</h1>
      {adminAuthenticated ? (
        <AdminDashboard
          onCreateArticle={handleCreateArticle}
          onEditArticle={handleEditArticle}
          onDeleteArticle={handleDeleteArticle}
        />
      ) : (
        <div>
          <button onClick={handleAdminLogin}>Admin Login</button>
          {showSecretKeyInput && (
            <form onSubmit={handleAdminAuth}>
              <label>
                Secret Key:
                <input type="password" name="secretKey" />
              </label>
              <button type="submit">Authenticate</button>
            </form>
          )}
        </div>
      )}
      <ul>
        {newsArticles.map((article) => (
          <li key={article.id}>
            <NewsArticle article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;