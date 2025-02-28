function toWeirdCase(string) {
    const words = string.split(' ');
    
    return words
        .map(word => {
            return word
                .split('')
                .map((char, index) => {
                    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
                })
                .join('');
        })
        .join(' '); 
}

