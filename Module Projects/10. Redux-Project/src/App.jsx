import Navbar from "./components/Navbar";
import News from "./components/News";
import { useDispatch, useSelector } from "react-redux";
import { getHeadlines, fetchNews } from "./redux/slices/newsslice";
import { useEffect } from "react";
import Slider from "react-slick";

import "./App.css";

function App() {
  const { headlines, news, categoris } = useSelector((state) => state);

  const disptach = useDispatch();

  useEffect(() => {
    disptach(getHeadlines());
    disptach(fetchNews("general"));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Navbar />
      <section className="container mt-3">
        <div
          className="my-5 "
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {categoris.map((item) => (
            <span
              onClick={() => disptach(fetchNews(item))}
              class="badge text-bg-primary mx-2 h"
            >
              {item}
            </span>
          ))}
        </div>

        <Slider {...settings}>
          {headlines.map((item, index) => (
            <News
              imgUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
              source={"BBC"}
            />
          ))}
        </Slider>

        <hr />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "10px",
          }}
        >
          {news.map((item, index) => (
            <News
              imgUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
              source={"BBC"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
