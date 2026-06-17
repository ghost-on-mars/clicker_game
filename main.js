let count = 0; //setup of variables and importing sounds
let level = 1;
let soundcount = 0;
var time = 30;//starts at 30 so it counts down
var click1 = new Audio('click1.mp3');
var click2 = new Audio('click2.mp3');
var click3 = new Audio('click3.mp3');
var click4 = new Audio('click4.mp3');
var levelup = new Audio('reallevelup.mp3');

function clicksounds() { //does this every time you click
    soundcount++; //the count goes up 1
    if (soundcount == 1){//if the count is at 1 plays sound 1
        click1.play();
    }
    if (soundcount == 2){//if the count is at 2 plays sound 2
        click2.play();
    }
    if (soundcount == 3){//3 and 4 work same as above
        click3.play();
    }
    if (soundcount == 4){
        click4.play();
        soundcount = 0;//once it reaches 4 it resets to 0 so it can continue cycling through
    }
}

function timesup (){ //once time is up
    document.getElementById("scoretext").innerHTML = `Final score: <br> ${count} clicks <br> Level ${level}`;//displays final score
    document.getElementById("scoretext").style.display = 'block'; //actually shows the final score

    document.getElementById("scoretext").style.marginLeft = 'auto';//positions it
    document.getElementById("scoretext").style.marginRight = 'auto';/*this is for centered*/
}

function add() {//this is every time one of the buttons are clicked

    clicksounds();//plays the sounds in the function above
    count++;//counts up by 1
    document.getElementById("clickcount").innerText = `Clicks: ${count}`;//replaces the counter

    if (count ==1){ //this is just so that the timer doesnt start with every click

            setInterval(function() { //does stuff every 1000 milliseconds (1 sec)
                time--;//the variable called time goes down by 1
                document.getElementById("timer").innerText = `${time} seconds remaining!`;//updates the timer text to say 
                
                setInterval(function() { //this is to do stuff after 30 seconds (30,000 milliseconds)
                    document.getElementById("timer").innerText = `Time is up!`;//changes text to say time is up
                    timesup()//does timesup
                    document.getElementById("star1").style.display = 'none';//hides all 3 of the stars
                    document.getElementById("star2").style.display = 'none';
                    document.getElementById("star3").style.display = 'none';

                    if (level < 9 && level > 4) {//if its between level 4-9 (aka the 5 pointed star) 
                        document.getElementById("uselessstar2").style.display = 'block';//it shows the non-clickable 5 pointed star
                        }
                    if (level < 5) {//if its under level 5 (aka the 4 pointed star)
                    document.getElementById("uselessstar").style.display = 'block';//it shows the non-clickable 4 pointed star
                    }
                    
                    if (level > 8) {//if its over level 8 
                        document.getElementById("uselessstar3").style.display = 'block';//it shows the non-clickable 6 pointed star
                        }

                    document.getElementById("uselessstar").style.marginLeft = 'auto';//this jsut makes all versions on the non-clickable star centered
                    document.getElementById("uselessstar").style.marginRight = 'auto';
                    document.getElementById("uselessstar").style.marginBottom = '17px';
                    document.getElementById("uselessstar2").style.marginLeft = 'auto';
                    document.getElementById("uselessstar2").style.marginRight = 'auto';
                    document.getElementById("uselessstar2").style.marginBottom = '17px';
                    document.getElementById("uselessstar3").style.marginLeft = 'auto';
                    document.getElementById("uselessstar3").style.marginRight = 'auto';
                    document.getElementById("uselessstar3").style.marginBottom = '17px';
                    
                    return; //stops this this from continuing so the timer wont go up again
                }, 30000);//the second half of set interval for 30 seconds
            
            }, 1000); //the second half of set interval for 1 second
    }

    if (count % 25  === 0){ //if the count is divisible by 25 
        levelup.play();//plays the level up sounds
        level++;//adds a level

        document.getElementById("level").innerText = `${level}`;//updates the text
        document.getElementById("level2").innerText = `${level}`;//updates the text for the second white level text
        changeStyle(level);//does the function changestyle based on what level its at
    }
}

function changeStyle(level) {
    let body = document.body;//the background colour

    switch(level) {
        case 1:
            body.style.backgroundColor = "#d5d4f9";
            break;
        case 2: //for each of these cases it just updates the bg colour
            body.style.backgroundColor = "#B7A5E9";
            break;
        case 3:
            body.style.backgroundColor = "#9876d8";
            break;
        case 4:
            body.style.backgroundColor = "#7970cc";
            break;
        case 5: //100 clicks//
            body.style.backgroundColor = "#5965bf";

            document.getElementById("writeHere").innerHTML = "100 clicks!"; //changes the text of writehere to say 100 clicks
            document.getElementById("writeHere").style.display = 'block';//shows it
            document.getElementById("writeHeretwo").innerHTML = "Keep going!";//changes the text of writehere to say keep going
            document.getElementById("writeHeretwo").style.display = 'block';//shows it
            document.getElementById("star1").style.display = 'none';//hides the 4 pointed star
            document.getElementById("star2").style.display = 'block';//shows star 2, aka switching it
            document.getElementById("star2").style.marginLeft = 'auto';//the next 3 are just aligning it properly
            document.getElementById("star2").style.marginRight = 'auto';
            document.getElementById("star2").style.marginBottom = '16.5px';

            break;
        case 6:
            body.style.backgroundColor = "#4f5ea8";
        
            document.getElementById("writeHere").style.display = 'none';//hides the text saying 100 clicks
            break;
        case 7:
            body.style.backgroundColor = "#343e7d";
            break;
        case 8: 
            body.style.backgroundColor = "#271a61";
            
            document.body.style.color = 'white';//changes text to white

            document.getElementById("leveltext").style.display = 'none';//hides the black level text
            document.getElementById("leveltext2").style.display = 'block';//shows the white level text
            break;  
        case 9: //200 clicks//
            body.style.backgroundColor = "#131038";

            document.getElementById("writeHere").innerHTML = "200 clicks!";//says 200 clicks
            document.getElementById("writeHere").style.display = 'block';//shows it again
            document.body.style.color = 'white';//making sure the text stays white
            
            document.getElementById("star2").style.display = 'none';//switching to star 3 by hiding star 2
            document.getElementById("star3").style.display = 'block';//then showing star 3
            document.getElementById("star3").style.marginLeft = 'auto';//and aligning it below
            document.getElementById("star3").style.marginRight = 'auto';
            document.getElementById("star3").style.marginBottom = '0px';
            document.getElementById("star3").style.paddingBottom = '0px';
            break;    
        case 10:
            body.style.backgroundColor = "#0e0c24";

            document.getElementById("writeHere").innerHTML = "Congratulations! You got to level 10!";//says it
            document.getElementById("writeHere").style.display = 'block';//shows it 
            document.getElementById("writeHeretwo").innerHTML = "How are you <br> even this good???";//changes the text of writehere 
            document.getElementById("writeHeretwo").style.display = 'block';//shows it
          
            document.body.style.color = 'white';
            break;  
        case 11:
            body.style.backgroundColor = "#090817";
            document.body.style.color = 'white';
            document.getElementById("writeHere").style.display = 'none';//hides the text saying level 10
            break;  
        case 12:
            body.style.backgroundColor = "#04040a";
            document.body.style.color = 'white';
            break;  
        case 13:
            body.style.backgroundColor = "black";
            document.body.style.color = 'white';
            document.getElementById("writeHere").innerHTML = "I only added up to 300 clicks because it's <br> got to be impossible to get this far right?";//says it
            document.getElementById("writeHere").style.display = 'block';//shows it 
            document.getElementById("writeHeretwo").innerHTML = "Congratulations on beating <br> it (or using an <br> autoclicker)";//changes the text of writehere 
            document.getElementById("writeHeretwo").style.display = 'block';//shows it
            document.getElementById("writeHeretwo").style.position = 'absolute'; //makes it so it can change the position
            document.getElementById("writeHeretwo").style.right = '-20px';//sets the position 

            break;  
        //default://the default colour
        //    body.style.backgroundColor = "#d5d4f9";
        //    break;
    } 
    
}
