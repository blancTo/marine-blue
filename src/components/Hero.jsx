import heroOceanBg from '../assets/images/hero-ocean-bg.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img 
          src={heroOceanBg} 
          alt="静かな海の風景" 
          className="w-full h-full object-cover object-center"
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
      
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* メインコピー */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
            やすらぎの海へ
            <br />
            <span className="text-ocean-600">心を込めた散骨</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-body mb-12 md:mb-16 max-w-3xl mx-auto">
            大切な方との最後のお別れを、美しい海で。<br />
            故人様への想いを込めて、心に残るセレモニーをお手伝いいたします。
          </p>
          
          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 md:mb-20">
            <a href="#plans" className="btn-primary text-base sm:text-lg w-full sm:w-auto">
              料金プランを見る
            </a>
            <a href="#about" className="btn-secondary text-base sm:text-lg w-full sm:w-auto">
              サービスについて
            </a>
          </div>
          
          {/* 特徴カード */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-md p-3 sm:p-4 md:p-8 shadow-natural border border-gray-100/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-xl font-medium text-gray-900 mb-1 sm:mb-2 md:mb-4 leading-tight">完全サポート</h3>
              <p className="text-xs sm:text-xs md:text-base text-body text-center leading-snug">
                法的手続きから当日の運営まで、<br className="hidden sm:inline" />
                すべてを責任もってサポート
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-md p-3 sm:p-4 md:p-8 shadow-natural border border-gray-100/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-xl font-medium text-gray-900 mb-1 sm:mb-2 md:mb-4 leading-tight">心に寄り添う</h3>
              <p className="text-xs sm:text-xs md:text-base text-body text-center leading-snug">
                ご遺族の想いを大切に、<br className="hidden sm:inline" />
                一人ひとりに合わせた丁寧な対応
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-md p-3 sm:p-4 md:p-8 shadow-natural border border-gray-100/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-xl font-medium text-gray-900 mb-1 sm:mb-2 md:mb-4 leading-tight">安全運航</h3>
              <p className="text-xs sm:text-xs md:text-base text-body text-center leading-snug">
                経験豊富な船長による<br className="hidden sm:inline" />
                安心・安全な海上セレモニー
              </p>
            </div>
          </div>
          
          {/* スクロール誘導 */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <a href="#about" className="animate-bounce">
              <svg className="w-6 h-6 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}