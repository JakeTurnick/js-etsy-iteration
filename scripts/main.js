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

})();