// FloatingButton.jsx
import '../css/FloatingButton.css';

const FloatingButton = () => {
  // ========== 設定 ==========
  const CONFIG = {
    formUrl: "https://forms.google.com/xxxxx",  // ここにフォームURL
    // tooltip: "イベント応募",
    openInNewTab: true,  // 新しいタブで開くか
  };
  // ==========================

  const handleClick = () => {
    if (CONFIG.openInNewTab) {
      window.open(CONFIG.formUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = CONFIG.formUrl;
    }
  };

  return (
    <button 
      className="floating-button" 
      onClick={handleClick} 
      aria-label={CONFIG.tooltip}
      // data-tooltip={CONFIG.tooltip}
    >
      {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
      </svg> */}
      <h1>募集締切</h1>
      <p>5/31</p>
      <h2>申込はコチラ</h2>
    </button>
  );
};

export default FloatingButton;