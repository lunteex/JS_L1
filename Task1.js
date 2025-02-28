function twoCubes(n) {
    const pairs = []; 
    
    for (let a = 1; a <= Math.cbrt(n); a++) {
        for (let b = a + 1; b <= Math.cbrt(n); b++) { 
            if (n === Math.pow(a, 3) + Math.pow(b, 3)) {
                pairs.push([a, b]); 
            }
        }
    }
    
    if (pairs.length < 2) {
        return false;
    }
    
    const [pair1, pair2] = pairs; 
    const [a, b] = pair1;
    const [c, d] = pair2;
    
    if (a !== c && a !== d && b !== c && b !== d) {
        return true;
    }
    
    return false;
}