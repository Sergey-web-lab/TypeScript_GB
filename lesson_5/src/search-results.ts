// declare var require: any
import { renderBlock } from './lib.js'
// import { Payment } from 'ecommpay';
// import { Callback } from 'ecommpay';
// const { Payment } = require('ecommpay');
// const { Callback } = require('ecommpay');

// const e = new Payment('186', '<secret_key>');
// Идентификатор проекта и секретный ключ
// e.paymentId = '1555943554067';
// Идентификатор платежа, уникальный в рамках проекта
// e.paymentAmount = 10;
// Сумма в дробных единицах валюты
// e.paymentCurrency = 'RUB';
// Код валюты в формате ISO-4217 alpha-3
// e.paymentDescription = 'Описание платежа';
// Описание платежа. Необязательный параметр

// export function renderPaymentPage() {
//   `<link rel="stylesheet" href="https://paymentpage.ecommpay.com/shared/merchant.css" />
// 	<script type="text/javascript" src="https://paymentpage.ecommpay.com/shared/merchant.js"></script>
// 	<script type="text/javascript">
// 		EPayWidget.run({ baseUrl: url }, 'get');
// 	</script>`
// }

// const url = e.getUrl();

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock(reasonMessage: string) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock() {

  const requestUrl = 'http://localhost:3030/places/1';

  function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.open(method, url);

      xhr.responseType = 'json'

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response)
        } else {
          resolve(xhr.response)
        }
      }

      xhr.onerror = () => {
        reject(xhr.response)
      }
      xhr.send();
    })
  }

  sendRequest('GET', requestUrl)
    .then(data => {
      let dataAPI = data
      console.log(dataAPI)
      // return dataAPI
    })
    .catch(err => {
      console.log(err)
    })

  // dataAPI = {
  //   'bookedDates': bookedDates
  // }

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `
  )

  function toggleFavoriteItem() {
    const favoriteDiv = document.querySelectorAll('.favorites');
    favoriteDiv.forEach(i => {
      i.addEventListener('click', () => {
        i.classList.toggle('active')
        if (localStorage.getItem('favoriteItems') === null) {
          localStorage.setItem('favoriteItems', 'check')
        } else {
          localStorage.removeItem('favoriteItems')
        }
      })
    })
  }

  toggleFavoriteItem()

}
