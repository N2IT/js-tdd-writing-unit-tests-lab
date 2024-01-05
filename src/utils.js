// Your code here
export function isPalindrome(word) {
    let forward = word.toLowerCase()
    let reverse = forward.split("").reverse().join("")

    if (word !== "") {
        return forward === reverse
    } else if(/^[A-Za-z]+$/.test(word)) {
        throw new error ("Hey what the fuck?")
    }
}
