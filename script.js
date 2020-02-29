//add Button event handler

const addBtn = document.getElementById('addBtn');
const mobileCount = document.getElementById('mobileCount');

let count = 1;
addBtn.addEventListener('click', function () {

    mobileCount.value++;
    count++;

    updatePriceTag('mobilePrice', 1219, count)

    //const subTotal = document.getElementById('subTotal');
    //const subTotalNumber = parseFloat(subTotal.innerText);
    updatePriceTag('subTotal', 1219, count)


})




function updatePriceTag(id, price, count) {
    const mobilePrice = document.getElementById(id);
    const totalMobilePrice = price * count;//1219 * 2 = 2438;
    mobilePrice.innerText = totalMobilePrice;//2438
}


const reduceBtn = document.getElementById('reduceBtn');
reduceBtn.addEventListener('click', function () {
    if (mobileCount.value > 0) {
        mobileCount.value--;
        count--
        updatePriceTag('mobilePrice', 1219, count)
        updatePriceTag('subTotal', 1278, count)


    }
    else {
        mobileCount.value == 0
    }
})

//cover item 
const coverAddBtn = document.getElementById('coverAddBtn');
const coverReduce = document.getElementById('coverReduce');
const coverCount = document.getElementById('coverCount');




coverAddBtn.addEventListener('click', function () {
    coverCount.value++;
    count++;
    updatePriceTag("coverPrice", 59, count)
})

coverReduce.addEventListener('click', function () {
    if (coverCount.value > 0) {
        coverCount.value--;
        count--
        updatePriceTag('coverPrice', 59, count)


    }
    else {
        mobileCount.value == 0
    }
})