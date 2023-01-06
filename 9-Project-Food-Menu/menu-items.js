import readline from 'readline-sync';
import { showError } from
'./showError.js'

const VEG_ITEMS = [
    'Veg Biryani      = 150',
    'Veg Fried Rice   = 120',
    'Upma             = 50'
];
const NON_VEG_ITEMS = [
    'Chicken Biryani  = 180',
    'Mutton Biryani   = 250',
    'Fish Biryani     = 220'
];

const DESERT_ITEM = [
    'Ice Cream     = 50',
    'Chocolate     =  20'
];

const BEVERAGE_ITEMS = [
    'pepsi     = 25',
    'coke      =  20'
];

const FOOD_ITEMS = {
    'VEG': VEG_ITEMS,
    'Non-Veg' : NON_VEG_ITEMS,
    'Deserts' : DESERT_items,
    'Beverages' : BEVERAGES_ITEMS
}

export function showMenuItems(category) {
    const menuItems =
    FOOD_ITEMS[category];
    if(menuitems) {
        const menuItemsIndex =
        readline.keyInSelect(menuItems);
        const selectedItem =
        menuItems[menuItemsIndex];
        return selectedItem;
    } else {
        showError();
    }
}


