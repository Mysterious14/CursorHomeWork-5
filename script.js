function getRandomArray(length, min, max){
  const randArray = [];
  for (i = 0; i < length; i++) {
    randArray.push(Math.floor(Math.random() * (max - min) + min)); 
  } 
  return randArray;
}
const length = 7;
const min = 10;
const max = 27;

document.writeln(`<b>Рандомні значення ${min} - ${max} кількістю в ${length}:</b> [${getRandomArray(length, min, max)}]<br>`);

//---------------------------------------------------------------------------------------------

function getModa(...numbers){
  const newArr = numbers.filter((num, i) =>
    numbers.indexOf(num) === i && Number.isInteger(num)
  );
  let moda = 0;
  const frequency = [];

  newArr.map(el=>{
    frequency.push([el, numbers.filter(item => item === el).length]);
    
  });
  let count = 1;
  frequency.map( el =>{
    if(count< el[1]){
      count = el[1];
      moda = el[0];
    } 
  })
  return moda;
}
const numbers =[6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.2, 2.2, 2.2 ,2.2 ,2.2, 2.2];
document.writeln(numbers);
document.writeln(`<b>Мода = ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.2, 2.2, 2.2 ,2.2 ,2.2, 2.2)}</b><br>`);

//---------------------------------------------------------------------------------------------
function getAverage(...numbers) {
  const newArr = numbers.filter(num =>Number.isInteger(num));
  let count =0;
  newArr.map(el=>count+=el);
  return count/newArr.length;
}
const numbersAVG =[6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
document.writeln(numbersAVG);
document.writeln(`<b>Середнє значення ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</b><br>`);

//---------------------------------------------------------------------------------------------

function getMedian(...numbers) {
  const newArr = numbers.filter(num =>Number.isInteger(num));
  newArr.sort((a, b) => a - b);
  let half  = newArr.length /2;
  let median =0;
  if (Number.isInteger(half)){
    median =( newArr[half -1] + newArr[half]) /2;

  }
  else {
    median = newArr[Math.floor(half)];
  }
  return median;
}
const NumberForMedian = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
document.writeln(NumberForMedian);
document.writeln(`<b>Медіана ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</b><br>`);

//---------------------------------------------------------------------------------------------

function filterEvenNumbers(...numbers){
  let newArr = numbers.filter(el => el%2);
  return newArr;
}
const numberToFilter = [1, 2, 3, 4, 5, 6];
document.writeln(` [${numberToFilter}] <b>відфільрувати парні ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</b><br>`);

//---------------------------------------------------------------------------------------------

function countPositiveNumbers(...numbers){
  let newArr = numbers.filter(el => el>0).length;
  return newArr;
}
const negativeNum = [1, -2, 3, -4, -5, 6];
document.writeln(`[${negativeNum}] <b>Кількість позитивних чисел: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</b><br>`);

//---------------------------------------------------------------------------------------------


function getDividedByFive(...numbers){
  let newArr = numbers.filter(el => el%5==0);
  return newArr;
}
const DividedByFive = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
document.writeln(`[${DividedByFive}] <b>Числа, які діляться на ціло на 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</b><br>`);

//---------------------------------------------------------------------------------------------

function replaceBadWords(string){
  const badWords = ["fuck", "shit", "bitch"];
  let newArr = string.split(" ");
  let result=[];
  const arr =newArr.map(el=>{
    for(let i = 0; i < badWords.length; i++){
      el.includes(badWords[i])? el=el.replace(badWords[i], "*".repeat(badWords[i].length)):el;
    }
    result.push(el);
  })

  return result.join(" ");
}
const badWords = "Are you fucking kidding?";
document.writeln(`"${badWords}" <b> NO! "${replaceBadWords(badWords)}"</b><br>`)

//---------------------------------------------------------------------------------------------

function divideByThree(word){
  const newArr = word.toLowerCase().replaceAll(" ", '').split('');
  const result =[];
  let count="";
  newArr.map(el=>{
    count+=el;
    if (count.length===3){
      result.push(count);
      count="";
    }
  })
  if(count.length<3) result.push(count);
  return result;
}
const wordToDivide = "Command ers";
document.writeln(`"${wordToDivide}" <b>ділимо по 3 -> "${divideByThree(wordToDivide)}"</b><br>`);


function generateCombinations(word) {
  let result = [];
  if (word.length <= 1) {
    return [word];
  } else {
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      let newStr = word.slice(0, i) + word.slice(i + 1, word.length);
      let l = generateCombinations(newStr);
         
      for (var j = 0; j < l.length; j++) {
        let tmp = c + l[j];
        result.push(tmp);
      }
    }
  }
  return result;
};  
const word= "sam"
document.writeln(`"${word}" -> "${generateCombinations(word)}"`)


