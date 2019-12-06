const mod = require('./perceptron');

(() => {
    let input1 = null, input2 = null, 
        weight1 = null, weight2 = null;

    input1 = parseFloat(1);
    weight1 = Math.random();

    input2 = parseFloat(0);
    weight2 = Math.random();
    
    mod.perceptron(input1, input2, weight1, weight2);
})();