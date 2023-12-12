function doSomthing() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('finally;' + i);
}
doSomthing();
var count = 5;
count = 'k';
let k = 5;
k = 'i';
let a;
a = 1;
a = true;
a = 'k'
let  message;
message = 'abc';
let endsWith = message.endsWith('c');
let alternativeWay =(message as string).endsWith('c');