//code for timer

// Update the count down every 1 second
var distance = 7200000;
var fixed=new Date().getTime();
fixed+=distance;
var x = setInterval(function() {

  //Test time in milliseconds
  distance=fixed-(new Date().getTime());

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = "Time remaining:<br/>"+hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

//end of code for timer

//code for counter;
var counter=1;
var marked=[];
var submitted=[];
var visited=[];
for(var i=0;i<60;i++)
{
	marked.push(0);
	submitted.push(0);
	visited.push(0);
}
//changes the background color of marked question boxes in the grid
function setVisited(num)
{
	if(!visited[num-1])
	document.getElementById(""+num).style.backgroundColor="lightgray";
	visited[num-1]=1;
	for(var i=1;i<=60;i++)
	{
		document.getElementById(""+i).style.textDecoration="none";
	}
	document.getElementById(""+num).style.textDecoration="underline";
}
//valfunc: sets value of counter to the value that the user clicks on
function valfunc(num)
{
	counter=num;
	setVisited(num);
	//enter your question here
	var question="question";
	//options
	var option1="option1";
	var option2="option2";
	var option3="option3";
	var option4="option4";
	var rightans="3";
	switch(num)
	{
		case 1:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 2:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 3:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 4:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 5:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 6:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 7:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 8:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 9:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 10:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 11:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 12:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 13:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 14:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 15:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 16:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 17:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 18:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 19:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 20:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 21:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 22:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 23:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 24:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 25:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 26:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 27:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 28:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 29:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 30:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 31:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 32:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 33:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 34:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 35:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 36:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 37:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 38:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 39:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 40:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 41:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 42:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 43:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 44:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 45:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 46:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 47:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 48:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 49:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 50:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 51:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 52:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 53:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 54:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 55:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 56:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 57:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 58:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 59:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		case 60:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
		default:
		question="question";
		option1="option1";
		option2="option2";
		option3="option3";
		option4="option4";rightans="3";
		break;
	}
	document.getElementById("questionrow").innerHTML="<p>Q"+num+". "+question+"<form class='form-horizontal'><div class='radio'><ul class='list-unstyled'><li><label><input type='radio' name='question'>"+option1+"</input></label></li><li><label><input type='radio' name='question'>"+option2+"</input></label></li><li><label><input type='radio' name='question'>"+option3+"</input></label></li><li><label><input type='radio' name='question'>"+option4+"</input></label></li></div></form> </p>";
}
//when submit button is clicked
function submitgreen()
{
	submitted[counter-1]=1;
	var clr="lightgreen";
	if(marked[counter-1]==1)
	{
		clr="lightblue";
	}
	document.getElementById(""+counter).style.backgroundColor=clr;
}
//when mark button is clicked
function markpurple()
{
	marked[counter-1]=1;
	var clr="pink";
	if(submitted[counter-1])
	{
		clr="lightblue";
	}
	document.getElementById(""+counter).style.backgroundColor=clr;
}
//when unmark button is clicked
function unmark()
{
	marked[counter-1]=0;
	if(submitted[counter-1])
	{
		submitgreen(counter);
	}
	else
	{
		document.getElementById(""+counter).style.backgroundColor="lightgray";
	}
}
//when undo button is clicked
function undo()
{
	submitted[counter-1]=0;
	if(marked[counter-1])
	{
		document.getElementById(""+counter).style.backgroundColor="pink";
	}
	else
	{
		document.getElementById(""+counter).style.backgroundColor="lightgray";
	}
}