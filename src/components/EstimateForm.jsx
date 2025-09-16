import { useState } from 'react'

export default function EstimateForm({ selectedPlan, onClose }) {
  const [formData, setFormData] = useState({
    plan: selectedPlan || '',
    name: '',
    email: '',
    phone: '',
    participants: '',
    preferredDate: '',
    requests: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const plans = [
    'ファミリープラン',
    '代行散骨プラン', 
    'メモリアルプラン',
    'ペット貸切散骨プラン',
    '粉骨プラン'
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

    if (!formData.plan) {
      newErrors.plan = 'プランを選択してください'
    }
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください'
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
      // SSGform用のデータを作成
      const params = new URLSearchParams()
      params.append('ご希望プラン', formData.plan)
      params.append('お名前', formData.name)
      params.append('メールアドレス', formData.email)  
      params.append('電話番号', formData.phone)
      params.append('参加予定人数', formData.participants)
      params.append('ご希望日', formData.preferredDate)
      params.append('ご要望・ご質問', formData.requests)

      // SSGformに送信
      // ここに実際のSSGformのエンドポイントURLを設定してください
      const response = await fetch('https://ssgform.com/s/l2gzOcJXPg2S', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
      })

      // no-corsモードではレスポンスの詳細が取得できないため、
      // エラーがなければ成功と判断
      setIsSubmitted(true)
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信に失敗しました。しばらく経ってから再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 送信完了後の確認画面
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              お見積り依頼を承りました
            </h2>
            
            <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-medium text-gray-900 mb-4">送信内容の確認</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">ご希望のプラン：</span>
                  <span className="text-gray-900">{formData.plan}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">お名前：</span>
                  <span className="text-gray-900">{formData.name}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">メールアドレス：</span>
                  <span className="text-gray-900">{formData.email}</span>
                </div>
                {formData.phone && (
                  <div>
                    <span className="font-medium text-gray-700">電話番号：</span>
                    <span className="text-gray-900">{formData.phone}</span>
                  </div>
                )}
                {formData.participants && (
                  <div>
                    <span className="font-medium text-gray-700">参加予定人数：</span>
                    <span className="text-gray-900">{formData.participants}名</span>
                  </div>
                )}
                {formData.preferredDate && (
                  <div>
                    <span className="font-medium text-gray-700">ご希望日：</span>
                    <span className="text-gray-900">{formData.preferredDate}</span>
                  </div>
                )}
                {formData.requests && (
                  <div>
                    <span className="font-medium text-gray-700">ご要望・ご質問：</span>
                    <div className="text-gray-900 mt-1 whitespace-pre-wrap">{formData.requests}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">今後の流れ</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 担当者がお見積りを作成いたします</li>
                    <li>• 3営業日以内に {formData.email} に詳細なお見積りをお送りします</li>
                    <li>• ご不明な点がございましたら 0120-28-3374 までお電話ください</li>
                    <li>• お見積りは無料です</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6 text-left">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-medium text-yellow-900 mb-2">自動返信メールについて</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• 自動返信メールを {formData.email} に送信しました</li>
                    <li>• <strong>迷惑メールフォルダをご確認ください</strong></li>
                    <li>• Gmailをご利用の場合は「すべてのメール」もご確認ください</li>
                    <li>• 10分経っても届かない場合は、メールアドレスをご確認ください</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    plan: selectedPlan || '',
                    name: '',
                    email: '',
                    phone: '',
                    participants: '',
                    preferredDate: '',
                    requests: ''
                  })
                }}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                新しいお見積り依頼
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-gray-900">お見積り依頼</h2>
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
            ご希望のプランとお客様情報をご入力ください。3営業日以内に詳細なお見積りをお送りいたします。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* プラン選択 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ご希望のプラン <span className="text-red-500">*</span>
            </label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent ${
                errors.plan ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">プランを選択してください</option>
              {plans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
            {errors.plan && <p className="text-red-500 text-sm mt-1">{errors.plan}</p>}
          </div>

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
              電話番号 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="090-1234-5678"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* 参加人数 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              参加予定人数
            </label>
            <input
              type="number"
              name="participants"
              value={formData.participants}
              onChange={handleInputChange}
              placeholder="5"
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* 希望日 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ご希望日
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* ご要望・質問 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ご要望・ご質問
            </label>
            <textarea
              name="requests"
              value={formData.requests}
              onChange={handleInputChange}
              rows={4}
              placeholder="ご質問やご要望がございましたらお聞かせください"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none"
            />
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
              {isSubmitting ? '送信中...' : 'お見積り依頼を送信'}
            </button>
          </div>
        </form>

        {/* 注意事項 */}
        <div className="px-6 pb-6 text-xs text-gray-500">
          <p>
            ※ お預かりした個人情報は、お見積りの作成・ご連絡以外の目的では使用いたしません。<br />
            ※ お見積りは無料です。ご不明な点がございましたらお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  )
}
