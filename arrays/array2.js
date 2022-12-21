class dccUser {
    constructor(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
}

const niel = new dccUser("King of DPS and also Heals", 63, false);
const horsey = new dccUser("Birb Lover 69", 9, true);
const diply = new dccUser("Invalid User ID", 0, false);
const kelly = new dccUser("Looks up to Niel", 101, false);
const spike = new dccUser("Pool Boy", 69, true);

const dccUserList = [niel, horsey, diply, kelly, spike];

// a) Create a new array consisting only of user's that have an age greater than 20.

// const numberArray20 = dccUserList.filter(Element => Element.age >20);
// console.log(numberArray20)

// b) Create a new array consisting only of user's that are admins.

// const isAdminOrNot = dccUserList.filter(Element => Element.isAdmin === true);
// console.log(isAdminOrNot)

// c) Create a new array consisting only of user's that are both admin and have an age less than 50.

// const youngAdmins = dccUserList.filter(Element => Element.isAdmin === true && Element.age >50);
// console.log (youngAdmins)

// d) Sort the array by the user's names, alphabetically, ascending.

// const alphaAscendingNames = dccUserList.sort((a, b) => a.name.localeCompare(b.name));
// console.log(alphaAscendingNames)

// e) Sort the array by the user's age, descending (oldest to youngest).

// const oldToYoung = dccUserList.sort((a, b) => b.age - a.age);
// console.log(oldToYoung)