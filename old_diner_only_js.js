// Bottega Diner

const entrees = {
    ckn: {
        name: 'Country Fried Chicken',
        cost: 11
    },
    polishdog: {
        name: '6 oz Polsih Sausage',
        cost: 7
    },
    cb: {
        name: 'Double Bacon Cheeseburger',
        cost: 8
    },
    gc: {
        name: "Grilled Cheese on Italian Bread",
        cost: 9
    }
}
const sides = {
    fries: {
        name: 'Beer Battered Fries',
        cost: 11
    },
    veggies: {
        name: 'Oven Roasted Veggies',
        cost: 7
    },
    salad: {
        name: 'Mixed Green Salad',
        cost: 8
    },
    onionrings: {
        name: "South Western Onion Rings",
        cost: 9
    }
}

const Welcome = () => {
    alert(`Welcome to Skyline Diner, Here is our menu!`)
    alert(`
        Menu
        Entrees    
        ${entrees.ckn.name} - $${entrees.ckn.cost}
        ${entrees.polishdog.name} - $${entrees.polishdog.cost}
        ${entrees.cb.name}- $${entrees.cb.cost}
        ${entrees.gc.name}- $${entrees.gc.cost}
        Sides
        ${sides.fries.name} - $${sides.fries.cost}
        ${sides.veggies.name} - $${sides.veggies.cost}
        ${sides.salad.name}- $${sides.salad.cost}
        ${sides.onionrings.name}- $${sides.onionrings.cost}
        `);
    }

var response = [
  'Wonderful Choice', 
  'Now that one is yummy', 
  'Great Choice'
  ];
        
var randomResponse = response[Math.floor(Math.random() * response.length)];

const order = () => {
    ordEntree();
    ordSides();
    confirmOrd();
}
const ordEntree = () => {
    entree = prompt(`What can I get you for your Entree?
        ${entrees.ckn.name} - $${entrees.ckn.cost}
        ${entrees.polishdog.name} - $${entrees.polishdog.cost}
        ${entrees.cb.name}- $${entrees.cb.cost}
        ${entrees.gc.name}- $${entrees.gc.cost}
    `).toUpperCase();
    if(entree === 'COUNTRY FRIED CHICKEN') {
        alert(randomResponse);}
        else {ordEntree();}
    
    if(entree === '6 OZ POLISH SAUSAGE') {
        alert(randomResponse);}
        else {ordEntree();}

    if(entree === 'DOUBLE BACON CHEESBURGER') {
        alert(randomResponse);}
        else {ordEntree();}

    if(entree === 'GRILLED CHESSE ON ITALIAN BREAD') {
        alert(randomResponse);}
        else {ordEntree();}
    }

const ordSide1 = () => {
    side1 = prompt(`What would like for your first side?

        ${sides.fries.name} - $${sides.fries.cost}
        ${sides.veggies.name} - $${sides.veggies.cost}
        ${sides.salad.name}- $${sides.salad.cost}
        ${sides.onionrings.name}- $${sides.onionrings.cost}
    `).toUpperCase();
    if(side1 === "BEER BATTERED FRIES") {
        alert(randomResponse);}
        else {ordSide1();}

    if(side1 === "OVEN ROASTED VEGGIES") {
        alert(randomResponse);}
        else {ordSide1();}

    if(side1 === "MIXED GREEN SALAD") {
        alert(randomResponse);}
        else {ordSide1();}

    if(side1 === "SOUTH WESTERN ONION RINGS") {
        alert(randomResponse);}
        else {ordSide1();}
    }

const ordSide2 = () => {
    side2 = prompt(`What would like for your second side?

        ${sides.fries.name} - $${sides.fries.cost}
        ${sides.veggies.name} - $${sides.veggies.cost}
        ${sides.salad.name}- $${sides.salad.cost}
        ${sides.onionrings.name}- $${sides.onionrings.cost}
    `).toUpperCase();
    if(side2 === "BEER BATTERED FRIES") {
        alert(randomResponse);}
        else {ordSide2();}

    if(side2 === "OVEN ROASTED VEGGIES") {
        alert(randomResponse);}
        else {ordSide2();}

    if(side2 === "MIXED GREEN SALAD") {
        alert(randomResponse);}
        else {ordSide2();}

    if(side2 === "SOUTH WESTERN ONION RINGS") {
        alert(randomResponse);}
        else {ordSide2();}
    }
    
let entree; 
let side1; 
let side2;
let total;
let entreePrice;
let side1Price; 
let side2Price; 

checkout = () => {
    if(entree === 'COUNTRY FRIED CHICKEN') {
        entreePrice = entrees.ckn.cost;
    }
    else if(entree === '6 OZ POLISH SAUSAGE') {
        entreePrice = entrees.polishdog.cost;
    }
    else if(entree === 'DOUBLE BACON CHEESBURGER') {
        entreePrice = entrees.bc.cost;
    }
    else if(entree === 'GRILLED CHESSE ON ITALIAN BREAD') {
        entreePrice = entrees.gc.cost;
    }
    if(side1 === 'BEER BATTERED FRIES') {
        side1Price = sides.fries.cost;
    }
    else if(side1 === 'OVEN ROASTED VEGGIES') {
        side1Price = sides.veggies.cost;
    }
    else if(side1 === 'MIXED GREEN SALAD') {
        side1Price = sides.salad.cost;
    }
    else if(side1 === 'SOUTH WESTERN ONION RINGS') {
        side1Price = sides.onionrings.cost;
    }
    if(side2 === 'BEER BATTERED FRIES') {
        side2Price = sides.fries.cost;
    }
    else if(side2 === 'OVEN ROASTED VEGGIES') {
        side2Price = sides.veggies.cost;
    }
    else if(side2 === 'MIXED GREEN SALAD') {
        side2Price = sides.salad.cost;
    }
    else if(side2 === 'SOUTH WESTERN ONION RINGS') {
        side2Price = sides.onionrings.cost;
    }

    total = parseFloat(entreePrice + side1Price + side2Price).toFixed(2);
    alert(`Your Total is $${total}. Thanks for coming in and have a great day!`)
}


// console.log(`This customer ordered the ${entree}, the ${side1}, and the ${side2}`);
