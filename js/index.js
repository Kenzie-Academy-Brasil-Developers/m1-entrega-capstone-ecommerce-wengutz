let showcase = document.getElementsByClassName('showcase')[0]

createCardFromList(data, showcase)

function createCard(product) {
  let img = product.img
  let category = product.tag[0]
  let name = product.nameItem
  let artist = product.artist
  let year = product.year
  let description = product.description
  let price = product.value.toFixed(2)
  let button = product.addCart

  let productCard = document.createElement('li')
  productCard.classList.add('product')

  let productImg = document.createElement('img')
  productImg.classList.add('product-img')
  productImg.src = img
  productImg.alt = `Cover of ${name}`
  productImg.title = name

  let cardContent = document.createElement('div')
  cardContent.classList.add('product-main')

  let productTitle = document.createElement('h1')
  productTitle.classList.add('product-title')
  productTitle.innerText = name

  let productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  let productArtist = document.createElement('em')
  productArtist.classList.add('product-artist')
  productArtist.innerText = artist

  let productYear = document.createElement('p')
  productYear.classList.add('product-year')
  productYear.innerText = year

  let productCategory = document.createElement('h5')
  productCategory.classList.add('product-category')
  productCategory.innerText = category

  let productDescription = document.createElement('p')
  productDescription.classList.add('product-description')
  productDescription.innerText = description

  let productPrice = document.createElement('strong')
  productPrice.classList.add('product-price')
  productPrice.innerText = `$ ${price}`

  let productButton = document.createElement('button')
  productButton.classList.add('product-button')
  productButton.innerText = button

  productInfo.append(productArtist, productYear, productCategory)
  productCard.append(
    productImg,
    productTitle,
    productInfo,
    productDescription,
    productPrice,
    productButton
  )

  return productCard
}

function createCardFromList(list, destinationElement) {
  destinationElement.innerHTML = ''

  for (let i = 0; i < list.length; i++) {
    let item = list[i]

    let card = createCard(item)

    destinationElement.appendChild(card)
  }
}

function addToCart() {}

function removeFromCart() {}

function filterCards() {}

function findCard() {}
