// Your code here
export function isPalindrome(word) {
    let forward = word.toLowerCase()
    let reverse = forward.split("").reverse().join("")

    if (word !== "") {
        return forward === reverse
    } else {
        return false
    }
}
