import { useRef, useState } from 'react';
import './Carousel.css';
import { slideData } from '../data/slideData'; // ここでデータを読み込む

const Carousel = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // スクロール位置計算
  const handleScroll = () => {
    if (trackRef.current) {
      const scrollLeft = trackRef.current.scrollLeft;
      const width = trackRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);
    }
  };

  // スライド移動関数
  const scrollToSlide = (index) => {
    if (trackRef.current) {
      const width = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slideData.length - 1 ? 0 : currentIndex + 1;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slideData.length - 1 : currentIndex - 1;
    scrollToSlide(newIndex);
  };

  // リンククリック時の処理（必要に応じて変更）
  const handleLinkClick = (url) => {
    console.log(`Navigating to: ${url}`);
    // window.location.href = url; // 実際の遷移ならコメントアウトを外す
  };

  return (
    <div className="carousel-container">
      {/* 戻るボタン */}
      <button className="nav-button nav-prev" onClick={prevSlide}>&#10094;</button>

      {/* スライドエリア */}
      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {slideData.map((item, index) => (
          <div 
            key={item.id} 
            className="carousel-slide"
            onClick={() => handleLinkClick(item.link)}
          >
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="slide-content">
              <h3 className="slide-title">{item.title}</h3>
              <p className="slide-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 進むボタン */}
      <button className="nav-button nav-next" onClick={nextSlide}>&#10095;</button>

      {/* インジケーター */}
      <div className="indicators">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              scrollToSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;