// src/App.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// GSAPプラグインの登録
gsap.registerPlugin(ScrollTrigger);

// --- データの定義 (ダミーデータ) ---
const activities = [
  {
    id: 1,
    title: "CubeSat開発ハンズオン",
    description: "実際の衛星開発フローに基づき、1UサイズのCubeSatをチームで設計・製作します。ミッション定義から熱構造解析、そしてOBCの実装まで、座学ではなく手を動かすことで「飛ばせる」技術を習得します。",
    // 宇宙船内の作業風景などのダミー画像URL
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "軌道力学・姿勢制御講座",
    description: "宇宙空間での衛星の動きを支配する数式をハックせよ。実際の衛星データを題材に、MATLAB/SimulinkやPythonを用いた姿勢制御シミュレーションを実施。理論と実践のギャップを埋める集中講義です。",
    // 数式やPC画面のダミー画像URL
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "現役エンジニアとのメンタリング",
    description: "JAXAや民間宇宙企業の最前線で働くエンジニアが、あなたのキャリアと技術を直接レビュー。技術的な壁の突破方法から、宇宙業界で生き抜くためのマインドセットまで、濃密なフィードバックを提供します。",
    // ミーティング風景のダミー画像URL
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
  }
];

function App() {
  // アニメーション適用範囲の参照を作成
  const mainRef = useRef(null);

  useEffect(() => {
    // GSAP Contextを使用してクリーンアップを確実にする
    let ctx = gsap.context(() => {
      
      // 1. Heroセクションのアニメーション (読み込み時にフェードイン)
      gsap.from(".hero-content", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
      });

      // 2. 活動紹介のアニメーション (スクロール連動スライドイン)
      const cards = document.querySelectorAll('.activity-card');
      
      cards.forEach((card, index) => {
        // 偶数番目は左から(-100)、奇数番目は右から(100)
        const xStart = index % 2 === 0 ? -100 : 100;

        gsap.fromTo(card, 
          { 
            opacity: 0, 
            x: xStart 
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // 画面の80%の位置に来たら開始
              end: "bottom 20%",
              toggleActions: "play none none reverse", // スクロールバックで戻る設定
              // markers: true, // デバッグ用にマーカーを表示したい場合はコメントアウトを外す
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
          }
        );
      });

    }, mainRef);

    return () => ctx.revert(); // コンポーネント破棄時にGSAPをリセット
  }, []);

  return (
    <div className="app" ref={mainRef}>
      {/* 背景画像（固定） */}
      <div className="background-container">
        <div className="background-overlay"></div>
      </div>

      {/* ヘッダー */}
      <header className="header">
        <div className="logo">ASTRO CAMP</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#past">History</a></li>
            <li><a href="#apply" style={{color: 'var(--color-accent)'}}>Apply</a></li>
          </ul>
        </nav>
      </header>

      {/* Heroセクション */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">BEYOND THE ATMOSPHERE</h1>
          <p className="hero-subtitle">
            宇宙への憧れを、確かな技術へ。<br />
            学生・社会人を対象とした、本気の宇宙開発強化合宿。
          </p>
          <a href="#activities" className="neon-btn">Mission Start</a>
        </div>
      </section>

      {/* 活動紹介セクション */}
      <section id="activities" className="activities-container">
        <h2 className="section-title">Mission Activities</h2>
        
        {activities.map((activity, index) => (
          // indexが奇数の場合に 'reverse' クラスを付与してジグザグにする
          <div 
            key={activity.id} 
            className={`activity-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-desc">{activity.description}</p>
              <a href="#" className="neon-btn">View Details</a>
            </div>
          </div>
        ))}
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo" style={{ marginBottom: '1rem' }}>ASTRO CAMP</div>
          <p>Contact: info@astro-camp-dummy.jp</p>
          <p>&copy; 2025 Astro Camp Committee. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;