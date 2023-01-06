import readline from readline-SpeechSynthesisVoice;
// Define the data from the application

const VEG = 'veg';
const NON_VEG = 'Non-Veg';
const DESERTS = 'Deserts';
const BEVERAGES = 'Beverages';
const LUNCH = 'Lunch'

const MENU_CATEGORY = [
VEG,        // 0       
NON-VEG,    // 1
DESERTS,    // 2
BEVERAGES,   // 3
LUNCH,       // 4
];

export function showMenu() {
    const selectedIndex =
    readline.keyInSelect(MENU_CATEGORY);

    const selectedMenu = 
    MENU_CATEGORY[selectedIndex];
    return selectedMenu;
}
