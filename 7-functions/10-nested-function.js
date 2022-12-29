const Tax_Amount = 30


// function expression define
const shopping = function(amount) {
    // amount = 100

    const DiscountAmount = 40;

    // Arrow function
    const calculateTax = () => {
        return amount + Tax_Amount; //
        100+30 = 130; (Tax_Amount is global variable)

    }
    // function declaration
    function getDiscountAmount() {
        return Discount_Amount;
    }

    // invoking the function
    const billAmount = shopping(100);
    // ?
    console.log(`BillAmount =
    ${billAmount}`);

    //point to be note
    //1. we can't access any values from the function
    // 2. we can access outer variable in the function

    function shoppingDetails(amount) {
        const discount_Amount = 25;

        function calculateTaxAmount() {
            const taxAmount = amount +
            Tax_Amount;
            return taxAmount;
        }
        function getDiscountAmount() {
            const total =
            calculateTaxAmount();
            const amountWithDiscount =
            total - DiscountAmount;
            return amountWithDiscount;
        }
        const actualBill =
        getDiscount();
        return {
            amount: amount,
            billAmount: actualBill,
            discount: DiscountAmount,
            amountWithTax:
            calculateTaxAmount() // here we invoked the function
        }
    }
          const userAmount = 456;//
          const details =
          shoppingDetails(userAmount);
          console.log(details);

}