// Problem 1
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

/**
 * Example:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

//solution 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merged = '';
    let a = 0;
    let b = 0

    while (a < word1.length || b < word2.length) {
        if (a < word1.length) {
            merged += word1[a++]
        }
        if (b < word2.length) {
            merged += word2[b++]
        }
    }
    return merged;
};

mergeAlternately('abc', 'pqr')