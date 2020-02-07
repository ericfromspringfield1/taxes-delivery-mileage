//TAXES BEGIN LINE 58
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

//Recursive Solution
function fibRec(n) 
{
    if (n < 2) 
    {
        return n
    }
    return fibRec(n - 1) + fibRec(n - 2)
}
document.getElementById("column1").innerHTML = (`Fibonacci Recursive Solution Is ${fibRec(10)}`)



//Iterative Solution - to show each number in the sequence out to n
function fibIt(num)
{
//because first two numbers in sequence are 0, 1
const arr = [0, 1] 
//mapper will return the object which is the key and value of the sequence. KEY = index position.  VALUE = the number in that position
const mapper = {}
//begin counter at 0
let counter = 0

//because we already have first two numbers (0, 1), we begin at 2
for (let i = 2; i <= num; i++)
{
    let a = arr[i - 1]
    let b = arr [i - 2]
    arr.push(a + b)
    
}

for (let element in arr)
{
    mapper[counter] = arr[element]
    counter++
}
//return arr and you will get that many numers of the sequence
return arr
}
console.log(fibIt(10))
document.getElementById("column2").innerHTML = (`Fibonacci Iterative Solution While Returning Arr Is ${fibIt(10)}`)

/*

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
var tax = .975


function myFunction(value, index, array) {
    return value * tax + value
}
/*document.getElementById("arrayMap").innerHTML = (`These numbers are doubled ${numbers2}`);*/

/***********ERIC MILEAGE FOR PREMIUM FOOD************ */

function myMiles() {
    var dailyBeginMiles = [107320, 107410, 107532, 107691, 107788, 107906, 108015, 108210, 108286, 108351, 108459, 108581, 108671, 108780, 108965, 109050, 109140, 109226, 109312, 109365, 109430, 109500, 109633, 109711, 109810, 109900 ]
    var dailyEndMiles = [107410, 107516, 107671, 107783, 107890, 108000, 108139, 108273, 108315, 108459, 108559, 108671, 108761, 108798, 109037, 109135, 109228, 109291, 109358, 109425, 109477, 109559, 109703, 109765, 109895, 109970]
    var dailyMiles = []
    var centsPerMile = 0.58
    const dailyDollars = []
    mapper = {}
    counter = 0
    
    for(i = 0; i < dailyEndMiles.length; i++)
    {
        let dailyMilesDriven = dailyEndMiles[i] - dailyBeginMiles[i]
        dailyMiles.push(dailyMilesDriven)
        let dailyDollarsMade = dailyMilesDriven * centsPerMile
        dailyDollars.push(Math.ceil(dailyDollarsMade)) 
    } 
    
    
    for (let element in dailyDollars) 
    {
        mapper[counter] = dailyDollars[element]
        counter++
    }
    
    const totalDollars = dailyDollars.reduce(function(a, b){
        return a + b
    }, 0)
    document.getElementById("column4").innerHTML = (`Total Dollars Written Off Is ${totalDollars}`)
    document.getElementById("column5").innerHTML = (`Daily Odometer Begin Mileage Is ${dailyBeginMiles}`)
    document.getElementById("column6").innerHTML = (`Daily Odometer End Mileage Is ${dailyBeginMiles}`)
    console.log(totalDollars)
    //return dailyDollars for dailyDollars 
    //return dailyMiles for the miles
    //return totalDollars for total dollars written of
    return dailyDollars
    
}
document.getElementById("column3").innerHTML = (`Daily Dollars Written Off Is ${myMiles()}`)
console.log(myMiles())




    

    


