import ocean02 from '../assets/images/ocean-02.jpg'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "お問い合わせ",
      description: "お電話またはメールフォームからお気軽にご相談ください。24時間365日、ご質問やご不明な点について丁寧にご説明いたします。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "ご相談・お見積り",
      description: "ご希望やご予算に応じた最適なプランをご提案し、詳細なお見積りをお出しいたします。料金体系は明確で、当日の追加料金は一切ございません。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "お申し込み・準備",
      description: "ご契約後、散骨に必要な法的手続きをすべて代行いたします。当日に向けてセレモニーの詳細についてもご相談させていただきます。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "日程調整",
      description: "海況や天候を考慮して、散骨に適した日程を調整いたします。ご家族のご都合に合わせて柔軟に対応し、最適な日時をご提案いたします。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "散骨セレモニー",
      description: "経験豊富なスタッフがご案内し、心に残る散骨セレモニーを執り行います。故人様への想いを込めた、安全で厳かな時間をお過ごしいただけます。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "アフターサポート",
      description: "散骨完了後、GPS座標を記載した散骨証明書を発行いたします。継続的なメモリアルサポートもご提供し、いつでもご相談いただけます。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="process" className="section-padding bg-powder-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src={ocean02} 
                  alt="ご利用の流れを表す穏やかな海の風景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                <svg className="w-12 h-12 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading-lg mb-8">
              ご利用の流れ
            </h2>
            <p className="text-xl text-body">
              初めての方でも安心してご利用いただけるよう、お問い合わせから散骨完了まで丁寧にサポートいたします。
              経験豊富なスタッフが、すべての工程で寄り添いご案内いたします。
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6 pb-12">
                {/* ステップ番号とアイコン */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center shadow-soft-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full text-xs font-medium text-ocean-600 border border-ocean-200">
                    {step.number}
                  </div>
                </div>

                {/* 内容 */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-body leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* 接続線 */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-px h-12 bg-gradient-to-b from-ocean-300 to-ocean-200"></div>
              )}
            </div>
          ))}
        </div>



        {/* よくある質問セクション */}
        <div className="mt-20 bg-powder-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="heading-md mb-4">よくある質問</h3>
            <p className="text-body">散骨に関するご不明な点がございましたら、お気軽にお問い合わせください。</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-natural">
              <h4 className="font-medium text-gray-900 mb-2">散骨に許可は必要ですか？</h4>
              <p className="text-body text-sm">法的な手続きはすべて当社で代行いたします。お客様にお手間をおかけすることはございません。</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-natural">
              <h4 className="font-medium text-gray-900 mb-2">天候が悪い場合は？</h4>
              <p className="text-body text-sm">安全を最優先に、天候や海況が悪い場合は日程の変更をご提案いたします。</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-natural">
              <h4 className="font-medium text-gray-900 mb-2">何名まで乗船できますか？</h4>
              <p className="text-body text-sm">最大7名様まで乗船可能な小型船で、アットホームなセレモニーを実現いたします。</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-natural">
              <h4 className="font-medium text-gray-900 mb-2">散骨後の供養は？</h4>
              <p className="text-body text-sm">GPS座標付きの証明書発行や、年忌法要のサポートなど継続的なサービスをご提供いたします。</p>
            </div>
          </div>

          <div className="text-center">
            <a href="tel:0120-123-456" className="btn-primary">
              その他のご質問・ご相談
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}