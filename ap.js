var m=document.querySelector("div #btn");
var h= document.querySelector("div #h");
var h1=document.querySelector("div #ne");



m.addEventListener('click', function(){


    var n= parseInt(document.querySelector("div #in").value);

    var f= Math.floor(Math.random()*10)+1;

if(n==f){

h1.textContent="Congratulations! You won the game.  Refresh this page to play again ";




}

else{

    h.textContent= "You lose the game.  The right number was   :  " +   f   + ";   Refresh this page to try again";  
   
 
}


})



