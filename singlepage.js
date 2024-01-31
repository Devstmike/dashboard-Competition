// Sort Operation
let LastOrders = [];
let tableData = document.querySelector("table");
let rows = document.querySelectorAll("tr")
let data  = document.querySelectorAll("td");
for (let i = 0, k= 5; i < rows.length; i++, k = k + 4) {    
    // for (let j = 0; j <= 5; j++) {
        LastOrders.push([data[k].innerText,data[k + 1].innerText,data[k +2].innerText,data[k + 3].innerText,data[k + 4].innerText])
    // }
}


console.log(LastOrders)