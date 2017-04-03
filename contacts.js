var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];
//Create a contacts array

var findContact = function(){
  console.log(contacts[2]);
};
//create a function to find a contact at index 2

findContact();
//call that function

var updateLastContact = function(){
  contacts[2] = "Patty Davis";
};
//create a function to change the value at position to 2, to Patty

updateLastContact();

var addContact = function(){
  contacts.push("Bill Jones");
};
//create a function which adds a contact to the list of names

addContact();

console.log(contacts);
// print the list of names
