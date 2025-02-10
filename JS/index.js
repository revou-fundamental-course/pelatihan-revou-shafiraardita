function conversion()
{
  var tempcelcius = document.getElementById("inputField").value;
  var tempfahrenheit = (tempcelcius * (9 / 5 )) + 32;
  document.getElementById("outputField").value = tempfahrenheit;
  var greeting = tempcelcius + " * (9/5) + 32 = " + tempfahrenheit;
  document.getElementById("methodField").value = tempfahrenheit.innerHTML = greeting;
} 
function reverse()
{
  var tempfahrenheit = document.getElementById("inputField").value;
  var tempcelcius = (tempfahrenheit - 32) * (5 / 9 );
  document.getElementById("outputField").value = tempcelcius;
  var greeting = tempfahrenheit + " - 32 * (9/5) = " + tempcelcius;
  document.getElementById("methodField").value = tempcelcius.innerHTML = greeting;
}
function clearResult()
{
document.getElementById("inputField").value =''
document.getElementById("outputField").value =''
document.getElementById("methodField").value =''
}
