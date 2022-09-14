let showcase = document.getElementsByClassName('showcase')[0]
let cardButton = document.getElementsByClassName('product-button')
let removeButton = document.getElementsByClassName('remove-button')
let emptyCart = document.getElementsByClassName('empty-cart')[0]
let cartQuantity = 0
let cartTotal = 0

createCardFromList(data, showcase)
addToCart()

function createCard(product) {
  let id = product.id
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
  productButton.id = id

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

function createCartItem(product) {
  emptyCart.innerHTML = ''

  let img = product.img
  let title = product.nameItem
  let price = product.value

  let cartItem = document.createElement('li')
  cartItem.classList.add('cart-item')

  let itemCartImg = document.createElement('img')
  itemCartImg.classList.add('cart-img')
  itemCartImg.src = img
  itemCartImg.alt = `Cover of ${title}`
  itemCartImg.title = title

  let cartInfo = document.createElement('div')
  cartInfo.classList.add('cart-info')
  let cartAlign = document.createElement('div')
  cartAlign.classList.add('cart-align')
  let itemCartTitle = document.createElement('h1')
  itemCartTitle.classList.add('cart-item-title')
  itemCartTitle.innerText = title

  let productPrice = document.createElement('strong')
  productPrice.classList.add('product-price')
  productPrice.innerText = `$ ${price}`

  let remove = document.createElement('button')
  remove.classList.add('remove-button')
  remove.innerText = 'Remove from cart'
  remove.addEventListener('click', function (event) {
    let item = event.path[2]
    item.remove()
    cartQuantity = 0
    cartTotal = 0
  })
  cartInfo.append(itemCartTitle, productPrice)
  cartAlign.append(cartInfo, remove)
  cartItem.append(itemCartImg, cartAlign)
  return cartItem
}

function createCardFromList(list, destinationElement) {
  destinationElement.innerHTML = ''

  for (let i = 0; i < list.length; i++) {
    let item = list[i]

    let card = createCard(item)

    destinationElement.appendChild(card)
  }
}

function addToCart() {
  for (let i = 0; i < data.length; i++) {
    let button = cardButton[i]

    button.addEventListener('click', function (event) {
      let productId = parseInt(event.currentTarget.id)
      let cartItem = findItem(productId)
      let newItem = createCartItem(cartItem)
      let cart = document.createElement('ul')
      cart.classList.add('cart-loaded')
      cart.append(newItem)

      cartQuantity++
      let quantity = document.createElement('div')
      let textQuantity = document.createElement('h3')
      textQuantity.innerText = 'Quantity:'

      let itemQuantity = document.createElement('p')
      itemQuantity.innerText = `${cartQuantity}`
      quantity.append(textQuantity, itemQuantity)
      quantity.classList.add('cart-quantity')

      cartTotal += cartItem.value
      let total = document.createElement('div')
      let textTotal = document.createElement('h3')
      textTotal.innerText = 'Total:'
      let itemsTotal = document.createElement('p')
      itemsTotal.innerText = `$ ${cartTotal}`
      total.append(textTotal, itemsTotal)
      total.classList.add('cart-total')

      emptyCart.append(cart, quantity, total)
    })
  }
}

function findItem(id) {
  for (let i = 0; i < data.length; i++) {
    let product = data[i]
    if (product.id == id) {
      return product
    }
  }
  return false
}
