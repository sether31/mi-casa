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


// show
const sound2 = document.querySelector('.sound2');
const sound__system = document.querySelector('.sound__system');

function lol(){
    click.play();
    sound2.style.display = 'block';
    sound__system.style.display = 'block';
}



// 

const happy = document.querySelector('.happy');
const mood = document.querySelector('.mood');
const energy = document.querySelector('.energy');

happy.addEventListener('click', ()=>{
    click2.play();
    
    let check = prompt('are you okay?(y/n)');

    if(check.toLowerCase() == 'y'){
        let sure = prompt('are you sure?(y/n)');
        if(sure.toLowerCase() == 'y'){
            confirm('good to know, iloveyouuu:))')
        } else if(sure.toLowerCase() == 'n'){
            confirm('dont be sad na mahal kooo, listen to my voice and read my letters to make you feel lil better okay? iloveyouuu');
        }else{
            alert('error/unknown input or maybe ayaw mo lang sagutin:<');
        }
    } else if(check.toLowerCase() == 'n'){
        confirm('dont be sad na mahal kooo, listen to my voice and read my letters to make you feel lil better okay? iloveyouuu');
    } else{
        alert('error/unknown input');
    }
});

mood.addEventListener('click', ()=>{
    click2.play();
    
    let check = prompt('nasa mood baby ko hm?(y/n)');

    if(check.toLowerCase() == 'y'){
        confirm('relax ka lang po okay? i love youuu, always:)');
    } else if(check.toLowerCase() == 'n'){
        confirm('still relax ka lang po okay? i love youuu, always:)');
    } else{
        alert('error/unknown input');
    }
});


energy.addEventListener('click', ()=>{
    click2.play();
    
    let check = prompt('pagod yana ko hm?(y/n)');

    if(check.toLowerCase() == 'y'){
        confirm('take it easy mahal ko. magpahinga ka po muna at mag relax relax po okay? mahal na mahal kita:)');
    } else if(check.toLowerCase() == 'n'){
        confirm('still take a rest okay? mahal na mahal kita:)');
    } else{
        alert('error/unknown input');
    }
});



// letter

const letter_pop = document.getElementById('letter__pop');
let letter_h1 = document.getElementById('letter_h1');
let letter_p = document.getElementById('letter_p');

function hide(){
    letter_pop.style.display = 'none';
}

// start

function miss(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = 'OPEN WHEN YOU MISS ME';
    letter_p.innerHTML = "You miss me baby hm? miss na miss na din kita asawa ko. mag kikita din tayo mahal ko okay?";
}

function tired(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = 'OPEN WHEN YOU ARE TIRED';
    letter_p.innerHTML = "Need my hug so much hm? come here baby kita. take it easy mahal ko i know you're studying so hard, or meron kang problema sa bahay or ako mismo problema mo, but no matter what happens ako palagi mong kakampi mahal ko okay? open up always. you're a strong and independent woman that i know but it's not bad to ask for my shoulder sometimes. you can lean on me mahal, my arms are always open when it comes to you:)";
}


function overwhelmed(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = 'OPEN WHEN YOU FEEL OVERWHELMED';
    letter_p.innerHTML = "Take a rest loveee, and meditate for a minute. i know it's uncomfortable feeling, but i believe in you. you can do it i know but sometimes you push yourself so much. im always here mahal ko, don't be hard on yourself love, you are doing well:)";
}

function pretty(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU DON'T FEEL PRETTY";
    letter_p.innerHTML = "NO. stop it. You are the most gorgeous woman in the whole world, and I love every inch of you. I love your smile, and I love it more whenever it lets out your beautiful laugh, and your eyes are so mesmerizing as they shine so brightly enough to make my heart melt faster and make me weak.";
}

function stress(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU'RE STRESSED";
    letter_p.innerHTML = "Don't be hard on yourself, drink a glass of water and take it easy. i might say this all the time but i just want you to be relax for a bit. i know oldest child ka but that doesn't mean karga mo na mundo, don't be hard on yourself yana ko. don't forget to take care yourself din:)";
}

function lonely(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU FEEL LONELY";
    letter_p.innerHTML = "I love you. i know you're feeling sad and lonely. i know it's hard na madalas tayo busy tipong may araw na saglit na lang tayo kung mag usap to the point na you can't even feel me. but i want you to remember that even tho im not physically present. i always think of me and want to be with you. i made this website just for you to go back to whenever you feel sad, smile na baby ko, sayo lang uuwi palagi:)";
}

function kiss(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU MISS MY KISSES";
    letter_p.innerHTML = "mwa, mwa mwa<33 and lots of lots of lots of kisses para sa baby yana ko nayan, i love you so much:))";
}

function mad(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU ARE MAD AT ME";
    letter_p.innerHTML = "sorry po, i know sometimes nakikisabay pa ako at sakit sa ulo mo minsan, but always remember na mahal na mahal kita kahit anoncaway pa natin ikaw lang palagi kong pipiliin at uuwian. awayin mo lang po ako i deserve it for sure */dies ikaw lang palagi mahal ko:)";
}

function hurt(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU WANT TO HURT YOURSELF";
    letter_p.innerHTML = "Don't do it. just relax mahal, everything will be okay. don't harm yourself, you know i hate it and I don't want you to get hurt as before as much as i can. i care a lot about you even when the times na nag aaway tayo ikaw padin palagi kong inaalala. please don't do anything, just talk to me okay? we can talk all things out, mahal na mahal kita:)";
}

function anxiety(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU ARE HAVING ANXIETY AND CAN'T SLEEP";
    letter_p.innerHTML = "Take deep breaths mahal ko, till you feel a little better and don't thinking too much mahal ko, play my voices in voice section to calm you a little bit, i love you so much";
}

function overthinking(){
    letter_pop.style.display = 'flex';

    letter_h1.innerHTML = "OPEN WHEN YOU WANT TO HURT YOURSELF";
    letter_p.innerHTML = "If you're thinking I don't love and want you anymore you should wake up na dahil you are only having a bad dream, kasi simulat sapul sayo lang ako:) chos landi but true im all yours loveee don't think too much pooo. there will be a times na you will question my love but i hope hindi ka mag sawa sa sagot ko dahil ikaw at ikaw lang palagi pipiliin ko kahit sino payang babae iniisip mo o kung ano pa man yan:)";
}



// sound
const lomls = new Audio("../assets/SOUND/player/loml.wav");
const misss = new Audio("../assets/SOUND/player/missu.wav");
const rantss = new Audio("../assets/SOUND/player/rantss.wav");
const gandaa = new Audio("../assets/SOUND/player/ganda.wav");
const sweets = new Audio("../assets/SOUND/player/my-cutie-sweet-baby.wav");
const hydratedd = new Audio("../assets/SOUND/player/stay-hydrated.wav");
const easyy = new Audio("../assets/SOUND/player/take-it-easy.wav");
const gggs = new Audio("../assets/SOUND/player/ggg.wav");
const howss = new Audio("../assets/SOUND/player/hows-my-baby.wav");
const pagods = new Audio("../assets/SOUND/player/pagod.wav");
const yana = new Audio("../assets/SOUND/player/yana.wav");

function loml(){
    lomls.play();
}

function missnmiss(){
    misss.play();    
}

function rants(){
    rantss.play();
}

function gandasobra(){
    gandaa.play();
}

function sweet(){
    sweets.play();
}

function hydrated(){
    hydratedd.play();
}

function easy(){
    easyy.play();
}

function ggg(){
    gggs.play();
}

function hows(){
    howss.play();
}

function pagod(){
    pagods.play();
}

function mahalnmahal(){
    yana.play();
}