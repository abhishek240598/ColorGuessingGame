						// IF YOUR CODE IS MORE THEN 10 LINES SPLIT IT INTO OWN FUNCTION
var numSquares=6;                                    //To keep track which mode we are in
var colors=[];                     //before make it proper i was calling gereraterandomcolor function
var squares=document.querySelectorAll(".square");
var colorPicker;                             //calling pickcolor function      // color that we have to guess
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#resetButton");
var modeButtons=document.querySelectorAll(".mode");
// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;                       
// 	colors=generateRandomColor(numSquares);           //generate color
// 	colorPicker=pickColor();						  //pick random guessing color
// 	colorDisplay.textContent=colorPicker;			  //display color message
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}else{
// 			squares[i].style.display="none";          //to make last three color display
// 		}
// 	}h1.style.background="steelblue";
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;                       
// 	colors=generateRandomColor(numSquares);           //generate color
// 	colorPicker=pickColor();						  //pick random guessing color
// 	colorDisplay.textContent=colorPicker;			  //display color message
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.background=colors[i];
// 		squares[i].style.display="block";        	  //make that color back
// 	}h1.style.background="steelblue";
// });

init();

reset.addEventListener("click",function(){
	rest();
});

//colorDisplay.textContent=colorPicker;    //done in rest function                      

function init(){
	setupModeButton();
	setupSquares();
	rest();
}

function setupModeButton(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
	    	modeButtons[0].classList.remove("selected");
	    	modeButtons[1].classList.remove("selected");                   //we have to remove select from both bcs we don't know which button will first
	    	this.classList.add("selected");								   //add class selected to selected button
	    	this.textContent==="Easy"?numSquares=3:numSquares=6;
	    	rest();
		});
	}	
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
		//squares[i].style.background=colors[i];    already in reset            //assign initial colors in array to our squares\
		// add eventListener to each square
		squares[i].addEventListener("click",function(){
		// grab color of picked square
			var clickedColor=this.style.background;
			// matching with picked color
			if(clickedColor === colorPicker){
				messageDisplay.textContent="Correct!!!";      //check if clicked color equals to guess color
				changeColor(clickedColor);
				h1.style.background=clickedColor;
				reset.textContent="Play Again?"
			}else{
				this.style.background="#232323";
				messageDisplay.textContent="Try Again!";
			}
		});
	}

}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
    //make an array
    var arr=[];
    //iterate loop num times
    for(var i=0;i<num;i++){
    // call random color function and push it to array
     	arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g=Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";                  // Here space after comma is necessary DOM create space 
}

function rest(){
	colors=generateRandomColor(numSquares);
	//pick random color
	colorPicker=pickColor();
	// Change colorDisplay
	colorDisplay.textContent=colorPicker;				//display of guessing color
	messageDisplay.textContent="";  
	reset.textContent="New Colors";
	//change color of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	//change h1 background to normal
	h1.style.background="steelblue";
}
