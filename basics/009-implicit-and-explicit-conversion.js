//implicit conversion (conversion done automatically by javascript complier/engine)

100 == "100"; // true (100 == "100" ->"100" == "100" -> true)

// impliment conversion to string
'25' + 15; // '2515'

// impliment conversion to number
23 * '2'//46
23 - true //22 // true is converted into 1
true - null //1
false = undefiner //Nan //undefined into NaN

//conversion to string using string()
string (2 - true) //'1'
'56' === string(56) //true

//conversion to number using number ()
Number ('23') +5; //28

//conversion to boolean explicitly
Boolean('')//false
Boolean(2)== true; //true