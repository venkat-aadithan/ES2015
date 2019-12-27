function calculateDiscount(price,discount = .25){
    return price - (price * discount)
}

alert(calculateDiscount(100))
alert(calculateDiscount(100,.10));