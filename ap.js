var m=document.querySelector("div #btn");
var h= document.querySelector("div #h");
var h1=document.querySelector("div #ne");
var n= document.querySelector("div #in")
var numberoflose=1;
var numberofwin=1;
var numberoftries=1;
var h4=document.querySelector(" div #h4")
var h41=document.querySelector("div #h41")
var h42=document.querySelector("div #h42")


n.addEventListener("keyup" ,e =>{

e.preventDefault();
if(e.keyCode===13){

    console.log("Enter is pressed")
    m.click();
}

})


m.addEventListener('click', function(){

    var tries= numberoftries++;
    h42.textContent=`Number of tries: ${tries}` ;

  var num=parseInt(n.value);

    var f= Math.floor(Math.random()*10)+1;

if(num==f){

h1.textContent="Congratulations! You won the game. To play again, wait untill this meassage dissappears.  ";

setTimeout(() => {

    h1.textContent="";
},7000);

var win= numberofwin++;

h41.textContent="Number of win:  " +  win;


}

else{

  h.textContent= "You lose the game.  The right number was   :  " +   f   + "; To try again, wait untill this meassage dissappears.   "; 
 


setTimeout(() => {
    h.textContent="";


    
}, 7000);

var lose= numberoflose++;

h4.textContent="Number of lose:  " +  lose




   
 
}




})
