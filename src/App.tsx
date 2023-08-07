import "../src/styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}> Toggle theme </button>
      <Link to={"/"}> Main page </Link>
      <Link to={"/about"}> About page </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
