/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  lovers =preferences;
    let result = 0;

    for (let i = 0; i < lovers.length; i++) {
        let current = lovers[i];
        let next = lovers[current - 1];

        if(current === next) continue;

        for (let j = 0; j < 2; j++) {
            current = next;
            next = lovers[current - 1];
        }

        if (current === i + 1) {
            result++;
        }
    }

    return result / 3;


};
