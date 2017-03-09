
  
	   document.getElementById("form1").onsubmit=function() {
	   
	  place = parseInt(document.querySelector('input[name = "place"]:checked').value);
	   
	  meat = parseInt(document.querySelector('input[name="meat"]:checked').value);
	   
	  topping = parseInt(document.querySelector('input[name = "topping"]:checked').value);
	   
	  tacofav = parseInt(document.querySelector('input[name = "tacofav"]:checked').value);
	  
	  drink = parseInt(document.querySelector('input[name = "drink"]:checked').value);
	   
	   total= place + meat + topping + tacofav + drink;
	   
	  
	   //document.getElementById("answer").innerHTML = total;
	   
	   

	   if(total <= 5) {
document.getElementById("answer2").innerHTML = " You are a fishtaco. <br><img src ='sailormoon.jpg'>";
}

   if(total >=6 && total < 11) {
document.getElementById("answer2").innerHTML = "You are a barbacoa taco. <br><img src ='sailormercury.jpg'>";
}
	
	if(total >=12 && total < 16) {
document.getElementById("answer2").innerHTML = "You are a fajita taco.<br><img src ='sailormars.jpg'>";
}   

	if(total >=17 && total < 21) {
document.getElementById("answer2").innerHTML = "You are a breakfast taco.<br><img src ='sailorjupiter.jpg'>";
}   

	if(total >= 22) {
document.getElementById("answer2").innerHTML = "You are a bean and cheese taco. <br><img src ='sailorvenus.jpg'>";
}   



		   
	   return false; // required to not refresh the page; just leave this here
	   }// end the submit function
