import { useState } from 'react'

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subjects = [
    'サービス内容について',
    '料金・お見積りについて',
    '手続きについて',
    'アクセス・場所について',
    'ペット散骨について',
    'その他のご質問'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (!formData.subject) {
      newErrors.subject = 'お問い合わせ内容を選択してください'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Netlify Forms用のフォームデータを作成
      const formDataForNetlify = new FormData()
      formDataForNetlify.append('form-name', 'contact-form')
      formDataForNetlify.append('name', formData.name)
      formDataForNetlify.append('email', formData.email)
      formDataForNetlify.append('phone', formData.phone)
      formDataForNetlify.append('subject', formData.subject)
      formDataForNetlify.append('message', formData.message)

      // Netlify Formsに送信
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataForNetlify).toString()
      })

      if (response.ok) {
        // 送信成功のメッセージを表示
        alert('お問い合わせを承りました。2営業日以内にご返信いたします。')
        
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        // フォームを閉じる
        if (onClose) {
          onClose()
        }
      } else {
        throw new Error('送信に失敗しました')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信に失敗しました。しばらく経ってから再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-gray-900">お問い合わせ</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-body mt-2">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。2営業日以内にご返信いたします。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6" name="contact-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form" />
          {/* お名前 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="山田太郎"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* 電話番号 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電話番号
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="090-1234-5678"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">お問い合わせ内容を選択してください</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* メッセージ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              placeholder="ご質問やご相談の詳細をお聞かせください"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* 送信ボタン */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
            </button>
          </div>
        </form>

        {/* 連絡先情報 */}
        <div className="px-6 pb-6 bg-gray-50 rounded-b-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">お急ぎの場合はお電話で</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-medium text-ocean-600">0120-123-456</span>
              </div>
              <p className="text-sm text-gray-600">受付時間：平日 9:00〜18:00</p>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            <p>
              ※ お預かりした個人情報は、お問い合わせの回答以外の目的では使用いたしません。<br />
              ※ 営業日以外のお問い合わせは翌営業日以降の回答となります。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
