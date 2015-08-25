function greet() {
    console.log('Hello!');
}

greet.language = 'english';

console.log(greet);
console.log(greet.language);

function log(a) {
    a();
}

log(function () {
    console.log('Hello!');
});
