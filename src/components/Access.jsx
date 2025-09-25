import aboutUsBg from '../assets/images/about-us.jpg'
import aboutUs2 from '../assets/images/about-us2.jpg'

export default function Access({ onOpenContactForm }) {
  return (
    <section id="access" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-8">
            アクセス・会社情報
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            美しい海と歴史ある街、広島市安芸区にございます。<br />
            アクセスしやすい立地で、安心してお越しいただけます。
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="card mb-8">
              <h3 className="heading-md mb-6">会社情報</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">屋号</h4>
                    <p className="text-body">マリンブルー</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">登録事業</h4>
                    <p className="text-body">中国運輸局　内航一般不定期航路事業登録済み<br />登録番号　中国一不第０００９号</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">所在地</h4>
                    <p className="text-body">〒736-0085<br />広島県広島市安芸区矢野西３丁目６８番１３号</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">電話番号</h4>
                    <p className="text-body">
                      <a href="tel:0120-28-3374" className="text-ocean-600 hover:text-ocean-700 transition-colors">
                        0120-28-3374（フリーダイヤル）
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">受付時間</h4>
                    <p className="text-body">お電話：8:00～20:00<br />メール：24時間対応<br />（セレモニーは9:00～17:00）</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">主要事業</h4>
                    <p className="text-body">主要旅客船<br />海洋散骨事業<br />チャーター船<br />観光船<br />海上タクシー<br />遊漁船</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-medium text-gray-900 mb-6">アクセス方法</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">電車でお越しの方</h4>
                    <p className="text-body text-sm">JR山陽本線 矢野駅から徒歩15分<br />広島駅から約30分</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">お車でお越しの方</h4>
                    <p className="text-body text-sm">駐車場完備（無料）<br />オフィス直前に駐車可能</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">お迎えサービス</h4>
                    <p className="text-body text-sm">矢野駅からのお迎えも<br />事前にご相談ください</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-6 mb-8">
              <div className="bg-powder-100 rounded-lg overflow-hidden shadow-natural">
                <div className="aspect-video">
                  <img 
                    src={aboutUsBg} 
                    alt="広島の美しい海辺" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-powder-100 rounded-lg overflow-hidden shadow-natural">
                <div className="aspect-video">
                  <img 
                    src={aboutUs2} 
                    alt="私たちの散骨船とサービス" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h4 className="text-lg font-medium mb-2 text-gray-900">私たちの自社船とサービス</h4>
              <p className="text-body">7名乗船可能な小型船で、アットホームな心に残るセレモニーを</p>
            </div>

            <div className="card">
              <h3 className="text-xl font-medium text-gray-900 mb-6">お問い合わせ</h3>
              <p className="text-body mb-8">
                ご不明な点やご相談がございましたら、<br />
                お気軽にお問い合わせください。
              </p>
              <div className="space-y-4">
                <a href="tel:0120-28-3374" className="btn-primary w-full text-center flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  お電話でのお問い合わせ
                </a>
                <button 
                  className="btn-secondary w-full flex items-center justify-center"
                  onClick={() => onOpenContactForm && onOpenContactForm()}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  メールでのお問い合わせ
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-body text-sm text-center">
                  お気軽にご相談ください。<br />
                  経験豊富なスタッフが丁寧に対応いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}