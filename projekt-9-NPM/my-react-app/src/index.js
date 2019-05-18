
import { getPersonFullName, getPersonFullNameWithAge } from "./person-helpers.js"

const personOne = {
    firstName: 'jan',
    lastName: 'Nowak',
    age: 44
};

const fullName = getPersonFullNameWithAge(personOne);
    console.log(fullName)
