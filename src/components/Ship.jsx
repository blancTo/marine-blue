export default function Ship() {
  const shipFeatures = [
    {
      title: "最大7名乗船可能",
      description: "小型船ならではのアットホームで心温まるセレモニー"
    },
    {
      title: "高い安全性・安定性",
      description: "経験豊富な船長による安全運航で安心してご参加いただけます"
    },
    {
      title: "快適な船内設備",
      description: "清潔で快適な船内で、故人様との大切な時間をお過ごしください"
    },
    {
      title: "きめ細やかな配慮",
      description: "少人数だからこそ可能な、一人ひとりに寄り添ったサービス"
    }
  ]

  return (
    <section id="ship" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            船舶・運用案内
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            安全で快適な散骨セレモニーのための自社所有船
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-video rounded-lg mb-8 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="散骨船「ピュアマリン号」" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white font-medium text-lg p-4 drop-shadow-lg">散骨船「ピュアマリン号」</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">船舶仕様</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">船名</span>
                  <span className="font-medium">ピュアマリン号</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">定員</span>
                  <span className="font-medium">最大7名</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">全長</span>
                  <span className="font-medium">12.5m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">設備</span>
                  <span className="font-medium">快適な座席・安全設備完備</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">船舶の特徴</h3>
            <div className="space-y-6">
              {shipFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">運航について</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 出港時間：9:00〜16:00（要予約）</li>
                <li>• 所要時間：約2〜3時間</li>
                <li>• 散骨海域：下田沖3海里以遠</li>
                <li>• 悪天候時は日程変更いたします</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}