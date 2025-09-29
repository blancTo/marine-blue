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

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href="#plans" className="btn-primary text-base sm:text-lg w-full sm:w-auto">
                料金プランを見る
              </a>
              <a href="#about" className="btn-secondary text-base sm:text-lg w-full sm:w-auto">
                サービスについて
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 特徴カード */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white/40 backdrop-blur-sm rounded-md p-2 sm:p-2 md:p-2 shadow-sm border border-white/10 flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1 leading-tight">自社船直営</h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-700 leading-snug">
                  自社船運航だから費用を抑えてご利用いただけます
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-md p-2 sm:p-2 md:p-2 shadow-sm border border-white/10 flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1 leading-tight">心に寄り添う</h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-700 leading-snug">
                  ご遺族の想いを大切に、一人ひとりに合わせた丁寧な対応
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-md p-2 sm:p-2 md:p-2 shadow-sm border border-white/10 flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1 leading-tight">安全運航</h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-700 leading-snug">
                  経験豊富な船長による安心・安全な海上セレモニー
                </p>
              </div>
          </div>
        </div>
      </div>

    </section>
  )
}