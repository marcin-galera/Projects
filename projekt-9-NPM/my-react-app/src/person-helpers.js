
import { lowerCase, startCase} from 'lodash'

export const getPersonFullName = (person) => {
    const firstName = lowerCase(person.firstName);
    const lastName = lowerCase(person.lastName);
    const fullName = `${firstName} ${lastName}`
    return startCase(fullName)
};


export const getPersonFullNameWithAge = person => {
    const fullName = getPersonFullName(person)
    const age = person.age

    const fullNameWithAge = `${fullName} ma ${age} lat.`
    return fullNameWithAge
}