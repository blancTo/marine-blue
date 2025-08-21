import ocean05 from '../assets/images/ocean-05.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      name: "田中様ご家族",
      location: "東京都",
      content: "父の遺志で海洋散骨を選びました。美しい海での心に残るセレモニーを、本当にありがとうございました。スタッフの方々の温かく丁寧な対応に心から感謝しています。",
      rating: 5
    },
    {
      name: "山田様",
      location: "神奈川県",
      content: "初めての海洋散骨で不安でしたが、丁寧な説明と心配りで安心してお任せできました。母も安らかに眠っていると思います。Ocean Memorialさんを選んで本当に良かったです。",
      rating: 5
    },
    {
      name: "佐藤様ご夫婦",
      location: "静岡県",
      content: "20年以上の実績があるということで安心してお任せできました。当日も天候に恵まれ、穏やかで美しい思い出となりました。心に残る素晴らしいセレモニーでした。",
      rating: 5
    },
    {
      name: "鈴木様",
      location: "愛知県",
      content: "代行散骨をお願いしました。遠方のため立ち会えませんでしたが、写真や動画で詳しく様子を教えていただき、まるでその場にいるような気持ちになりました。",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-powder-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src={ocean05} 
                  alt="お客様の声を表す心温まる海の景色" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-soft-lg">
                <svg className="w-12 h-12 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading-lg mb-8">
              お客様の声
            </h2>
            <p className="text-xl text-body">
              Ocean Memorialをご利用いただいたお客様からの心温まるお声をご紹介いたします。
              多くのご家族に選ばれ続けている理由を、実際のお客様の体験談でお確かめください。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              {/* 引用符アイコン */}
              <div className="absolute top-6 right-6 opacity-10">
                <svg className="w-8 h-8 text-ocean-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-body leading-relaxed mb-6 text-lg">
                「{testimonial.content}」
              </p>
              
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-ocean-600 font-medium text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-body text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* 統計セクション */}
        <div className="bg-white rounded-lg p-8 shadow-natural border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="heading-md mb-4">20年以上の実績</h3>
            <p className="text-body max-w-2xl mx-auto">
              多くのご家族に選ばれ続けている、私たちの実績をご紹介いたします。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-ocean-600 mb-2">2,000+</div>
              <div className="text-sm text-body">散骨実績</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-ocean-600 mb-2">99%</div>
              <div className="text-sm text-body">お客様満足度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-ocean-600 mb-2">20年+</div>
              <div className="text-sm text-body">サービス提供年数</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}