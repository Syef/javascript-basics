import readline from 'readline-sync';
import chalk from 'chalk';

const VEG = 'veg';
const NON_VEG = 'Non-Veg';
const DESERTS = 'Deserts';
const BEVERAGES = 'Beverages';
const LUNCH = 'Lunch'

const MENU_CATEGORY = [
    VEG,           // 0   
    NON_VEG,       // 1
    DESERTS,       // 2
    BEVERAGES,     // 3 
    LUNCH,         // 4
    ];
    const VEG_ITEMS = [
        'Veg Biryani        120',
        'Veg Fried Rice     110',   
        'Upma               50'
    ];

    const NON_VEG_ITEMS = [
        'Chicken Biryani    180',
        'Mutton Biryani     220',
        'Chicken Roll       110'
    ];
    const DESERTS_ITEMS = [
        'Ice Cream     = 50',
        'Chocolate     =  20'
    ];
    
    const BEVERAGES_ITEMS = [
        'pepsi     = 25',
        'coke      =  20'
    ];
    const FOOD_ITEMS = {
        'VEG': VEG_ITEMS,
        'Non-Veg' : NON_VEG_ITEMS,
        'Deserts' : DESERTS_ITEMS,
        'Beverages' : BEVERAGES_ITEMS
    }
        
        
    


    // show user a menu list
    console.log(chalk.bgGreen(`FOOD MENU CATEGORY`));
    console.log(`Please Select a Category`)
    const selectedCategoryIndex = readline.keyInSelect(MENU_CATEGORY);
    const selectedCategory = MENU_CATEGORY [selectedCategoryIndex];
    console.log(`Selected Category Index ${selectedCategory}` );

    displayMenuItems(selectedCategory);

    const selectedMenu = FOOD_ITEMS[selectedCategory];
    
    function displayMenuItems(category) {
        const menu = FOOD_ITEMS[category];
        if (menu) {
        const selectedItemsIndex = readline.keyInSelect(menu);
        const selectedItem = menuItems[selectedItemsIndex];

        if(selectedItem) {console.log(chalk.bgRed(`thanks for buying ${selectedItem}`))
        } else {
            showNotSelectedMessage()
        }
        
        } else {
            showNotSelectedMessage()
        }

        }
    function showNotSelectedMessage() {
        console.log(chalk.bgRedBright(`not selected any option`))
    }