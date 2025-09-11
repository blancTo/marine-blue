import oceanHeroBg from '../assets/images/ocean-hero-bg.jpg'
import ocean03 from '../assets/images/ocean-03.jpg'
import seaBurialMemorialFlowers from '../assets/images/sea-burial-memorial-flowers.jpg'
import ashesRefinementService from '../assets/images/ashes-refinement-service.jpg'

export default function About() {
  return (
    <section id="about" className="section-padding bg-powder-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-soft-lg mr-4">
              <img 
                src={ocean03} 
                alt="海洋散骨について" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="heading-lg">
              海洋散骨について
            </h2>
          </div>
          <p className="text-xl text-body max-w-3xl mx-auto">
            人は海から生まれたとも言われています。海洋散骨が「海へ還る」と言われる所以です。<br />
            大自然の中に戻ってゆく、そんな安らぎを、私たちがお手伝いいたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="heading-md mb-6">
              心に残る最後のお別れ
            </h3>
            <p className="text-body mb-8">
              故人様への想いを込めて、美しい海での散骨セレモニーをお手伝いいたします。
              法的な手続きから当日の運営まで、すべてを責任もってサポートし、
              ご遺族の皆様が故人様との最後の時間を大切に過ごせるよう配慮いたします。
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-ocean-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">法的手続き完全サポート</h4>
                  <p className="text-body text-sm">必要な許可申請や書類作成をすべて代行いたします</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-ocean-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">経験豊富なスタッフ</h4>
                  <p className="text-body text-sm">豊富な実績を持つ専門スタッフが丁寧にご案内</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-ocean-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">安全第一の運航</h4>
                  <p className="text-body text-sm">自社所有船による安心・安全なセレモニーを実現</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src={oceanHeroBg} 
                  alt="穏やかな海の風景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                <svg className="w-12 h-12 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>



        {/* 散骨花と粉骨サービス - 横並びレイアウト */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 散骨花について */}
          <div className="bg-white rounded-lg p-8 shadow-soft border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">散骨花 - 想いを込めた海への送り</h3>
              <p className="text-lg text-body mb-6">
                生命の母なる海へと還っていく貴方へ想いを込めて。
              </p>
            </div>
            
            <div className="mb-8">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                  <img 
                    src={seaBurialMemorialFlowers} 
                    alt="散骨花 - 海に浮かぶ花々" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">故人が海を愛していた</h4>
                  <p className="text-body text-sm">海への深い愛情を持った故人様にとって、海洋散骨は最も自然な選択です</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">故人が海洋散骨を望んでいた</h4>
                  <p className="text-body text-sm">生前のご意思を尊重し、故人様の希望に沿った形でお見送りいたします</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">子や孫に墓守や後継ぎの心配をかけさせたくない</h4>
                  <p className="text-body text-sm">未来の世代に負担をかけない、思いやりに満ちた選択です</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">お墓建立・納骨堂に費用をかけられない</h4>
                  <p className="text-body text-sm">経済的な負担を軽減しながらも、心のこもった供養を実現できます</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-base text-gray-600">
                散骨花は、故人様への想いを美しい花とともに海に託す、心温まる送り方です。
              </p>
            </div>
          </div>

          {/* 粉骨サービスについて */}
          <div className="bg-white rounded-lg p-8 shadow-soft border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">粉骨サービス - 一柱一柱丁寧にまごころを込めて</h3>
              <p className="text-lg text-body mb-6">
                一柱一柱丁寧にまごころを込めて施させて頂きます。<br />
                様々な供養の形に対応できるよう、心を込めてお手伝いいたします。
              </p>
            </div>
            
            <div className="mb-8">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                  <img 
                    src={ashesRefinementService} 
                    alt="粉骨 - 丁寧な処理" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">ご自分で思い出の場所に散骨したい</h4>
                  <p className="text-body text-sm">故人様との思い出深い場所での散骨をお考えの方に、適切な粉骨を提供いたします</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">海洋散骨・樹木葬など自然に還してあげたい</h4>
                  <p className="text-body text-sm">自然葬をお考えの方に、環境に配慮した丁寧な粉骨処理を行います</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">納骨堂などへのお引越し</h4>
                  <p className="text-body text-sm">納骨堂への移転や分骨をお考えの方に、適切なサイズでの粉骨を提供します</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">墓じまいをして自宅供養したい</h4>
                  <p className="text-body text-sm">墓じまい後の自宅供養をお考えの方に、保管しやすい形での粉骨を承ります</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-base text-gray-600">
                丁寧な処理と衛生管理を徹底し、様々な供養形態に対応いたします。
              </p>
            </div>
          </div>
        </div>

        {/* 海洋散骨の意味 */}
        <div className="bg-white rounded-lg p-12 shadow-natural border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="heading-md mb-6">海洋散骨の意味</h3>
            <p className="text-body max-w-2xl mx-auto">
              散骨は故人様が自然に還るという考えに基づいた、新しい形の供養です。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">自然への回帰</h4>
              <p className="text-body text-sm">
                広大な海という大自然の中で、故人様が永遠の安らぎを得られます
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">家族の絆</h4>
              <p className="text-body text-sm">
                ご家族が一緒に故人様を送り出す、心に残る時間を過ごしていただけます
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">新しい供養</h4>
              <p className="text-body text-sm">
                お墓の維持管理が不要で、後世に負担をかけない新しい形の供養です
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}