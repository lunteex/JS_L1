function expandedForm(num) {
    const digits = String(num).split('');
    
    let result = [];
    
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
            const power = digits.length - i - 1;
            const term = digits[i] + '0'.repeat(power); 
            result.push(term);
        }
    }
    
    return result.join(' + ');
}
