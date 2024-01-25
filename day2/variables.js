    // Answer to Exercise 1
let challenge = " 30 Days of JavaScript ";
    // No2
    console.log(challenge);
    // No3
    console.log(challenge.length);
        // No4
    console.log(challenge.toUpperCase());
        // No5
    console.log(challenge.toLowerCase());
    // No6
    console.log(challenge.substr(3));
    // No7   
    console.log(challenge.substring(0,2));
    // No8
    console.log(challenge.includes('Script'));
    //No9
    console.log(challenge.split());
    //No10
    console.log(challenge.split(' '));
    //No11
    let media = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
    console.log(media.split(' '));
    //No12
    console.log(challenge.replace('JavaScript', 'Python'));
    //No13
    console.log(challenge.charAt(15));
    //No14
    console.log(challenge.charCodeAt('j'));
    //No15
    console.log(challenge.indexOf('a'));
    //No16
    console.log(challenge.lastIndexOf('a'));
    //No17
    let sentence = "You cannot end a sentence with because because because is a conjunction";
    console.log(sentence.indexOf('because'));
    //No18
    console.log(sentence.lastIndexOf('because'));
    //No19
    console.log(sentence.search('because'));
    console.log(challenge.trim());
    console.log(challenge.startsWith(' '));
    console.log(challenge.endsWith(' '));
    console.log(challenge.match('a'));
    console.log(challenge.concat("30 Days of", "JavaScript"));
    console.log(challenge.repeat(2));

    //Level 2

            //No1
    console.log('There is no exercise better for the heart than reaching down and lifting people up.' );

            //No2
    console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

            //No3
    let a = '10';
    let b = 10;
    a = Number(a);
    console.log(typeof a== typeof b);

            //No24
    let ai = parseFloat('9.8');
    console.log(Math.round(ai));

            //No5
    let firstWord = "Python";
    let secondWord = "Jargon";
    console.log(firstWord.includes('on'));
    console.log(secondWord.includes('on'));

            //No6
    let check = 'I hope this course is not full of jargon'
    console.log(check.includes('jargon'));

            //No7
    let randomNumber = Math.random();
    let anotherNumber = randomNumber * 101;
    console.log(anotherNumber);

            //No8
    console.log(Math.floor(Math.random() * 31) + 50);

console.log(Math.random() * 256);

let string = "Javascript"
let firstIndex = string[0];
console.log(firstIndex);
let  secondIndex = string[1];
let  thirdIndex = string[2];
let  fourthIndex = string[3];
let  fifthIndex = string[4];
let  sixthIndex = string[5];
console.log(secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex);

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

console.log(sentence.substr(30, 24));

            //Level3
    let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    let pattern = /love/gi;
    console.log(love.match(pattern));

    let count = /because/gi;
    console.log(sentence.match(count));

    const sentences= '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    let inequalities = /[%$@#;&?!]/g;
console.log(sentences.replace(inequalities, ""));

let calculation = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extractNum = /\d+/gi;
console.log(calculation.match(extractNum));
let firstMonth = calculation.match(extractNum);
console.log(firstMonth);
let bd = +firstMonth[0] * 12;
let bc = +firstMonth[2] * 12;
let output = bd + bc + 10000;
console.log(bd);
console.log(bc);
console.log(output);






