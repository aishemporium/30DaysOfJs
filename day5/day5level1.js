const emptyArray = [];
console.log(emptyArray);

const arrayxFive = Array(5);
console.log(arrayxFive);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
console.log(countries.length);
console.log(webTechs.length);

const firstCountry = countries[0];
const middleCountry = countries[((countries.length - 1) / 2)];
const lastCountry = countries[countries.length - 1];
console.log("First country:", firstCountry);
console.log("Middle country:", middleCountry);
console.log("Last country:", lastCountry);
const firstWebTech = webTechs[0];
const middleWebTech = webTechs[((webTechs.length - 1) /2)];
const lastWebTech = webTechs[webTechs.length - 1];
console.log("First webtech:", firstWebTech);
console.log("Middle webtech:", middleWebTech);
console.log("Last webtech:", lastWebTech);

const mixedDatatypes = [
    'string',
    'arrays',
    'fil',
    'boolean',
    ['split','include', 'replace',],
    9,
    '',
    2 > 1
]
console.log(mixedDatatypes.length);

const itCompanies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon.'];
console.log(itCompanies.length);

const companiesArray = itCompanies[0].split(', ');
console.log('Number of companies:', companiesArray.length);

const firstCompany = companiesArray[0];
const middleCompany = companiesArray[(companiesArray.length - 1) / 2];
const lastCompany = companiesArray[companiesArray.length - 1];
console.log('First Company:', firstCompany);
console.log('Middle Company:', middleCompany);
console.log('Last Company:', lastCompany);

console.log(companiesArray [0]);
console.log(companiesArray [1]);
console.log(companiesArray [2]);
console.log(companiesArray [3]);
console.log(companiesArray [4]);
console.log(companiesArray [5]);
console.log(companiesArray [6]);

console.log(companiesArray [0].toUpperCase());
console.log(companiesArray [1].toUpperCase());
console.log(companiesArray [2].toUpperCase());
console.log(companiesArray [3].toUpperCase());
console.log(companiesArray [4].toUpperCase());
console.log(companiesArray [5].toUpperCase());
console.log(companiesArray [6].toUpperCase());

const sentenceArray = (companiesArray.join(", ") + "are big IT companies");
console.log(sentenceArray);

companiesArray 
if (companiesArray.includes("ajike")) {
    console.log(true);
} else {
    console.log("company name not found");
};
//
companiesArray 
if (companiesArray.includes("IBM")) {
    console.log(true);
} else {
    console.log("company name not found");
};

//

console.log(companiesArray.sort());
console.log(companiesArray.reverse());
console.log(companiesArray.slice(3));
console.log(companiesArray.slice(0,4));
console.log(companiesArray.splice(3,1));
companiesArray.shift();
console.log(companiesArray);
companiesArray.splice(3,1);
console.log(companiesArray);
companiesArray.pop();
console.log(companiesArray);
console.log(companiesArray.splice());



