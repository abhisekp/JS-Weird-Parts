var  z = {
    zName: 'Tommy Hilfrangler',
    zLog: function () {
        var self = this;

        console.log(self);

        function changeName(name) {
            self.zName = name;
        }

        changeName('Murfy Mustaffa');
        console.log(self);
    }
};

console.log(z);

 z.zLog();

var logger =  z.zLog;

logger();

console.log(self);
