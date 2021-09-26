// const receivesAFunction = function(callback) {
//     return callback()
// }
// const returnsANamedFunction = function(named) {
//     return function () {
        
//     }
// }

// const returnsAnAnonymousFunction = function() {
//     return console.log('Anonymous function')
    
// }
// function run () {
//     console.log('run five miles')
// }
// function weight() {
//     console.log('pump iron')
// }
// function swim() {
//     console.log('swim  40 laps')
// }



// function dailyRoutine(postRunActivity) {
//     run();
//     postRunActivity();
//   }

// dailyRoutine(() => console.log('Stretch! Work that core!'))
// console.log(dailyRoutine())

// function morningRoutine(exercise) {
//     let breakfast;
    
//     if(exercise === weight) {
//         breakfast = 'protein bar'
//     } else if(exercise === swim) {
//         breakfast = 'kale smoothie'
//     } else {
//         breakfast = 'granola'
//     }

//     dailyRoutine(exercise);

//     return function () {
//         console.log(`Nom nom nom this ${breakfast} is delicious`)
//     }
// }

// const afterExercise = morningRoutine(weight)

// console.log(afterExercise()) 

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}