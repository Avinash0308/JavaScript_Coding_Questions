//Write a JavaScript function to find the first not repeated character.
//Sample arguments : 'abacddbec'
//Expected output : 'e'
const prompt = require("prompt-sync")({ sigint: true });
const str = prompt("Enter the string: ");
var ans = '/';
var cha = [26];
var cou = [26];
for(let i = 0; i<26; i++){
    cha[i] = 0;
    cou[i] = 0;
}
for(let i = str.length-1; i>=0; i--){
    cha[str.charCodeAt(i)-97] = i; 
    cou[str.charCodeAt(i)-97]++;
}
var ind = str.length;
for(let i = 0; i<26; i++){
    if(cou[i] == 1 && cha[i] < ind){
        ind = cha[i];
        ans = String.fromCharCode(i+97);
    }
}
if(ans == '/') console.log("No character found");
else console.log(ans);