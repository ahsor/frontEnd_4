const empty = {}; // 빈객체

empty.name = 'kim';
empty['age'] = 20;
empty.add = function(a , b){
  return a + b;
}

console.log(empty);
console.log( empty.add(10,20));
 /*
{ name: 'kim',
  'first-name': 20, 
  add: function(){
 }
 

 document.querySelector('.selector').style.backgroundColor = 'color';
 $('.selector').css({ 'background-color': 'red'});
 */
}