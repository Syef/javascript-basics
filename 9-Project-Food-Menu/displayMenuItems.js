
function displayMenuItems(category)
{
    const menuItems =
    FOOD_ITEMS[category];
    if (menuItems) {
        const selectedItemsIndex =
        readline.keyInSelect(menuItems);
        const selectedItem =
        menuItem[selectedItemIndex];

        if (selectedItemIndex) {

            console.log(chalk.bgRed(`Thanks for 
            Buying ${selectedItem}`))
        } else {
            showNotSelectedMessage()
        }
    } else{
        showNotSelectedMessage()
    }
}