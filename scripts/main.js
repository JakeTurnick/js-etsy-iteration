//_.method contains loadash

const demo = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(demo);



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
    //From lesson notes
        // const prices = items.filter(item => { //if true, returns into the array. if false, removes item from array
        //     return item.currency_code === "USD"
        // }).map(item => { //chains map to make an array of only USD prices
        //     return item.price;
        // });
        // const sum = prices.reduce((acc, i) => acc + i);
        // const avg = sum / prices.length; //uses array of filtered prices as length
    //or
        // const itemUS = items.filter(item => {
        //     return item.currency_code === "USD"
        // });
        // const sum = itemUS.reduce((acc, i) => {
        //     return acc + i.price; //acc must be initialized because acc.price is undefined, i.price is the price of the current item
        // }, 0) //giving initial value ensures that each obj is read and acc stays a number


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
    //From notes
        // const itemGBP = items.filter(item => {
        //     return item.currency_code === "GBP"
        // });
        // itemGBP.forEach(item => {
        //     console.log(item)
        // })

    //All items made of wood
    function findWoods(itemsArr) {
        console.log('\nItems made of wood')
        let woods = [];
        itemsArr.forEach(item => { //for each not needed, just assign itemsArr.filter to variable
            if (item.materials.includes("wood")) {
                woods.push(item);
                console.log('item:', item.title, ' is made of ', item.materials)
            }
        })
        console.log(woods)
    }
    findWoods(items);
    //From notes 
        // const isMadeOfWood = items.filter((item) => {
        //     item.materials.includes("wood") //filters to items made of wood
        // }).map(item => {
        //     return item.title; //re-maps array with only titles of wood items
        // }).forEach(item => {
        //     console.log(`${title}\n`) //logs re-mapped array titles
        // })


    //find items made of 8 or more materials
    function eightPlus(itemsArr) {
        console.log('\nItems with 8 or more materials')
        let overEight = [];
        overEight = itemsArr.filter(item => item.materials.length >= 8);
        overEight.forEach(item => console.log('item -', item.title, 'is made of:', item.materials))
        overEight.forEach(item => {
            console.log('item -', item.title);
            item.materials.forEach(material => {
                console.log(`${material}\n`)
            })
        })
        console.log(overEight)
    }
    eightPlus(items);


    //Items made by sellers
    function selfMade(itemsArr) {
        console.log('\nMade by seller');
        let selfMade = [];
        selfMade = itemsArr.filter(item => item.who_made === 'i_did');
        selfMade.forEach(item => console.log('item -', item.title, 'is made by:', item.who_made))
        console.log(`${selfMade.length} items were made by their sellers`);
    }
    selfMade(items)
})();