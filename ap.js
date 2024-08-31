var m=document.querySelector("div #btn");
var m1=document.querySelector("div #btn2")
var h= document.querySelector("div #h");
var h1=document.querySelector("div #ne");
var n= document.querySelector("div #in");
var h4=document.querySelector("div #h4");
var h41=document.querySelector("div #h41");
var h42=document.querySelector("div #h42");
let numberoftries=JSON.parse(localStorage.getItem("numberoftries"));

if(!numberoftries) {
  numberoftries = 0;
}

let numberofwin=JSON.parse(localStorage.getItem("numberofwin"));
if(!numberofwin) {
  numberofwin = 0;
}

let numberoflose=JSON.parse(localStorage.getItem("numberoflose"));
if(!numberoflose) {
  numberoflose = 0;
}



n.addEventListener("keyup" ,e =>{

e.preventDefault();
if(e.keyCode===13){

    console.log("Enter is pressed")
    m.click();
}

})

m.addEventListener('click', function(){


numberoftries++
    updatenumberoftries();
    h42.textContent=`Number of tries: ${numberoftries}` ;

  var num=parseInt(n.value);

    var f= Math.floor(Math.random()*10)+1;

if(num==f){

h1.textContent="Congratulations! You won the game. To play again, wait untill this meassage dissappears.  ";

setTimeout(() => {

    h1.textContent="";
},7000);

 numberofwin++;
 updatenumberofwin()

h41.textContent=`Number of wins: ${numberofwin}`


}

else{

  h.textContent= "You lose the game.  The right number was   :  " +   f   + "; To try again, wait untill this meassage dissappears.   "; 
 
setTimeout(() => {
    h.textContent="";    
}, 7000);

 numberoflose++;
 updatenumberoflose()

h4.textContent=`Number of lose: ${numberoflose}`

}

});

function updatenumberoftries(){


  localStorage.setItem("numberoftries", JSON.stringify(numberoftries));
  localStorage.removeItem("numberoftries");
  

}

function updatenumberofwin(){


  localStorage.setItem("numberofwin", JSON.stringify(numberofwin));
  localStorage.removeItem("numberofwin");

}


function updatenumberoflose(){


  localStorage.setItem("numberoflose", JSON.stringify(numberoflose));
  localStorage.removeItem("numberoflose");

}

m1.addEventListener('click',function(){

  window.location.reload();

})






