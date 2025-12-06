import React from 'react';
// 1. 画像ファイルをインポート（パスはファイルの場所に合わせて調整）
import cosmicBg from '../assets/cosmic_img01.jpg';

const Background = () => {
  return (
    <div 
      className="background-container"
      // 2. インラインスタイルで背景画像を適用
      style={{ backgroundImage: cosmicBg}}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;