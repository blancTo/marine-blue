import oceanHeroBg from '../assets/images/ocean-hero-bg.jpg'
import ocean03 from '../assets/images/ocean-03.jpg'

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
                  <p className="text-body text-sm">20年以上の実績を持つ専門スタッフが丁寧にご案内</p>
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