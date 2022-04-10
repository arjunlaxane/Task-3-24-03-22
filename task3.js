/*
//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

let salaries = {
  john: 40000,
  Arjun: 12000000,
  Don: 1546846,
  Bran: 'None',
  others: [100000, 555555555, 66666666, 7777777],
};

Object.entries(salaries).forEach(([key, value]) => {
  console.log(key + ':' + value);
});

////1.Normal for loop///
///OBJECT don't have indexes or order like array
//we access OBJECT by properties
for (var index = 0; index < Object.keys(salaries).length; index++) {
  console.log(Object.keys(salaries));
  console.log(Object.values(salaries));
}

////2.for in loop///

for (const index in salaries) {
  console.log(index + ':' + salaries[index]);
}

////3.for of loop///

var names = Object.keys(salaries);
for (var name of names) {
  var sal = salaries[name];
  console.log(name + ' ' + 'salary is' + ' ' + sal);
}
*/

//2.Create your own resume data in JSON format

const my_Resume = {
  full_Name: 'Arjun Dilip Laxane',
  date_Of_birth: '27-11-1994',
  college_Name:
    'Saint Vincent Pallotti College of Engineering and Tchnology, Nagpur, Maharashtra',
  graduation_year: 2016,
  skills: 'Problem solving, decision making',
  work_Experience: '3 years of experience in M.S. Fabric as design engineer',
  current_Status: 'Pursuing Full Stack Web Development course in GUVI-ZEN',
};

console.log(my_Resume);
