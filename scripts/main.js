(function () { //IIFE
    'use strict';

    //Calculates average price, to nearest 100th, for all items in USD
    function average(itemsArr) {
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
        let validItems = [];
        validItems = itemsArr.filter(item => {
            if (item.price >= min && item.price <= max) {
                console.log('price:',item.price, ' of -', item.title)
                return item;
            }
        })
        console.log(validItems);
    }
    costBetween(items, 14, 18)


    //find item with GBP currency_code - print its name and price
    function findBrits(itemsArr) {
        let itemsGBP = [];
        itemsArr.forEach(item => {
            if (item.currency_code === 'GBP') {
                itemsGBP.push(item);
                console.log(item.title, '- price:', item.price.toFixed(2));
            }
        })
        // console.log('GBP items:', itemsGBP)
    }
    findBrits(items);
})();