import ocean01 from '../assets/images/ocean-01.jpg'

export default function Features() {
  const features = [
    {
      title: "信頼の実績",
      description: "これまで多くのご家族の大切な想いをお手伝いし、豊富な海洋散骨実績を積み重ねてまいりました。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "法的手続き完全サポート",
      description: "散骨に必要な許可申請や書類作成など、煩雑な手続きをすべて代行いたします。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "安全な自社船",
      description: "最大7名乗船可能な小型船で、きめ細やかな配慮と安全性を重視した運航です。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "心に寄り添うサービス",
      description: "ご遺族の気持ちに寄り添い、一人ひとりのご希望に合わせた丁寧な対応を心がけています。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "美しい海域",
      description: "透明度の高い美しい海域で、故人様を自然の中へと送り出すセレモニーを行います。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 000-3H9v3zm2.5 2.5v5m0 0h2m-2 0H12m1-8h.01" />
        </svg>
      )
    },
    {
      title: "アフターサポート",
      description: "散骨後も証明書発行やメモリアルサービスなど、継続的なサポートを提供いたします。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "保険加入で乗船も安心",
      description: "散骨を行う自社船舶の保険に加入しているほか、乗船されるお客様一人ひとりの当日の保険にも加入しますので、安心です。保険料は各プランの料金に含まれています。",
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
              選ばれる理由
            </h2>
            <p className="text-lg md:text-xl text-body">
              私たちは故人様とご遺族の想いを大切に、心に残るセレモニーをお手伝いいたします。
              豊富な実績と経験で、ご家族の想いに寄り添った散骨セレモニーを実現いたします。
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src={ocean01} 
                  alt="信頼の実績を表す美しい海の景色" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                <svg className="w-12 h-12 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-natural border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-soft group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-ocean-200 transition-colors duration-300">
                <div className="w-6 h-6 md:w-8 md:h-8 text-ocean-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4 leading-tight">{feature.title}</h3>
              <p className="text-sm md:text-base text-body">{feature.description}</p>
            </div>
          ))}
        </div>



        {/* 追加の保証セクション */}
        <div className="mt-16 md:mt-20 bg-powder-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-6 md:mb-8">私たちの約束</h3>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">安心保証</h4>
              <p className="text-xs md:text-sm text-body">法的に適切な手続きで実施</p>
            </div>
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">プライバシー保護</h4>
              <p className="text-xs md:text-sm text-body">個人情報の厳重管理</p>
            </div>
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">24時間メールサポート</h4>
              <p className="text-xs md:text-sm text-body">メールならいつでもご相談いただけます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}