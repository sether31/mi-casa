// SOUNDS
const pop = new Audio("../assets/SOUND/pop.wav");
const click = new Audio("../assets/SOUND/click.wav");
const click2 = new Audio("../assets/SOUND/click-2.wav");
const click_deep = new Audio("../assets/SOUND/click-deep.wav");
const flowers = new Audio("../assets/SOUND/colorful-flowers.wav");
const taylor = new Audio("../assets/SOUND/sas.wav");
const melody = new Audio("../assets/SOUND/melody.wav");


function theme(){
    // logic idk
    let ask = confirm("Do you want to play a background music?");

    if(ask == true){
        
        while(true){
            let choose = prompt('Enter the number: 1. Colorful flowers, 2. Safe & sound, 3. Melody of nature', '1');
            if(choose == '1'){
                taylor.pause();
                melody.pause();
                flowers.play();
                break;
            } else if(choose == '2'){
                melody.pause();
                flowers.pause();
                taylor.play();
                break;
            } else if(choose == '3'){
                flowers.pause();
                taylor.pause();
                melody.play();
                break;
            } else{
                alert('error/wrong input');
            }
        }
    }else{
        alert('okay boss');
    }
}


const letter_pop = document.getElementById('desc');
let letter_h1 = document.getElementById('letter_h1');
let letter_p = document.getElementById('letter_p');

function hide(){
    letter_pop.style.display = 'none';
}

// start

function seth(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = 'SETH A.K.A SM';
    letter_p.innerHTML = "loves yana so much. love to stare at her so much and tease her:)";
}

function yana(){
  letter_pop.style.display = 'flex';

  letter_h1.innerHTML = 'JULLIAN A.K.A YANA';
  letter_p.innerHTML = "She's the most gorgeous and sexiest woman in the whole milky galaxy. She loves make-up and skincare products. Her favorite brands are grwm, issy, belo and ysl, and all of the luxury brands as long as they're shiny and long-lasting, and lastly, the most important thing is that they should be FDA-approved. She loves to eat vagetables like me, and she loves to watch romance movies, while i prefer watching her all the time. She's awesome, caring, lovely, romantic, funny, and sweet. My one and only lovely Yana:)";
}


// 


var graph = document.querySelector("#graph");

CustomEase.create("heartBeat", graph.getAttribute("d"));

tweenShape("#line", "#graph");
tweenShape("#heart", "#heartShape");
tweenShape("#sheen", "#sheenShape");

function tweenShape(element, target) {
  TweenMax.to(element, .9, {
    morphSVG: target,
    ease: "heartBeat",
    repeat: -1
  });
}