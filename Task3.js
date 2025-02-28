function whatCentury(year) {
    const century = Math.floor((+year - 1) / 100) + 1;
    
    if (century % 10 === 1 && century % 100 !== 11) return century + "st";
    if (century % 10 === 2 && century % 100 !== 12) return century + "nd";
    if (century % 10 === 3 && century % 100 !== 13) return century + "rd";
    return century + "th";
}
