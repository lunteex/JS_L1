function primeFactors(n) {
    let factors = {};
    let result = "";
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors[i] = (factors[i] || 0) + 1; 
            n = n / i;
        }
    }
    
    for (let prime in factors) {
        if (factors[prime] === 1) {
            result += `(${prime})`;          
        } else {
            result += `(${prime}**${factors[prime]})`; 
        }
    }
    
    return result;
}

