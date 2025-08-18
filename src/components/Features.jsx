export default function Features() {
  const features = [
    {
      title: "信頼の実績",
      description: "20年以上の海洋散骨実績を持ち、これまで多くのご家族の大切な想いをお手伝いしてまいりました。",
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
      description: "最大50名乗船可能な大型船で、安全性と安定性を重視した設計になっています。",
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
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-8">
            選ばれる理由
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            私たちは故人様とご遺族の想いを大切に、心に残るセレモニーをお手伝いいたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-ocean-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">{feature.title}</h3>
              <p className="text-body">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 追加の保証セクション */}
        <div className="mt-20 bg-powder-50 rounded-lg p-12 text-center">
          <h3 className="heading-md mb-8">私たちの約束</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">安心保証</h4>
              <p className="text-body text-sm">法的に適切な手続きで実施</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">プライバシー保護</h4>
              <p className="text-body text-sm">個人情報の厳重管理</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">24時間サポート</h4>
              <p className="text-body text-sm">いつでもご相談いただけます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}