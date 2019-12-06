const perceptron = (input1, input2, weight1, weight2) => {
    let err = 1, 
        sum = null,
        learningRate = 0.3,
        desiredResult = null, 
        calculatedResult = null;
    
    while(err != 0) {       
        desiredResult = input1 === 1 && input2 === 1 ? 1 : 0;
        sum = (input1 * weight1) + (input2 + weight2)
        calculatedResult = sum < 1 ? 0 : 1;
        
        err = desiredResult - calculatedResult;
        console.log(`Sum: ${sum}`);
        console.log(`Error: ${err}`);
        console.log(`Result: ${calculatedResult}`);

        weight1 = weight1 + (learningRate * input1 * err);
        weight2 = weight2 + (learningRate * input2 * err);
    }

    return calculatedResult;
}

module.exports.perceptron = perceptron;