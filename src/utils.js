// Your code here
export function isPalindrome(word){
    let forward = word
    let reverse = word.split("").reverse().join("")
    console.log(forward)
    console.log(reverse)

    if(forward === reverse){
        return true
    } else {
        return false
    }
}
