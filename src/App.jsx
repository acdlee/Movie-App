import { Routes, Route } from "react-router";

import PublicLayout from "./components/layouts/PublicLayout";
import Home from "./components/pages/Home";
import NowPlaying from "./components/pages/NowPlaying";
import About from "./components/pages/About";
import Review from "./components/pages/Review";

function App() {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="reviews" element={<Review />}/>
        <Route path="playing" element={<NowPlaying />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </PublicLayout>
  );
}

export default App
