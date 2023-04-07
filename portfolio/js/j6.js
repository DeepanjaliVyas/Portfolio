//if we click on the start/rest
var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;
document.getElementById("startreset").onclick=function(){
     //if we are playing
    if(playing==true){
        //reload page
        location.reload();
    }//if we are not playing
    else{
        //change mode to playing
        playing=true;
        //set score to 0
         score=0;
     document.getElementById("scorevalue").innerHTML=score;
     //show countdown box
      show("timeremaining");
      //reduce time by 1 sec in loops
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        //hide gameover box
        hide("gameOver");
        //startcountdown
             startCountdown();
             //change button to reset
             document.getElementById("startreset").innerHTML="Reset Game";
               //generate new Q&A
               generateQA();

    }
}
//if we click on answer box
 for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick=function(){
         // if are playing
        if(playing==true){
            if(this.innerHTML==correctanswer){
                 //increase score
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                //show correct box for 1 sec
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide(correct);
                },1000);
                generateQA();
            }else{
                // show try again box for 1 sec
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    }
 }
 
    function startCountdown(){
        action=setInterval(function(){
            timeremaining -=1;
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;
            if(timeremaining==0){
                stopcountdown();
                show("gameOver");
                document.getElementById("gameOver").innerHTML="<p>Game Over!!</p><p>your score is " +  score +"</p>";
            hide("timeremaining");
            hide("wrong");
            hide("correct");
            playing=false;
             document.getElementById("startreset").innerHTML="Start Game";
        }
        
        }, 1000);
    }
    function stopcountdown(){
        clearInterval(action);
    }
  function hide(Id){
    document.getElementById(Id).style.display="none";
  }
  function show(Id){
    document.getElementById(Id).style.display="block";
  }
    
  function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x+"*"+y;
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    var answer=[correctanswer];
    for(i=1; i<5; i++){
        if(i!==correctposition){
            var wronganswer;
            do{ wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
         }
            while(answer.indexOf(wronganswer)>-1);
            document.getElementById("box"+i).innerHTML=wronganswer;
                answer.push(wronganswer);
        }
    }
  }  
   
    
              