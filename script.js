
function updateMobileCount(id, num) {
    let getId = document.getElementById(id);
    let getValue = parseFloat(getId.value);
    let total = getValue + num;
    getId.value = total
    return total

}

function updateMobilePrice(id, num) {
    let getId = document.getElementById(id);
    let getText = getId.innerText;
    let getNumber = parseFloat(getText);

    let totalPrice = getNumber + num;

    getId.innerText = totalPrice;
    return totalPrice;
}

// subtotal update
function updateSubtotal(id1, id2, id3) {
    let firstOne = document.getElementById(id1);
    let firstOneValue = firstOne.innerText;
    let firstValue = parseFloat(firstOneValue)

    let secondOne = document.getElementById(id2);
    let secondOneValue = secondOne.innerText;
    let secondValue = parseFloat(secondOneValue);

    let total = firstValue + secondValue;

    let destination = document.getElementById(id3);
    destination.innerText = total;
    return total;

}

//update total 

function updateTotal(id1, id2, id3) {
    let getIdOne = document.getElementById(id1);
    let getIdSecond = document.getElementById(id2);
    let getIdThird = document.getElementById(id3);

    let total = parseFloat(getIdOne.innerText) + parseFloat(getIdSecond.innerText);
    getIdThird.innerText = total;
    return total
}


// Mobile phone Plus Btn
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function () {
    updateMobileCount("mobileCount", 1)
    updateMobilePrice('mobilePrice', 1219)

    updateSubtotal('mobilePrice', 'coverPrice', 'subTotal')
    updateTotal('subTotal', 'tax', 'total')

})


// Mobile phone Minus Btn

let reduceBtn = document.getElementById('reduceBtn');

reduceBtn.addEventListener('click', function () {
    const mobileCount = document.getElementById('mobileCount');

    if (mobileCount.value > 0) {
        updateMobileCount('mobileCount', -1)
        updateMobilePrice('mobilePrice', -1219)
        updateSubtotal('mobilePrice', 'coverPrice', 'subTotal')
        updateTotal('subTotal', 'tax', 'total')

    }
    else {
        mobileCount.value == 0
    }
})

// Cover Plus Btn 

let coverAddBtn = document.getElementById('coverAddBtn');

coverAddBtn.addEventListener('click', function () {
    updateMobileCount("coverCount", 1)
    updateMobilePrice('coverPrice', 59)
    updateSubtotal('mobilePrice', 'coverPrice', 'subTotal')
    updateTotal('subTotal', 'tax', 'total')

})

// Cover Minus Btn 

let coverReduce = document.getElementById('coverReduce');
coverReduce.addEventListener('click', function () {
    let coverCount = document.getElementById('coverCount');
    if (coverCount.value > 0) {
        updateMobileCount('coverCount', -1)
        updateMobilePrice('coverPrice', -59)
        updateSubtotal('mobilePrice', 'coverPrice', 'subTotal')
        updateTotal('subTotal', 'tax', 'total')

    }
    else {
        coverCount.value == 0
    }
})


