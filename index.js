// Code your solutions in this file
function writeCards(names) {
const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thankYouMessages;
}
function countDown(aNumber){
    for(let i = aNumber; i>=0; i--){
        console.log(i);
    }
}