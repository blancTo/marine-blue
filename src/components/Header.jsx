import { useState, useEffect } from 'react'

export default function Header({ onOpenContactForm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-natural' : 'bg-transparent'
    }`}>
      <div className="container-max px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className={`text-xl font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>マリンブルー</h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>海洋散骨サービス</p>
            </div>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#about" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-600 hover:text-ocean-600' : 'text-white hover:text-ocean-200'
            }`}>
              サービスについて
            </a>
            <a href="#features" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-600 hover:text-ocean-600' : 'text-white hover:text-ocean-200'
            }`}>
              特徴
            </a>
            <a href="#plans" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-600 hover:text-ocean-600' : 'text-white hover:text-ocean-200'
            }`}>
              料金プラン
            </a>
            <a href="#process" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-600 hover:text-ocean-600' : 'text-white hover:text-ocean-200'
            }`}>
              流れ
            </a>
            <a href="#access" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-600 hover:text-ocean-600' : 'text-white hover:text-ocean-200'
            }`}>
              アクセス
            </a>
          </nav>

          {/* お問い合わせボタン */}
          <div className="flex items-center space-x-4">
            <a href="tel:0120-123-456" className={`hidden sm:flex items-center space-x-2 transition-colors duration-200 ${
              isScrolled ? 'text-ocean-600 hover:text-ocean-700' : 'text-white hover:text-ocean-200'
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">0120-123-456</span>
            </a>
            <button 
              className="btn-primary text-sm px-6 py-3"
              onClick={() => onOpenContactForm && onOpenContactForm()}
            >
              お問い合わせ
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-5 h-5 transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white rounded-b-lg shadow-soft-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-ocean-600 transition-colors font-medium">
                サービスについて
              </a>
              <a href="#features" className="text-gray-600 hover:text-ocean-600 transition-colors font-medium">
                特徴
              </a>
              <a href="#plans" className="text-gray-600 hover:text-ocean-600 transition-colors font-medium">
                料金プラン
              </a>
              <a href="#process" className="text-gray-600 hover:text-ocean-600 transition-colors font-medium">
                流れ
              </a>
              <a href="#access" className="text-gray-600 hover:text-ocean-600 transition-colors font-medium">
                アクセス
              </a>
              <div className="pt-4 border-t border-gray-100">
                <a href="tel:0120-123-456" className="flex items-center space-x-2 text-ocean-600 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0120-123-456</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}