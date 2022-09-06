// isNan , Number.isNan

console.log(isNaN('2')); // false
console.log(Number.isNaN('2')); //

console.log(isNaN(2)); // false 
console.log(Number.isNaN(2));// false

console.log(isNaN('sfsdfsf')); // true
console.log(Number.isNaN('sfsdfsf')); //false

console.log(Number.isNaN(0/'b')); //true

// new properties / functions in prototypes

function Person(name) {
  this.name = name;
  this.showName = function () {
    return(this.name);
  } // will be copy every new instance 
}

Person.prototype.getName = function() {
  return this.name;
}
//використ. прототип метод класу getName залишається в батьківському об’єкті, а екземпляр  отримує до нього доступ через прототип.

const person1 = new Person("name1");
console.log(person1);

const person2 = new Person("name2");
console.log(person2);

//operators 
// присвоєння = += -= *= /= %= **=
// математичні + - * **(в ступінь) / % ++ --
//рядкові 
const txt1 = "name1";
const txt2 = "name2";
const txt3 = txt1 + " " + txt2;
//порівння
//логічні
//бітові &(and) |(or) ~(not) ^(XOR) << >> >>> перетворює в 32 розряд число
console.log(5&1); //0101 & 0001 = 1

// MAP SET

//Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1"); 

console.log(map);
console.log(map.size);
console.log(map.get(true))

// Set - то вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

let set = new Set();

let name1 = { name: "name1" };
let name2 = { name: "name2" };
let name3 = { name: "name3" };

set.add(name1);
set.add(name2);
set.add(name3);
set.add(name1);
set.add(name3);

console.log(set)
console.log(set.size)
console.log(set.has(name1))