function greet(fname, lname, lang = 'en', ...langs) {
    console.log(arguments);
    console.log(langs);
}

greet('Tommy', 'Hism', 'es', 'en', 'hi');
