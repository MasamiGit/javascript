function num01()
{
	alert("Hello");
}
var e = document.getElementsByClassName('num01');
e[0].addEventListener("click",num01,false);

function test1()
{
	var result = test2(20,40);
	document.write(result);
}
function test2(x,y)
{
	var result = x + y;
	return result;
}