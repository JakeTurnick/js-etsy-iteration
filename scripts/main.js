(function () { //IIFE
    'use strict';

    //Calculates average price, to nearest 100th, for all items in USD
    function average(itemsArr) {
        console.log('\nAverage price: ')
        let sum = 0;
        let avg = 0;
        itemsArr.forEach(item => {
            if (item.currency_code === 'USD') {
                sum += item.price;
            }
        });
        avg = sum / (items.length -1);
        console.log('sum', sum, 'avg', avg.toFixed(2))
    }
    average(items)


    //Get array of items between $14 - $18
    function costBetween(itemsArr, min, max) {
        console.log('\nPrice between range:')
        let validItems = [];
        validItems = itemsArr.filter(item => {
            if (item.price >= min && item.price <= max) {
                console.log('price:',item.price.toFixed(2), ' of -', item.title)
                return item;
            }
        })
        console.log(validItems);
    }
    costBetween(items, 14, 18)


    //find item with GBP currency_code - print its name and price
    function findBrits(itemsArr) {
        console.log('\nGBP item:')
        let itemsGBP = [];
        itemsArr.forEach(item => {
            if (item.currency_code === 'GBP') {
                itemsGBP.push(item);
                console.log(item.title, '- price:', item.price.toFixed(2), item.currency_code);
            }
        })
        // console.log('GBP items:', itemsGBP)
    }
    findBrits(items);

    //All items made of wood
    function findWoods(itemsArr) {
        console.log('\nItems made of wood')
        let woods = [];
        itemsArr.forEach(item => {
            if (item.materials.includes("wood")) {
                woods.push(item);
                console.log('item:', item.title, ' is made of ', item.materials)
            }
        })
        console.log(woods)
    }
    findWoods(items);


    //find items made of 8 or more materials
    function eightPlus(itemsArr) {
        console.log('\nItems with 8 or more materials')
        let overEight = [];
        overEight = itemsArr.filter(item => item.materials.length >= 8);
        overEight.forEach(item => console.log('item -', item.title, 'is made of:', item.materials))
        console.log(overEight)
    }
    eightPlus(items);


    //Items made by sellers
    function selfMade(itemsArr) {
        console.log('\nMade by seller');
        let selfMade = [];
        selfMade = itemsArr.filter(item => item.who_made === 'i_did');
        selfMade.forEach(item => console.log('item -', item.title, 'is made by:', item.who_made))
        console.log(selfMade);
    }
    selfMade(items)
})();