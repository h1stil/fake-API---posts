import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import About from "./pages/About";
import Posts from "./pages/Posts";
import UserInfo from "./pages/UserInfo";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
