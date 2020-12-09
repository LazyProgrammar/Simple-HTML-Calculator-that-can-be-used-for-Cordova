function dis(val)
{
document.getElementById("edu").value+=val
 }
function solve()
{
var x = document.getElementById("edu").value
var y = eval(x)
document.getElementById("edu").value = y
}
function clr()
{
document.getElementById("edu").value = ""
}