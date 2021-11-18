"use strict";
var e1 = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date,
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privilages' in emp) {
        console.log("privilages" + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log("startDate" + emp.startDate);
    }
}
printEmployeeInformation({ name: 'manu', startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('運転中');
    };
    return Car;
}());
var Track = (function () {
    function Track() {
    }
    Track.prototype.drive = function () {
        console.log('トラックを運転中');
    };
    Track.prototype.loadCargo = function (amount) {
        console.log('荷物を載せています・・・' + amount);
    };
    return Track;
}());
var v1 = new Car();
var v2 = new Track();
function useVehcle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Track) {
        vehicle.loadCargo(1000);
    }
}
useVehcle(v1);
useVehcle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度: ' + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
//# sourceMappingURL=app.js.map