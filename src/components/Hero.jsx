import heroOceanBg from '../assets/images/hero-ocean-bg.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroOceanBg}
          alt="静かな海の風景"
          className="w-full h-full object-cover"
          style={{objectPosition: '50% 30%'}}
        />
      </div>
      

      
      {/* 装飾的な波のアニメーション */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-ocean-200">
          <path d="M0,60 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1050,75 1100,25 1200,50 L1200,120 L0,120 Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,60 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1050,75 1100,25 1200,50 L1200,120 L0,120 Z;
                      M0,80 C150,50 350,100 500,70 C650,50 850,100 1000,70 C1050,45 1100,75 1200,70 L1200,120 L0,120 Z;
                      M0,60 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1050,75 1100,25 1200,50 L1200,120 L0,120 Z" />
          </path>
        </svg>
      </div>
      
      {/* メインコンテンツ */}
      <div className="absolute inset-0 flex items-start justify-center z-10 pt-32">
        <div className="container-max section-padding text-center">
          <div className="max-w-4xl mx-auto">
            {/* メインコピー */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 md:mb-8 drop-shadow-2xl">
              やすらぎの海へ
              <br />
              <span className="text-ocean-200">心を込めた散骨</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-md">
              大切な方との最後のお別れを、美しい海で。<br />
              故人様への想いを込めて、心に残るセレモニーをお手伝いいたします。
            </p>
          </div>
        </div>
      </div>

      {/* CTAボタン */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a href="#plans" className="btn-primary text-base sm:text-lg w-full sm:w-auto shadow-lg text-center">
            料金プランを見る
          </a>
          <a href="#about" className="bg-white/90 backdrop-blur-sm border-2 border-white text-ocean-700 px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-lg text-base sm:text-lg w-full sm:w-auto shadow-lg text-center">
            サービスについて
          </a>
        </div>
      </div>

    </section>
  )
}