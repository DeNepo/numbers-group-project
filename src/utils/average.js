/**
 * Calculates the average of a list of numbers.
 *
 * @param {number[]} [nums=[]] - The numbers to average.
 * @returns {number} The average of all numbers.
 */
export const average = (nums = []) => {
    let averageN = 0;
    for (const num of nums){
    averageN += num / nums.length;
}
return averageN;
};
