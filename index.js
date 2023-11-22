
let Timer = 60;
let hitBall = 0;
let inScore = 0;
function  createBubble(){
    let addMoreBubble = "";

    for(let i =0 ;i<147;i++){
              let randomNumber = Math.floor(Math.random()*10);

           addMoreBubble += `<div class="bubble">${randomNumber}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = addMoreBubble;
}

function gameTimer(){
  
 let ROkjaoTimer =    setInterval(() => {
        if(Timer>0){
            Timer--;

            document.querySelector("#timer").textContent = Timer
        }else{
            clearInterval(ROkjaoTimer)
        alert("YOur Game is Over")
         }
    }, 1000);
     
}

function HitBall(){
    hitBall = Math.floor(Math.random()*10);
      
          document.querySelector("#hitbubble").textContent = hitBall;
//  hitBall
}

function IncreaseScore(){
 inScore += 10;

 document.querySelector("#score").textContent = inScore
     
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let userHitBall = +dets.target.innerText;
    if(userHitBall == hitBall){
        IncreaseScore();
        HitBall();
        createBubble();

    }
})

// IncreaseScore()

HitBall()

gameTimer()
createBubble()