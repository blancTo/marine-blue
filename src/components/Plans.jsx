import ocean04 from '../assets/images/ocean-04.jpg'

export default function Plans() {
  const plans = [
    {
      name: "ファミリープラン",
      price: "180,000円〜",
      description: "ご家族だけでの貸切散骨",
      features: [
        "完全貸切での散骨",
        "最大7名まで乗船可能",
        "セレモニー進行サポート", 
        "散骨証明書発行",
        "GPS座標記録",
        "献花・献酒サービス"
      ],
      isPopular: true,
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: "代行散骨プラン",
      price: "55,000円〜",
      description: "スタッフによる代行散骨",
      features: [
        "専門スタッフによる代行",
        "写真・動画での記録",
        "散骨証明書発行",
        "GPS座標記録",
        "後日詳細報告書",
        "供養花付き"
      ],
      isPopular: false,
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "メモリアルプラン",
      price: "250,000円〜",
      description: "記念に残る特別な散骨",
      features: [
        "プライベート散骨",
        "記念品・アルバム作成",
        "プロによる撮影",
        "メモリアル動画制作",
        "年忌法要サポート",
        "特別セレモニー演出"
      ],
      isPopular: false,
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "ペット貸切散骨プラン",
      price: "155,000円（税込）",
      description: "飼主様とご一緒に沖へ船で出て、飼主様に散骨していただくペット同行散骨プラン",
      features: [
        "乗船人数3名まで",
        "お客様のご都合に合わせて日程決定",
        "広島湾の乗船場所から出航",
        "船舶2艇をご用意",
        "乗船時間 約60分～90分",
        "洗骨・粉骨加工",
        "水溶性袋×1",
        "献花用花籠×1",
        "献酒・献水×1",
        "写真撮影",
        "散骨証明書×1",
        "船舶チャーターに関する一切の費用"
      ],
      isPopular: false,
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm0 0V9m0 12l-2-2m2 2l2-2m-2 4v-4" />
        </svg>
      )
    },
    {
      name: "粉骨プラン",
      price: "22,000円（税込）",
      description: "お骨を洗い除菌後に六価クロム検査をおこなったあとに乾燥機に掛けて粉骨を施し、水溶性の袋へパッキング",
      features: [
        "洗骨・除菌処理",
        "六価クロム検査",
        "乾燥機による処理",
        "粉骨加工",
        "水溶性袋へのパッキング",
        "送料は別途実費請求"
      ],
      isPopular: false,
      icon: (
        <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ]

  return (
    <section id="plans" className="section-padding bg-powder-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-8">
              料金プラン
            </h2>
            <p className="text-xl text-body">
              ご家族のご希望とご予算に合わせて、様々なプランをご用意しております。
              すべてのプランで法的手続きサポートが含まれており、明朗会計で安心してご利用いただけます。
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src={ocean04} 
                  alt="料金プランを表す海の風景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                <svg className="w-12 h-12 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`card relative ${plan.isPopular ? 'ring-2 ring-ocean-300 ring-opacity-50' : ''}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ocean-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    おすすめ
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-2xl font-light text-ocean-600 mb-3">{plan.price}</div>
                <p className="text-body">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button className={`${plan.isPopular ? 'btn-primary' : 'btn-secondary'} w-full text-sm`}>
                  {plan.name === "ペット貸切散骨プラン" ? "詳しくはこちら" : "詳細・お見積り"}
                </button>
              </div>
            </div>
          ))}
        </div>



        {/* 料金に関する注意事項 */}
        <div className="bg-white rounded-lg p-8 shadow-natural border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="heading-md mb-6">料金について</h3>
            <p className="text-body max-w-2xl mx-auto">
              料金は基本プランの価格です。オプションサービスや参加人数により変動いたします。<br />
              詳細なお見積りは無料で承っておりますので、お気軽にお問い合わせください。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">明朗会計</h4>
              <p className="text-body text-sm">
                事前にお見積りをお出しし、<br />
                当日の追加料金は一切ございません
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">支払方法</h4>
              <p className="text-body text-sm">
                現金・銀行振込・クレジットカード<br />
                お支払いのご相談も承ります
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-123-456" className="btn-primary text-center">
              お電話でお見積り
            </a>
            <button className="btn-secondary">
              メールでお問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}