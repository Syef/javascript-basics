import readline from 'readline-sync';

const TRAFFIC_LIGHTS = [
    'Red',     //0
    'Green',    //1
    'Yellow'    //2
]

const userColorIndex =
readline.keyInSelect(TRAFFIC_LIGHTS);
/*
[1] Red       0
[2] Green     1
[3] Yellow    2
[0] cancel    -1
*/
const userSelectedLight =
TRAFFIC_LIGHTS[userColorIndex];
console.log(`User Selected Traffic Light
= ${userSelectedLight}`);

const RED_InDEX = 0;
const GREEN_InDEX = 1;
const YELLOW_InDEX = 2;

switch(userColorIndex) {

    case RED_INDEX:
        console.log("STOP....");
        break;

        case GREEN_INDEX:
        console.log("GO....");
        break;

        case YELLOW_INDEX:
        console.log("MOVE SLOW....");
        break;

        default:
            console.log("UNKNOWN LIGHT...")

}

/**
 
switch(value) {

    case 'ABC':
        console.log('value is ABC');
        break;

        case 'XYZ':
        console.log('value is XYZ');
        break;

        case 'ABC':
        console.log('Unidentified value...')
        break;

        if(value==='ABC') {
            console.log('value is ABC');
        } else if (Value === 'XYZ); {
           console.log('Value of XYZ'); 
        }else {
            console.log('Unidentified Value...')
        }

        */

         /*
         if (ColorIndex ===GREEN) {
            console.log(chalk.bgGreen ('GO'))
         } else if (colorIndex ===RED){
            console.log(chalk.bgRed('STOP))
         } else if (colorIndex ===YELLOW) {

            console.log(chalk.bgYellowBright('Move Slow...'))
         }
         */
