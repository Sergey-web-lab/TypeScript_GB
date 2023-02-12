import { renderBlock } from './lib.js'

export function renderUserBlock() {

  const user = {
    username: 'Kate',
    avatarUrl: 'https://e7.pngegg.com/pngimages/207/508/png-clipart-computer-icons-youtube-avatar-user-avatar-mammal-face.png',
  }

  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('favoritesAmount', '7')

  function getUserData(): unknown {
    const raw = localStorage.getItem('user')
    const userInfo = JSON.parse(raw)
    const username = userInfo.username
    if (typeof username == 'string') {
      return username
    }
  };

  function getUserUrl(): unknown {
    const raw = localStorage.getItem('user')
    const userInfo = JSON.parse(raw)
    const avatarUrl = userInfo.avatarUrl
    if (typeof avatarUrl == 'string') {
      return avatarUrl
    }
  };

  function getFavoritesAmount(): unknown {
    const favoritesAmount = localStorage.getItem('favoritesAmount')
    if (typeof favoritesAmount == 'string') {
      return favoritesAmount
    }
  }

  const userName = getUserData()
  const avatarUrl = getUserUrl()
  const favoriteItemsAmount = getFavoritesAmount()

  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
