
let bubble = document.querySelector(".elem2");
//console.log(bubble);
let timer = 60 ;
let time = document.querySelector("#timerval");
let hit = document.querySelector("#hitval");
let num = 0 ;
let scoreBoard = document.querySelector("#Scoreval");
let score = 0;


//bubble create
function bubbleCreate(){
  let clutter = "";
    for (let i=0 ; i<=151; i++){
      let num = Math.floor(Math.random()*10);
        clutter += ` <div id ="bubb" class="bubble"> ${num} </div> `;
        bubble.innerHTML = clutter;
}
}

//timer
function runTime(){
    let timeInt = setInterval(function(){
      if(timer >= 0){
        time.textContent= timer;
        timer-- ;
      }else{
        clearInterval(timeInt);
        bubble.innerHTML = `<h1> Game Over! <a href="index.html" class="playbtn">Play Again <a> </h1>`;
        hit.innerHTML = "" ;
        score = 0 ;
        scoreBoard.textContent = score;
      }
    },1000)
   
  }

//hitting bubble
function hitBubble(){
    num = Math.floor(Math.random()*10);
    hit.innerHTML = num ;
}

//score
function scoreCount(){
    score += 10;
    scoreBoard.textContent = score;
    console.log(score);
}
//event
  bubble.addEventListener("click", (bubb)=>{
        console.log("click");
        console.log(bubb.target.textContent);
        let value = Number(bubb.target.textContent);
        if( value === num){
            console.log("true");
            scoreCount();
            bubbleCreate();
            hitBubble();
           }
    });

    bubbleCreate();
    runTime();
    hitBubble();

    //scroll reveal
        
      ScrollReveal({ 
        reset: true,
        distance: '100px',
        duration: 1000,
        delay: 10
      });

      ScrollReveal().reveal('.container',{ origin: 'left' });
