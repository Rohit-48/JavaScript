const myNumbs = [1, 2, 3]


// const myTotal = myNumbs.reduce(function (acc,cuv){
//     console.log(`acc: ${acc}, cuv: ${cuv}`);
    
//     return acc + cuv
// }, 0)


const myTotal = myNumbs.reduce( (acc, cuv) => acc + cuv, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        iteamName: "Js Course",
        price: 299
    },
    {
        iteamName: "Py Course",
        price: 599
    },
    {
        iteamName: "Docker Course",
        price: 199
    },
    {
        iteamName: "Data Sciene Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
