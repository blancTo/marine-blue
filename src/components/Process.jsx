import ocean02 from '../assets/images/ocean-02.jpg'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "お申し込み",
      description: "ご家族の間で散骨について十分に理解し合えるよう、話し合ってお申し込みください。（ご遺骨を全て散骨するのか、一部は埋葬するのかなど）日時を決め、出航場所・散骨海域などをご案内します。（天候や海況によって、日程の変更もございます。）",
      note: "※ お申し込み時に、「埋葬許可証」を確認させていただきます。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "ご遺骨お預かり",
      description: "ご遺骨をパウダー状に加工するためにお預かりいたします。パウダー状のご遺骨を水溶性用紙に包みご準備します。（同行される人数に応じて準備数を決めます。）",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "出航",
      description: "指定場所へ集合し、乗船します。服装は喪服でなく普段着で大丈夫です。転倒しないよう、ヒールの高い靴や滑りやすい靴は、避けた方がいいでしょう。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1a4 4 0 014-4 4 4 0 014 4v1h1a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1h1zM10 12a2 2 0 114 0" />
        </svg>
      )
    },
    {
      number: "04",
      title: "散骨式",
      description: "船上から散骨、献花（献酒）を行い黙祷します。読経をいただく場合は、散骨の前にお勤めいただきます。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "帰港・解散",
      description: "セレモニー終了後、港へ帰港し解散いたします。故人様との最後の時間を大切に、心を込めてお見送りいたします。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "散骨証明書発行",
      description: "後日、散骨証明書をお届けします。GPS座標を記載した証明書で、故人様が眠る場所を永続的に記録いたします。",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
              広島湾での散骨をお考えの方へ、お問い合わせから散骨完了まで丁寧にサポートいたします。
              必要な書類や手続きも含めて、経験豊富なスタッフがすべての工程でご案内いたします。
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
                  {step.note && (
                    <p className="text-sm text-ocean-600 mt-2 font-medium">{step.note}</p>
                  )}
                </div>
              </div>

              {/* 接続線 */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-px h-12 bg-gradient-to-b from-ocean-300 to-ocean-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* 散骨場所マップセクション */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="heading-md mb-6">散骨エリア</h3>
            <p className="text-lg text-body max-w-2xl mx-auto">
              広島湾の美しい海域で散骨セレモニーを行います。<br />
              穏やかで透明度の高い海で、故人様を自然の中へとお送りいたします。
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-natural border border-gray-100 p-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.89234!2d132.4!3d34.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE4JzAwLjAiTiAxMzLCsDI0JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="散骨エリア - 広島湾"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/WPBrFLwkLCTAWMVo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-ocean-600 hover:text-ocean-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Googleマップで詳細を見る
              </a>
            </div>
          </div>
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