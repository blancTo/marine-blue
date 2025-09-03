export default function Footer() {
  return (
    <footer className="bg-ocean-600 text-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium">マリンブルー</h3>
                <p className="text-xs text-white/70">海洋散骨サービス</p>
              </div>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed max-w-md">
              大切な方との最後のお別れを、美しい海で。豊富な実績と信頼で、ご遺族の想いに寄り添います。
            </p>
            <div className="space-y-3">
              <a href="tel:0120-123-456" className="flex items-center text-white hover:text-white/80 transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0120-123-456（フリーダイヤル）
              </a>
              <p className="text-white/60 text-sm">お電話：8:00～20:00　メール：24時間対応</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">サービス</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors text-sm">海洋散骨について</a></li>
              <li><a href="#features" className="hover:text-white transition-colors text-sm">選ばれる理由</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors text-sm">料金プラン</a></li>
              <li><a href="#process" className="hover:text-white transition-colors text-sm">ご利用の流れ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">会社情報</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#access" className="hover:text-white transition-colors text-sm">アクセス</a></li>
              <li className="text-sm">〒736-0085</li>
              <li className="text-sm">広島県広島市安芸区矢野西３丁目６８番１３号</li>
              <li className="text-sm">お電話：8:00～20:00　メール：24時間対応</li>
            </ul>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="bg-white/10 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h4 className="text-xl font-medium mb-4">お気軽にご相談ください</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              散骨に関するご質問やご相談、お見積りなど、お気軽にお問い合わせください。<br />
              経験豊富なスタッフが丁寧にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0120-123-456" className="bg-white text-ocean-600 px-6 py-3 rounded-sm font-medium hover:bg-white/90 transition-colors">
                お電話でのご相談
              </a>
              <button className="border border-white/30 text-white px-6 py-3 rounded-sm font-medium hover:bg-white/10 transition-colors">
                メールでのお問い合わせ
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 マリンブルー All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </a>
              <a href="#terms" className="text-white/60 hover:text-white text-sm transition-colors">
                利用規約
              </a>
              <a href="#sitemap" className="text-white/60 hover:text-white text-sm transition-colors">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}