//1.find the duplicate in a string() (use array) -optional

//2.reverse a string (use array method)
var a= "padmini";
s=a.split("");
r=s.reverse() ;
console.log(r.join(""));

//3.find the highest and lowest value in array

s=Math.max(5,8,99);
m=Math.min(55, 7,99);
console.log("maximum no.",s);
console.log("minimum-",m) ;


//sorting of an array - optional
//5.(employee data structure): practice array of objects

var employee=[{
    name:"ravi", 
    des:"architect", 
    sal:39000
},{ name:"gyatri", 
    des:"clerk", 
    sal:16000}, 
    {name:"ravi", 
    des:"architect", 
    sal:39000}];
console.log(employee) ;

//display first 3 elements in an array
var a=[5, 6,78,5,7,9,10];
s=a.slice(0,3);
console.log(s);

//7.remove 4th (index) element and add 2 element there
var a=[5,6,7,44,23,18];
console.log(a);
a.splice(4,1,47,34);
console.log(a) ;

//8.Study events, onload, ondoubleclick, onsubmit, onchange, onkeyup, onkeydown

function sh() {
alert("onload event ");
console.log("onload event ");
}
function db() {
alert("ondblclick alert - double cliked");

}
function sub() {
  alert("form sbmtd");
	document.getElementById('s').innerHTML = "form submitted";
}
function ch() {
  alert("input value changed") ;
}

function d() {
  alert("onkeydown event..") ;
	
}

function u() {
  document.getElementById('p').innerHTML = "onkeyup  event trigered.. " ;
	
}



// task on function and math object
//9.create parametrized method/function to multiply 3 numbers
function mul(a, b) {
    var r=a*b;
    console.log("multiply",a,"and ",b,"is",r);
}
mul(7,6) ;

//10.create parametrized method to divide 2 numbers
function divi(a, b) {
    var r=a/b;
    console.log("Division",a,"and ",b,"is",r);
}
divi(80,4) ;

//11.create a method to add background color to div element

function chn(){
document.getElementById('c').style.backgroundColor="pink";
}


//write a js method, when user click on button, display random integer below it.

function num(){  
  document.getElementById('t').innerHTML=Math.random() ;
    
}

//write js function to format number up to specified decimal places.

function formt(str,a){
console.log(str.toFixed(a));

}
formt(3.7,2);

//14.write function to convert negative number to positive number
function con() {
    p=Math.abs(-2);
    console.log(p);
}
con();

//15.write function to generate random background color of body

function bodybak(){
 const r=Math.floor(Math.random()*256);
const g=Math.floor(Math.random()*256);
const b=Math.floor(Math.random()*256);
document.body.style.backgroundColor="rgba("+r+","+g+","+b+")";
}


//onload of your webpage, display modal (bootstrap 4/5)
setTimeout(show,4000);
function show(){
document.getElementById('mod').style.display="block";
  
}
function clos(){
    alert("close.. ");
document.getElementById('mod').style.display="none";
    
}