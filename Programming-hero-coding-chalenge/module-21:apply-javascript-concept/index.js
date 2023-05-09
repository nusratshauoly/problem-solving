//প্রাকটিস চ্যালেঞ্জ-৩ টা: 
/*
১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
*/





/*
২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/






/*
৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
*/


/*
4. Inch to Feet
The standard height of a volleyball player is 7 feet. Jim wants to join the vollyball team, so he decided to measure his height to see if he meets the standard. Calculate his height in feet.
To convert inch to feet: feet = inch / 12
Input: The input line has the height in inch : 84
Output: Print the height in feet : 7
*/

// solving in normal way
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);
//
const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet', dadaFeet);
//
const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadi feet', dadiFeet);

// using function
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const dadiInches = 60;
const dadiFeet = inchToFeet(dadiInches);
console.log('dadi feet', dadiFeet);


/* 5. Miles to Km
John is a web developer, and he cycles to work. He knows the distance between his house and his office in miles. John wants to measure the distance in kilometers. Calculate the distance in Km.
To convert miles to Km:  km = miles * 1.60934

Input: The Input line has the distance in miles : 2

Output: Print the distance in km:  3.21868
*/

function milesToKilometer(miles){
   const kilometer = miles * 1.60934;
   return kilometer;
}
const miles = 2;
const kilometer = milesToKilometer(miles);
console.log('the distance is', kilometer);

///////////////////////////////////

/*
6. Even and Odd

Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help Peter write the program.

Input: The first and second input lines contain the numbers. : 98, 117

Output: Print true if the number is an even number and false if the number is an odd number: true, false
*/

function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
       //console.log('number is even');
       return true;
    }
    else{
       //console.log('number is odd');
       return false;
    }
}
const myNumberIsEven = isEven(48);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
isEven(303);

//////////////////////////////////

/*
7. Kono 1 ta year leap year kina sheta ber kora
***Kono year leap year hobe kina oita bujhbo jodi year ta 4 diye vag jay.
*/
function isLeapYear(year){
   const remainder = year % 4;
   if(remainder === 0){
      //console.log('Your year is leap year', year);
      return true;
    }
    else{
      return false;
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);

// another way

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
       //console.log('Your year is leap year', year);
       return true;
     }
    return false;
}
//  jodi wkhane ans true hoy tahole r porer line gulote jabena or jodi false hoy tahole (if-else) condition evebeo likha jay
// const isMyYearLeapYear = isLeapYear(1933);
// console.log('my year:', isMyYearLeapYear);

// const isHerYearLeapYear = isLeapYear(1960);
// console.log('Her year:', isHerYearLeapYear);


////////////////////////////////////////////////////////

/*
8. Write  a function findOddSum() that will take the array [5,7,8,10,45,30] as the input prameter and will return the sum of the odd numbers.
*/

function sumOfAnArray(numbers){
    // 2.(i) condition er bahire sum er kaj korbo (jokhon konokichu add korbo tokhon er primary value hobe 0 cause ekhono add korinai)
    let sum = 0; // sum jodi for ondition er vitore declare kori then each time new line e add korte hobe 0 er shathe ager addition er value hariye jabe jodi kothao store kore na rakhi that' why sum for loop er bahire declare korbo.
  //console.log(numbers);
  //1. array er each element first e ber korte hobe
   for(let i = 0; i < numbers.length; i++){
    // array er index gulo ber korar jonno
      const index = i;
    // index ber korle element o ber korte parbo (third bracket j index er element ta pete chai shetar man boshabo)
      const element = numbers[index];
    //2.(ii) sum er operation ekhane korbo  
      sum = sum + element; 
      console.log(index, element, sum);
}
// 2.(iii) then sum return korbo loop er bahire
      return sum;

}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
sumOfAnArray(myNumbers);


// without comments
function sumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element; 
        console.log(index, element, sum);
  }
  return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
sumOfAnArray(myNumbers);


//////////////////////////////

/*
9. kono 1 ta array te jeshokol bijor(odd) number ase shegulo ber korbo and add korbo
*/
function getOddNumbersOfAnArray(numbers){
    // 4. loop er moddhe theke jei odd numbers gulo pabo shegulo shob ekta array te rakhte hobe and eishob store value gulo normally loop er bahire declare korte hoy
    const oddNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        //console.log(i);
        // 1.array er value(i) gulo array er position index e rakhbo
        const index = i;
        // 2. numbers nam er array theke oi index er value ta pawar niyom holo third bracket er moddhe index er value ta pathaye dibo[index]
        const element = numbers[index];
        // 3. number gulor moddhe jegula odd shegula select korbo 2 diye divide korbo and remainder 0 hote parbena or 0 er beshi hobe
        if(element % 2 !== 0){
            console.log(index, element);
            // 5. jokhon e notun ekta odd value pabo sheta array er moddhe boshaye dibo
            oddNumbers.push(element);
        }
    }
    // 6. array er moddhe shobgulo odd numbers pawar jonno
    return oddNumbers;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
// 6. 8 no. problem theke sum value anbo (eta alada vabe pore kore dekhte hobe)
const oddNumberSum = sumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum);



//////////////////////////////////////////

//10. Calculate Factorial of a number using for loop:

let sum = 0;