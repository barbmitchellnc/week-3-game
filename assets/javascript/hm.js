//javascript
var $= function(id){
	return document.getElementById(id);
}
//declare my array and generate my random number
var game=["daenerys","jonsnow","bran","tywin"]
var choice=Math.floor(Math.random()*4);
var answer = game[choice];
var mylength =answer.length;
var display=[mylength];
var win=mylength;
var letters =answer.split("");
var guessesleft=9;
var output="";
var playerletter="";

//setup function to get my blank lines

var setup = function()
{ 
for(var i=0; i<answer.length;i++)
{
display[i]="_";
output=output+display[i];
}
document.getElementById("game").innerHTML=output;
output="";
}
var submit=function()
{
	output="";
	playerletter=$("letter").value;
	$("letter").value="";

	for (var c=0; c<answer.length;c++)
	{
		if(playerletter.toUpperCase()==letter[c])
			win--;
	}
	output=output+display[c]+"";

}
document.getElementById("game").innerHTML=output;
output="";
guessesleft--;

if (win<1)
{
	document.getElementById("guesses").innerHTML="You are a true fan!! You got it!";
}
else if (guessesleft<1)
{
	document.getElementById("guesses").innerHTML="Watch more Episodes - you will get it next time.";

}
else
{
	document.getElementById("guesses").innerHTML="You have"+guessesleft+"guesses left."

}
}
window.onload=function()
{
	setup();
	$("submit").onclick=submit;
	
}