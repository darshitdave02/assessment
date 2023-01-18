const calculateScore = (scores) => {


    if (!Array.isArray(scores)) {
        throw new Error('Input is not an array');
    }

    if (!scores.every(element => typeof element === 'number')) {
        throw new Error('Array should consist of numbers only');
    }

    if (!(scores.length === 20 || scores.length === 21)) {
        throw new Error('Invalid Input');
    }

    if (scores.length === 21 && (scores[18] + scores[19] < 10)) {
        throw new Error('Invalid Input');
    }



    let finalScore = 0;

    for (let i = 0; i < scores.length;) {
        if (i < 18) {
            if (scores[i] === 10) {
                finalScore += scores[i] + scores[i + 1] + scores[i + 2];
                i++;
            }

            else if (scores[i] + scores[i + 1] === 10) {
                finalScore = scores[i] + scores[i + 1] + scores[i + 2];
                i += 2;
            }

            else {
                finalScore += scores[i] + scores[i + 1];
                i += 2;
            }
        }
        else {
            finalScore += scores[i];
            i++;
        }
    }

    return finalScore;




}


let games = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

const bestScore = (games) => {

    let array = [];
    array = games.map((game) => {
        let result = calculateScore(game);
        return result;
    })
    console.log(array);

    return Math.max(...array);

}

console.log(bestScore(games));

// console.log(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
// console.log(calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
// console.log(calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))