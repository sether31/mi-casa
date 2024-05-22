// SOUNDS
const pop = new Audio("./assets/SOUND/pop.wav");
const click = new Audio("./assets/SOUND/click.wav");
const click2 = new Audio("./assets/SOUND/click-2.wav");
const click_deep = new Audio("./assets/SOUND/click-deep.wav");
const flowers = new Audio("./assets/SOUND/colorful-flowers.wav");
const taylor = new Audio("./assets/SOUND/sas.wav");
const melody = new Audio("./assets/SOUND/melody.wav");


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


// 

const banner = document.querySelector('.banner');
const sec__two = document.querySelector('.sec__two');

// design
let tulip1 = document.querySelector('#tulip1');
let tulip2 = document.querySelector('#tulip2');
let target = document.querySelector('#target');

function go(){
    click.play();
    banner.style.display = 'none';
    target.style.visibility = 'visible';
    target.style.top = '50%';
}


target.addEventListener('click', () =>{
    
    target.style.filter = 'none';
    click_deep.play();
    tulip1.style.visibility = 'visible';
    tulip2.style.visibility = 'visible';
    tulip1.style.bottom = '-50px';
    tulip2.style.bottom = '-50px';

    sec__two.display = 'block';

    /*
    let name = prompt('who are you?', 'y----');

    if(name.toLocaleLowerCase() == 'yana'){
        tulip1.style.visibility = 'visible';
        tulip2.style.visibility = 'visible';
        tulip1.style.bottom = '-50px';
        tulip2.style.bottom = '-50px';

        ribbon.style.visibility = 'visible';
        heart.style.visibility = 'visible';
    }
    else{
        alert('idk you.')
    }
    */
});



