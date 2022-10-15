const findTheOldest = function(peopleArray) {
    peopleArray.map(person => person.yearOfDeath ? true : person.yearOfDeath = 2022)
    const eachPersonAge = peopleArray.sort((first,next) => {
        const lastPerson = first.yearOfDeath - first.yearOfBirth;
        const nextPerson = next.yearOfDeath - next.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return eachPersonAge[0];
};

//const newArr = peopleArray.map(person => person);
    //const onlyAlive = newArr.filter(person => person.yearOfDeath === undefined);
    //console.log(onlyAlive);
//return peopleArray.map(person => person);
// Do not edit below this line
module.exports = findTheOldest;