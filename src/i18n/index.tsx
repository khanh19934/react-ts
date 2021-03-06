import I18n from 'i18n-js'
import en from './locales/en'
import vi from './locales/vi'

const defaultLocale = 'en'

I18n.fallbacks = true
I18n.defaultLocale = defaultLocale
I18n.locale = defaultLocale
// choose a different default separator
// so it's allowed to use dots in i18n keys
I18n.defaultSeparator = '/'
I18n.translations = {
  en,
  vi
}
const t = I18n.t.bind(I18n)

export { t }
export default I18n
