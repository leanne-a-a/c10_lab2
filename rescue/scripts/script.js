 /*  
Author: Leanne Afrifa
File Name: script.js
Date: 10/31/2023
*/

// //Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#questions h2");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}

//Function to display the first answer
function ans1() {
    answer1.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger from a predator or is in the road, remove the baby and bring to a rescue center.";
    heading.style.display === "block";
    if (heading.style.display === "block") {
      heading.style.display = "none";
      } else {
        answer1.style.display = "block";
      }
}
 
// //Function to display the second answer
function ans2() {
    answer2.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have the animal removed.";
    if (heading.style.display === "block") {
      heading.style.display = "none";
      } else {
        answer2.style.display = "block";
      }
}
 
// //Function to display the third answer
function ans3() {
    answer3.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
    if (heading.style.display === "block") {
      heading.style.display = "none";
      } else {
        answer3.style.display = "block";
      }
} 
//  //Function to display the fourth answer
function ans4() {
    answer4.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations.";
    if (heading.style.display === "block") {
      heading.style.display = "none";
      } else {
        answer4.style.display = "block";
      }
}
