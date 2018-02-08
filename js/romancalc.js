// function RomanNum(name) {
//   this.name = name;
// }

export class RomanNum {
  constructor(name) {
    this.name = name;
  }

  converter(input) {
    let romeNum = [];
    let numOne = (input % 10);
    let numTen = ((input % 100) - ((input % 100)%10))/10;
    let numHun = ((input % 1000) - ((input % 1000) % 100))/100;
    let numTho = (input - (input % 1000))/1000;

    if (input > 3999) {
      input = "Number too high";
      return input;
    } else {

    for (let i = 0; i < numTho; i++)  {
        romeNum.push("M");
    }

    for (let i = 0; i < numHun; i++)  {
      // debugger;
      if (numHun === 4)  {
        romeNum.push("CD");
        break;
      }
      else if (numHun === 9) {
        romeNum.push("CM");
        break;
        }

      else if (numHun >= 5) {
        // debugger;
      romeNum.push("D");
      for (let i = 0; i < (numHun - 5); i++)  {
        romeNum.push("C");
        }
      break;
      }
      else {
        romeNum.push("C");
      }
    }
    for (let i = 0; i < numTen; i++)  {
      if (numTen === 4)  {
        romeNum.push("XL");
        break;
      }
      else if (numTen === 9) {
        romeNum.push("XC");
        break;
        }

      else if (numTen >= 5) {
        // debugger;
      romeNum.push("L");
      for (let i = 0; i < (numTen - 5); i++)  {
        romeNum.push("X");
        }
      break;
      }
      else {
        romeNum.push("X");
      }
    }
    for (let i = 0; i < numOne; i ++) {
      if (numOne === 4)  {
        romeNum.push("IV");
        break;
      }
      else if (numOne === 9) {
        romeNum.push("IX");
        break;
        }

      else if (numOne >= 5) {
        // debugger;
      romeNum.push("V");
      for (let i = 0; i < (numOne - 5); i++)  {
        romeNum.push("I");
        }
      break;
      }
      else {
        romeNum.push("I");
      }
    }
    return romeNum.join('');

   }
  }
};




// exports.romanNumModule = RomanNum;


// $(document).ready(function() {
//   $("#romanNumCalc").submit(function(event){
//     event.preventDefault();
//     let input = parseInt($("#numEntry").val());
//     $("#result").empty();
//     let result = romanNumCalc(input);
//     $("#result").append(result);
//   });
// });
