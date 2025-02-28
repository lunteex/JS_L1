function findMissing(list) {
    const n = list.length + 1;
    const expectedSum = (n * (list[0] + list[list.length - 1])) / 2;
    const actualSum = list.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

