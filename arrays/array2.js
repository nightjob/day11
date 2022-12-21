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