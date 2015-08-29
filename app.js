var a = { greeting: 'Hello' },
    b = a;

function changeGreeting(obj) {
    obj.greeting = 'Hi!';
}

changeGreeting(b);

console.log(a);
console.log(b);

