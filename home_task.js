// Assignment 20 to 30

// Chapter 21 (Changing Case)

// Q1:
var userInput = prompt("Where do you live?");
var allLower = userInput.toLowerCase();
console.log(allLower);

// Q2:
var x = "ISLAMABAD".toLowerCase();
console.log(x);

// Q3:
var y = "karachi".toUpperCase();
console.log(y);

// Q4:
var fruit = "GRAPES";
var item1 = fruit.toLowerCase();
console.log(item1);

// Q5:
var carModels = [
  "Aston Martin",
  "Bugatti Chiron",
  "Lamborghini Centenario",
  "Ferrari Enzo",
];
var cars = carModels.map((carModel) => carModel.toLowerCase());
console.log(cars);

// Q6:
var firstName = "waqar".toUpperCase();
alert(firstName);

// Q7:
var cityName = "kaRacHi";

var firstChar = cityName.slice(0, 1).toUpperCase();
var remainChar = cityName.slice(1).toLowerCase();
var completeWord = firstChar + remainChar;

console.log(completeWord);






// Chapter 22 - 25 (Strings)

// Q1:
var sameWords = "Captian";
var cutWords = sameWords.slice(1, 3);
console.log(cutWords);

// Q2:
var str = "Thander";
var numStr = str.length;
console.log(numStr);

// Q3:
var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

// Q4:
var sharkName = "Megaladon";
var meg = sharkName.length;
console.log(meg);

// Q5:
var fishName = "Rosetail Betta";
console.log(fishName.length);
var cutName = fishName.slice(1, 11);
console.log(cutName);

// Q6:
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

// Q7:
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);

// Q8:
var text = "go";
var indx = text.indexOf("go");
console.log(indx);

// Q9:

// Q10:
var alphabet = "abcde";
console.log(alphabet.charAt(2));

// Q11:
var text = "Indominus Rex";
var cha = text.charAt(10);
console.log(cha);

// Q12:
var str = "Indo Rator";
var x = str.lastIndexOf("r");
console.log(x);

// Q13:
var input = "Metaverse";
var cha = input.charAt(5);
console.log(cha);

// Q14:
// Q15:

// Q16:
var str = "1";
var newStr = str.replace("1", "one");
console.log(newStr);

// Q17:
var y = x.replace("a", "z");
var y = x.replaceAll("a", "z");





// Chapter 26 (Rounding Numbers)

// Q1:
var num = 3.6;
console.log(Math.round(num));

// Q2:
var origNum = 3.2;
var roundNum = (Math.ceil(origNum));
console.log(roundNum);

// Q3:
var origNum = 3.2;
var roundNum = (Math.floor(origNum));
console.log(roundNum);

// Q4:
var origNum = 4.5;
var roundNum = (Math.round(origNum));
console.log(roundNum);

// Q5:
var origNum = 0.5;
var roundNum = (Math.floor(origNum));
console.log(roundNum);





// Chapter 27 (Random Numbers)

// Q1:
var min = 1;
var max = 50;
var randomNum = Math.floor(Math.random() * (max - min));
console.log(randomNum);

// Q2:
var randomNum = Math.random();
console.log(randomNum);

// Q3: it is not explained by sir
// Q4: it is not explained by sir





// Chapter 28, 29 (Converting Strings)

// Q1:
// Plus Method:
var age = "32";
var firstName = "Waqar";
var num = "100";
console.log(+(age));
console.log(+(firstName));
console.log(+(num));

// ParseInt Method:
var age = "32";
var firstName = "Waqar";
var num = "100";
console.log(parseInt(age));
console.log(parseInt(firstName));
console.log(parseInt(num));

// Number Method:
var age = "32";
var firstName = "Waqar";
var num = "100";
console.log(Number(age));
console.log(Number(firstName));
console.log(Number(num));

// Q2:
var num = "123";
console.log(parseInt(num));

// Q3:
var num = "123.55";
console.log(parseFloat(num));

// Q4:
var firstName = "Waqar";
console.log(parseInt(firstName));

// Q5:
var myNum = 123;
console.log(myNum.toString());

// Q6:
var myNum = 42;
console.log(myNum.toString());

// Q7:
var num = "3.14";
console.log(parseFloat(num));




// Chapter 30 (Controlling the length of decimals)

// Q1:
var randomNum = Math.random();
console.log(randomNum);
var roundNum = randomNum.toFixed(4);
var newNum = roundNum.toString();
console.log(newNum);

// Q2:
var randomNum = Math.random().toFixed(2);
console.log(randomNum);
var str = randomNum.toString();
console.log(str);
var newNum = parseFloat(str);
console.log(newNum);

// Q3:
// Sir did not teach this question.

// Q4:
var randomNum = Math.random();
alert(randomNum.toFixed(2).toString());
