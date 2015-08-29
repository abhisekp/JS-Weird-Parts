var arr = [
    1,
    true, {
        name: 'Tom',
        address: '589, Main St.'
    },
    function show(name) {
        'use strict';
        console.log(name);
        console.log(this);

        console.log(this.name);
        console.log(this[2].name);
    }
];

arr.name = 'Maccau';
//var name = 'Hilbert';
arr[3](arr[2].name);
console.log('----------');
var fn = arr[3];
fn(arr[2].name);
