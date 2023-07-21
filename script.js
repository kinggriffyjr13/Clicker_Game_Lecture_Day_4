let gold = 0;
// upgrades

let backpack = {
    price: 150,
    quantity: 0,
    clickValueAdded: 1,
    costIncrease: 1.2
}

function calculateClickValue(){
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    return clickValue
}

function getGold(){
    let calculatedClickValue = calculateClickValue()
    gold = gold + calculatedClickValue
    console.log(gold)
draw()
}

function draw(){
    document.getElementById("gold-count").innerText = gold

    document.getElementById("click-value").innerText =
    calculateClickValue()
}


function getBackpack(){
    if (gold >= backpack.price){
        backpack.quantity = backpack.quantity + 1
        gold -= backpack.price
        console.log(backpack.quantity)
        backpack.price = backpack.price * backpack.costIncerase
        draw()
    }
    else{
        alert("You don't have enough gold so get OUT!!!!")
    }
}
