// Your tests here
import { isPalindrome } from '../utils'

describe("isPalindrome", () => {
    it("calculates double the points if the word is a palindrome", () => {
        //arrange
        const word = "mom"
        const check = isPalindrome(word)

        //assert
        expect(check).toBe(true)
    })
})