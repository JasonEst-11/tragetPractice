let points = 0;
let gamestate = false;
let interval ;
function point(){
    if(gamestate){
        points++;
        document.getElementById("pointcount").innerHTML = "Points: "+points;
        changeP();
    }else{
        alert("Press the start button to play");
    }
}
function changeP(){
    const target = document.getElementById("target");    
    target.style.left = Math.floor(Math.random()*600)+"px";
    target.style.top = Math.floor(Math.random()*600)+"px"; 
}

function start(){
    gamestate = true;
    changeP();
    interval = window.setInterval(timer,1000); 
    document.querySelector("button").disabled = true;
}

function timer(){
    document.getElementById("timer").innerHTML -= 1;
    if(document.getElementById("timer").innerHTML == 0){
        alert("Time is up final score : "+points);
        clearInterval(interval);
        gamestate = false;
        document.getElementById("timer").innerHTML = 30;
        document.getElementById("pointcount").innerHTML = "Points: 0";
        document.querySelector("button").disabled = false;
    } 
}
