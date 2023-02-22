/* eslint-disable */
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var end = ['.com', '.es', '.cr']
function domainNameGenerator(){
  let theDomainName = "";
  pronoun.forEach(i => {
    adj.forEach(j => {
      noun.forEach(k => {
        end.forEach(l => {
          theDomainName += i + j + k + l +"<br>"
          document.getElementById("domain-name").innerHTML = '<p1>' + theDomainName + '</p1>'
        })
      })
    })
  })
  return theDomainName;
}

domainNameGenerator();