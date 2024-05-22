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



// 

// function fullView(imgLink){
//     document.getElementById('full_img').src = imgLink;
//     document.getElementById('full').style.display = 'block';
// }

// function closeIMG(){
//     document.getElementById('full').style.display = 'none';
// }