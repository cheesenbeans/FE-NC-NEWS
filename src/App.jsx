import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics"
import TopicArticleList from "./components/TopicArticleList";
import "./App.css";

function App() {
  const [articlesList, setArticlesList] = useState([]);
  const [topicQuery, setTopicQuery]= useState("coding")


  return (
  <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles articlesList={articlesList} setArticlesList={setArticlesList} />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<Topics setTopicQuery={setTopicQuery}/>} />
          <Route path={`/topic=${topicQuery}`} element={<TopicArticleList topicQuery={topicQuery}/>}/>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
    )
}

export default App;
