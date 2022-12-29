function reduceCarSpeed() {
    car.currentSpeed =
    car.currentSpeed - 10;
}
const car = {
    // properties
    name: 'BMW',
    year: 2022,
    isRunning: false,
    currentSpeed: 0, 

    //Method ()
    startEngine: function () {
        car.isRunning = true;
    },
    stopEngine:  () =>{}
        car.isRunning = false;
    },
        increaseSpeed: () => {
        car.currentSpeed + 10;
        },
        decreaseSpeed: reduseCarSpeed,

        printDetails: () =>{
            console.log(`Car Details info
            ------------------
            Name: ${car.name}
            year: ${car.year}
            Running: ${car.isRunning}
            Speed: ${car.currentSpeed}`)
        }
    console.log(`Car Details`,car);
    car.printDetails();

    car.startEnglish();
    car['printDetails']();

    car.increaseSpeed();
    car.increaseSpeed();
    car.increaseSpeed();
    car.printDetails();

    car.decreaseSpeed()
    car.decreaseSpeed();
    car['printDetails'] ();

    console.log(`Car Current Speed is ${car['currentSpeed']}`);
