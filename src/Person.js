function calculateSum(...price){
    return price.reduce( (prev,current) => prev + current )
}

alert(calculateSum(1,2,3,4,5))