// 1||||| seerToMon Function
function seerToMon(seer){
//if condition start
if (typeof(seer)== "string"){
return 'Pleasr insert Number'
}
else{
var mon= 40; //Per Mon valu
var outPut= seer/mon; //output calculation
return outPut}
}
var totalSeer=seerToMon(120);
console.log(totalSeer);



// 2||||| totalSales function
function totalSales(shirtQty,pantQty,jutaQty)
{
if (typeof(shirtQty)== "string" || typeof(pantQty)== "string" || typeof(jutaQty)== "string" ) {
return 'Pleasr insert Number';
}
else{
//item Price
var shirt= 100;
var pant =200;
var juta=500;
//item price with Quantity
var totalShirtPrice=shirt*shirtQty;
var totalPantPrice=pant*pantQty;
var totalJutaPrice=juta*jutaQty;
//total sales output
var totalSale=(totalShirtPrice + totalPantPrice + totalJutaPrice);
return totalSale;
}
}
console.log(totalSales(2,2,2));
// 3 ||||| deliveryCost Function
function deliveryCost(deliveryQty){
if (typeof(deliveryQty)== "string"){
return 'Pleasr insert Number'
}
else{
// delivery cost for 1st 100 t-shirt
if (deliveryQty <= 100){
var preDeliveyrCost=100;
var totalCost= preDeliveyrCost*deliveryQty;
return totalCost;
}
// delivery cost for 2nd 100 t-shirt
else if (deliveryQty > 100 && deliveryQty <= 200 ){
var preDeliveyrCostFor100=100;
var preDeliveyrCostFor200=80;
var CostValueFor100=100*100;
var CostValueFor200= (deliveryQty-100)*preDeliveyrCostFor200;
var totalCost=(CostValueFor100+CostValueFor200);
return totalCost;
}



// delivery cost for after 200 t-shirt
else if (deliveryQty > 200 ){
var preDeliveyrCostFor100=100;
var preDeliveyrCostFor200=80;
var preDeliveyrCostFor300Plus=50;
var CostValueFor100=100*100; //10000
var CostValueFor200=80*100; //8000
var CostValueFor300Plus= (deliveryQty-200)*preDeliveyrCostFor300Plus;
var totalCost=(CostValueFor100+CostValueFor200+CostValueFor300Plus);
// console.log(totalCost);
return totalCost;
}
}
}
console.log(deliveryCost(120));


// 4 ||||| perfectFriend function
function perfectFriend(){
// My frinend name array
var myFrend=['abul', 'chabul', 'tabul', 'jababul','kabul','hababul', 'jababul', 'redbul', 'whitebul', 'orginalbul']
var value = 5 ; //assing string length for output
//for loop start
for(var i=0; i  
    //if conditoin start
if (myFrend[i].length==value){
value=myFrend[i];
}

return value;
}
console.log(perfectFriend());

