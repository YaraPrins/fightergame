/*  2 Karakters, Held & Monster

    Held:   100HP (100 Hit Points) | AC16 (Armor Class 16)
    Monster: 100HP (100 Hit Points) | AC16 (Armor Class 16)

    Opties:
    Attack  (-> random getal tussen 1 en 20, als >= AC -> dan hit. 
            Als hit, random getal 1 - 10 damage.
            Als random getal = 20, critical hit: 2x 1-10 damage.)
    Heal    (random getal tussen 1 - 10 healing)

    Als held < 1 HP, verlies je.
    Als monster < 1 HP, win je.
*/

/*  Een lijst van alle variabelen die ik gebruik in dit script. 
    De bovenste 6 variabelen zijn alleen benoemd, omdat deze pas een waarde krijgen in de functies.
    De overige 12 variabelen hebben de waarden gekregen van het desbetreffende HTML tag. */

var rollToHitHeld;
var rollToHitMonster;
var rollDamage;
var criticalDamage;
var totalDamage;
var healHeldHP;
var attackHeld = document.querySelector("#attackHeld");
var healHeld = document.querySelector("#healHeld");
var pMonster20 = document.querySelector(".d20Monster");
var pMonster10 = document.querySelector(".d10Monster");
var pHeld20 = document.querySelector(".d20Held");
var pHeld10 = document.querySelector(".d10Held");
var img20Held = document.querySelector(".rolled20Held");
var img20Monster = document.querySelector(".rolled20Monster");
var img10Held = document.querySelector(".rolled10Held");
var img10Monster = document.querySelector(".rolled10Monster");
var imgCriticalHeld = document.querySelector(".critical10Held");
var imgCriticalMonster = document.querySelector(".critical10Monster");
var resetButtonLost = document.querySelector(".lostPlayAgain");
var resetButtonWon = document.querySelector(".wonPlayAgain");
var d10 = ["./img/d10/d10-1.png", "./img/d10/d10-2.png", "./img/d10/d10-3.png", "./img/d10/d10-4.png", "./img/d10/d10-5.png", "./img/d10/d10-6.png", "./img/d10/d10-7.png", "./img/d10/d10-8.png", "./img/d10/d10-9.png", "./img/d10/d10-10.png"];
var d20 = ["./img/d20/d20-1.png", "./img/d20/d20-2.png", "./img/d20/d20-3.png", "./img/d20/d20-4.png", "./img/d20/d20-5.png", "./img/d20/d20-6.png", "./img/d20/d20-7.png", "./img/d20/d20-8.png", "./img/d20/d20-9.png", "./img/d20/d20-10.png", "./img/d20/d20-11.png", "./img/d20/d20-12.png", "./img/d20/d20-13.png", "./img/d20/d20-14.png", "./img/d20/d20-15.png", "./img/d20/d20-16.png", "./img/d20/d20-17.png", "./img/d20/d20-18.png", "./img/d20/d20-19.png", "./img/d20/d20-20.png"];
var hpHeld = document.querySelector("#hpHeld");
var hpMonster = document.querySelector("#hpMonster");


//  HELD
function attackButton() {
    //Hero Attack
    rollToHitHeld = Math.random()*20;
    rollToHitHeld = Math.ceil(rollToHitHeld);

    // Wanneer rollToHitHeld tussen de 16 en 19 is, zal dit gedeelte van de functie uitgevoerd worden.
    if(rollToHitHeld >= 16 && rollToHitHeld <= 19){
    pHeld20.textContent = "HIT! Hero rolled a" + " " + rollToHitHeld + " " + "to hit";
    rollDamage = Math.random() * 10;
    rollDamage = Math.ceil(rollDamage);
    pHeld10.textContent = "They did" + " " + rollDamage + " " + "Damage";
    img20Held.src = d20[rollToHitHeld - 1];
    img10Held.src = d10[rollDamage - 1];
    imgCriticalHeld.src = " ";
    hpMonster.value = hpMonster.value - rollDamage;
    }

    // Wanneer rollToHitHeld een 20 is, zal dit gedeelte van de functie uitgevoerd worden.
    //Bij een 20 (een critical hit), wordt er een extra dobbelsteen gerold voor damage
    else if (rollToHitHeld === 20) {
        pHeld20.textContent = "CRITICAL! Hero rolled a" + " " + rollToHitHeld + " " + "to hit"; 
        rollDamage = Math.random() * 10;
        rollDamage = Math.ceil(rollDamage);
        criticalDamage = Math.random() * 10;
        criticalDamage = Math.ceil(criticalDamage);
        totalDamage = criticalDamage + rollDamage;
        pHeld10.textContent = "They did" + " " + totalDamage + " " + "Damage";
        img20Held.src = d20[rollToHitHeld - 1];
        img10Held.src = d10[rollDamage - 1];
        imgCriticalHeld.src = d10[criticalDamage - 1]; 
        hpMonster.value = hpMonster.value - rollDamage; 
    }

    // Wanneer rollToHitHeld tussen de 1 en 15 is, zal dit gedeelte van de functie uitgevoerd worden.
    //Hero Missed
    else if (rollToHitHeld >= 1 && rollToHitHeld <= 15){
        pHeld20.textContent = "Hero MISSED! They rolled a" + " " + rollToHitHeld;
        pHeld10.textContent = " ";
        img20Held.src = d20[rollToHitHeld - 1];
        img10Held.src = " ";
        imgCriticalHeld.src = " ";
        
    }

    //  MONSTER
    setTimeout(function attackMonster() {
        //Monster Attack
        rollToHitMonster = Math.random()*20;
        rollToHitMonster = Math.ceil(rollToHitMonster);
        
        // Wanneer rollToHitHeld tussen de 16 en 19 is, zal dit gedeelte van de functie uitgevoerd worden.
        if ((rollToHitMonster >= 16) && (rollToHitMonster < 20)) {
            pMonster20.textContent = "HIT! Monster rolled a" + " " + rollToHitMonster + " " + "to hit"; 
            rollDamage = Math.random()*10;
            rollDamage = Math.ceil(rollDamage);
            pMonster10.textContent = "They did" + " " + rollDamage + " " + "Damage";
            img20Monster.src = d20[rollToHitMonster - 1];
            img10Monster.src = d10[rollDamage - 1];
            imgCriticalMonster.src = " ";
            hpHeld.value = hpHeld.value - rollDamage;
        }

        // Wanneer rollToHitHeld een 20 is, zal dit gedeelte van de functie uitgevoerd worden.
        //Bij een 20 (een critical hit), wordt er een extra dobbelsteen gerold voor damage
        else if (rollToHitMonster === 20) {
            pMonster20.textContent = "CRITICAL! Monster rolled a" + " " + rollToHitMonster + " " + "to hit"; 
            rollDamage = Math.random() * 10;
            rollDamage = Math.ceil(rollDamage);
            criticalDamage = Math.random() * 10;
            criticalDamage = Math.ceil(criticalDamage);
            totalDamage = criticalDamage + rollDamage;
            pMonster10.textContent = "They did" + " " + totalDamage + " " + "Damage";
            img20Monster.src = d20[rollToHitMonster - 1];
            img10Monster.src = d10[rollDamage - 1];
            imgCriticalMonster.src = d10[criticalDamage - 1];
            hpHeld.value = hpHeld.value - rollDamage; 
        }

        // Wanneer rollToHitHeld tussen de 1 en 15 is, zal dit gedeelte van de functie uitgevoerd worden.
        //Monster Missed
        else {
            pMonster20.textContent = "Monster MISSED! They rolled a" + " " + rollToHitMonster;
            pMonster10.textContent = " ";
            img20Monster.src = d20[rollToHitMonster - 1];
            img10Monster.src = " ";
            imgCriticalMonster.src = " ";
        }
    }, 1000);
    losscheck();
}

//Held kan op de Heal knop drukken, en zal tussen 1-10 HP (levenspunten) helen, hierbij zullen de afbeeldingen en teksten van de aanvallen verdwijnen.
function healButton() {
    healHeldHP = Math.random()*10;
    healHeldHP = Math.ceil(healHeldHP);
    hpHeld.value = hpHeld.value + healHeldHP;
    pHeld10.textContent = "Hero healed themselves! They healed" + " " + healHeldHP + " " + "HP";
    img10Held.src = d10[healHeldHp - 1];
    img20Held.src = " ";
    img20Monster.src = " ";
    img10Monster.src = " ";
    imgCriticalHeld.src = " ";
    imgCriticalMonster.src = " ";
    pHeld20.textContent = " ";
    pMonster20.textContent = " ";
    pMonster10.textContent = " ";
    losscheck();
}


function losscheck(){
if (hpMonster.value < 1 ) {
    document.querySelector(".youWon").style.visibility = "visible";
    }
else {
    document.querySelector(".youWon").style.visibility = "hidden";
}

if (hpHeld.value < 1 ) {
    document.querySelector(".youLost").style.visibility = "visible";
}
else {
    document.querySelector(".youLost").style.visibility = "hidden";
}
}


//Deze function zorgt ervoor dat wanneer die aangeroepen wordt, de pagina refresht wordt door de 0 in de haken.
function resetGame () {
    window.history.go(0);
}

// Wanneer er geklikt wordt op de Attack knop, zal de function van attackButton en dan indirect attackMonster uitgevoerd worden.
// Wanneer er geklikt wordt op de Heal knop, zal de function van healButton uitgevoerd worden
attackHeld.addEventListener("click", attackButton);
healHeld.addEventListener("click", healButton);


//Wanneer er geklikt wordt op de Play Again knop, zal de function van resetGame uitgevoerd worden en zal de pagina refreshen door middel van window.history.go(0).
resetButtonLost.addEventListener("click", resetGame);
resetButtonWon.addEventListener("click", resetGame);


/* setTimeout heb ik gebruikt omdat ik wilde dat wanneer mijn held een aanval deed (wanneer er op de Attack button werd gedrukt),
er een eventjes later ook een aanval werd gedaan van het Monster op mijn Held. Na wat onderzoek gedaan te hebben ben ik uiteindelijk
op setTimeout gekomen, en heb ik deze gekozen i.p.v. een setInterval vanwege dat ik de functie maar één keer wil laten lopen wanneer de functie 
van attackButton wordt gecallt, in plaats van iedere paar seconden herhalend.

De bronnen die ik voor setTimeout heb gebruikt zijn:
https://www.w3schools.com/js/js_timing.asp
https://www.w3schools.com/jsref/met_win_settimeout.asp
En
https://medium.com/@monica1109/scheduling-settimeout-and-setinterval-ca2ee50cd99f#:~:text=The%20only%20difference%20is%20%2C,should%20call%20clearInterval(timerId)%20.

Aan de hand van deze bronnen, en door zelf na te denken over hoe ik deze setTimeout methode zou kunnen toepassen, ben ik aan de slag gegaan 
en is het me uiteindelijk gelukt om wat ik wilde aan de praat te krijgen. 
Het was eigenlijk vrij simpel toen ik eenmaal naar de voorbeelden van mijn gebruikte bronnen keek (met name de tweede genoemde bron), en met zelf logisch nadenken. 

Met de hulp van mijn studentassistent Joris Meester, heb ik een afbeelding aan Math.random kunnen toevoegen en is mijn code een stuk overzichtelijker geworden. */