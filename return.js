const age = 91;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}


const krAge = calculateKrAge(age);
console.log(krAge);


const calculator = {
    plus: function (a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    }
}

const result = calculator.plus(5,3);