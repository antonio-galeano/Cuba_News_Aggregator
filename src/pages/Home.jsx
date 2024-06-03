import React, { lazy, Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const News = lazy(() => import('../components/News'));
const Pagination = lazy(() => import('../components/Pagination'));

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [source, setSource] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 9;

  const fetchRSS = async (url) => {
    try {
      const response = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
      const parser = new DOMParser();
      return parser.parseFromString(response.data, "application/xml");
    } catch (error) {
      console.error('Fetch error:', error);
      return new DOMParser().parseFromString("<rss></rss>", "application/xml");
    }
  };

  const loadNews = async (source) => {
    const urls = {
      all: [
        "https://diariodecuba.com/rss.xml",
        "https://www.cibercuba.com/rss.xml",
        "https://adncuba.com/rss.xml",
        "https://www.14ymedio.com/rss/",
        "https://eltoque.com/api/feed",
        "https://revistaelestornudo.com/feed"
      ],
      diariodecuba: ["https://diariodecuba.com/rss.xml"],
      cibercuba: ["https://www.cibercuba.com/rss.xml"],
      adncuba: ["https://adncuba.com/rss.xml"],
      ymedio: ["https://www.14ymedio.com/rss/"],
      eltoque: ["https://eltoque.com/api/feed"],
      elestornudo: ["https://revistaelestornudo.com/feed"]
    };

    const selectedUrls = source === 'all' ? urls.all : urls[source];
    let fetchedArticles = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let url of selectedUrls) {
      const rss = await fetchRSS(url);
      const items = Array.from(rss.querySelectorAll('item'));
      for (let item of items) {
        const pubDate = new Date(item.querySelector('pubDate') ? item.querySelector('pubDate').textContent : new Date());
        const pubDateStartOfDay = new Date(pubDate);
        pubDateStartOfDay.setHours(0, 0, 0, 0);

        if (pubDateStartOfDay.getTime() !== today.getTime()) {
          continue;
        }

        let image = item.querySelector('enclosure') ? item.querySelector('enclosure').getAttribute('url') :
                    item.querySelector('media\\:content, content') ? item.querySelector('media\\:content, content').getAttribute('url') :
                    '/placeholder.jpg'; 

        let sourceName = url.split('/')[2].replace("www.", "").replace(/\.\w+$/, "");

        fetchedArticles.push({
          title: item.querySelector('title') ? item.querySelector('title').textContent : 'Sin título',
          link: item.querySelector('link') ? item.querySelector('link').textContent : '#',
          source: sourceName,
          pubDate: pubDate,
          formattedDate: `${pubDate.getDate()}-${pubDate.toLocaleString('es-ES', { month: 'long' })}-${pubDate.getFullYear()} ${pubDate.getHours().toString().padStart(2, '0')}:${pubDate.getMinutes().toString().padStart(2, '0')}`,
          image: image
        });
      }
    }

    fetchedArticles.sort((a, b) => b.pubDate - a.pubDate);
    setArticles(fetchedArticles);
    localStorage.setItem('articles', JSON.stringify(fetchedArticles));
  };

  useEffect(() => {
    const cachedArticles = localStorage.getItem('articles');
    if (cachedArticles) {
      setArticles(JSON.parse(cachedArticles));
    }
    loadNews(source);
  }, [source]);

  useEffect(() => {
    const interval = setInterval(() => {
      loadNews(source);
    }, 600000);

    return () => clearInterval(interval);
  }, [source]);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery) || 
    article.source.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container">
      <Header setSource={setSource} onSearch={handleSearch} />
      <Suspense fallback={<div>Loading...</div>}>
        <News articles={filteredArticles.slice(currentPage * pageSize, (currentPage + 1) * pageSize)} />
        <Pagination
          totalArticles={filteredArticles.length}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Suspense>
    </div>
  );
};

export default Home;