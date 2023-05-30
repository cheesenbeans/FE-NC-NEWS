import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
  <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/articles" element={<Articles />} /> */}
          {/* <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/add-an-article" element={<AddArticle />} /> */}
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
    )
}

export default App;
