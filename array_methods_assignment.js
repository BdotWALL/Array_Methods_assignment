const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
]

let jose = users.find((user) => user.firstName == 'Jose');
console.log(jose)

let premiummember = users.filter((user) => user.isPremiumMember == true);
console.log(premiummember)

let lastnames = users.map((user) => user.lastName);
console.log(lastnames)

let logins = users.filter((user) => user.logins >10)
let nameoflogins = logins.map((user) => user.firstName +"  "+ user.lastName);
console.log(nameoflogins)


let justlogins = users.map((user) => user.logins);
console.log(justlogins)

let logintotals = justlogins.reduce(function(logs,total){
    return total + logs;
},0);
console.log(logintotals)


