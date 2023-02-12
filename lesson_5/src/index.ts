import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock()
  renderSearchFormBlock()
  renderSearchStubBlock()
  // renderEmptyOrErrorSearchBlock("Ошибка")
  renderSearchResultsBlock()
  // renderPaymentPage()
  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
})
