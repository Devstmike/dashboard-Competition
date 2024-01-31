let entranceAnimation = document.querySelector("#EntranceAnimation")
setTimeout(() => {
    entranceAnimation.style.display = "none"
}, 2000);


// google.charts.load("current", {packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//     ["Element", "green", { role: "style" } ],
//     ["Jan", 6000, "green"],
//     ["Feb", 19000, "green"],
//     ["Mar", 2700, "green"],
//     ["Apr", 27000, "green"],
//     ["May", 8000, "green"],
//     ["Jun", 45000, "green"],
//     ["Jul", 8000, "green"],
//     ["Aug", 17000, "green"],
//     ["Sep", 32000, "green"],
//     ["Oct", 4800, "green"],
//     ["Nov", 30000, "green"],
//     ["Dec", 27000, "green"],
// ]);

//     var view = new google.visualization.DataView(data);
//     view.setColumns([0, 1,
//                     { calc: "stringify",
//                         sourceColumn: 1,
//                         type: "string",
//                         role: "annotation" },
//                     2]);

//     var options = {
//     // title: "Density of Precious Metals, in g/cm^3",
//     // width: 100,
//     height: 300,
//     // bar: {groupWidth: "95%"},
//     legend: { position: "none" },
//     };
//     var chart = new google.visualization.ColumnChart(document.getElementById("addChart"));
//     chart.draw(view, options);
// }
{/* <div id="addChart" style="width: 900px; height: 300px;"></div> */}


// chart documentation
// https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/columnchart



// let chosenChart = "bar"
function generateChart(chosenChart){

    let oldChart = Chart.getChart('myChart');
    if (oldChart) {
        oldChart.destroy();
    }
    
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];
var yValues = ["7000","18000","2700","28000","9000","45000","9000","17000","32000","2800","30000","26000"];
var barColors = ["#34caa439","#34caa439","#34caa439","#34caa439","#34caa439","#34CAA5","#34caa439","#34caa439","#34caa439","#34caa439"];



let mynewChart = ""
mynewChart = new Chart("myChart", {
  type: chosenChart,
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    // border: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    },
    scales: {
        x: {
            beginAtZero : true,
          grid: {
            display : false
        }
        },
        y: {
            beginAtZero : true,
          grid: {
            display : false
        }
        }
      }
  }
});

}

generateChart("bar")
let darkMode  = document.querySelector("#darkMode");
let lightMode  = document.querySelector("#lightMode");
let body = document.querySelector("body");
let header = document.querySelector("header");

    
darkMode.onclick = () => {
   body.id = "darkMode"
}

lightMode.onclick = () =>{
   body.id  = ""
}

 let filledBars = document.querySelectorAll(".filledBar");
setTimeout(() => {

    filledBars.forEach( (element, index) => {

        switch (index) {
            case 0:
                filledBars[0].style.width = "50%"
                break;
            case 1:
                filledBars[1].style.width = "20%"
                break;
            case 2:
                filledBars[2].style.width = "80%"
                break;
            case 3:
                filledBars[3].style.width = "40%"
                break;
            default:
                break;
        }
    })
}, 4000);


let searchBar = document.querySelector(" header .search");
let searchInput = document.querySelector("header input");

searchInput.onfocus = () => {
    searchBar.classList.add("shadow");
}


searchInput.onblur = () => {
    searchBar.classList.remove("shadow");
}

var  chartvalue
try {
  let chartType  = document.querySelector("#chartType");
  chartType.onchange = () => {
     chartvalue  = document.querySelector("#chartType").value;
    generateChart(chartvalue)
    }
} catch (error) {
  console.log(error)
}



// add shortcut keys
document.onkeydown = (event) => {
  if(event.ctrlKey && event.altKey && event.key == "d"){
     body.id = "darkMode"
     console.log("presse")
  } else if(event.ctrlKey && event.altKey && event.key == "l"){
    body.id = ""
 }
    // console.log("yes")
}


// operations
// filter
let filterField = document.querySelector("#filname");
let Operations = document.querySelector("#Operations");
// filterField.onchange = () => {
//   // if()
//   console.log("filtering")
// }


// ctrl + alt + l = light
// ctrl + alt + d = dark

// random data 
// operatiions



// let personData = [

//                   { 
//                     chart : ["7000","18000","2700","28000","9000","45000","9000","17000","32000","2800","30000","26000"],
//                     Total : [100,200,150, 400000],
//                     lastOrder : []

//                   },

//                   {

//                   }
// ]

// add todays date
let headerDate = document.querySelector("#headerDate");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateNow = new Date()
headerDate.innerHTML = `${months[dateNow.getMonth() + 1]}  ${dateNow.getDate()}, ${dateNow.getFullYear()}`;