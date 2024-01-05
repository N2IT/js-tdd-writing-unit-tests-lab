// Your tests here
import { isPalindrome } from '../utils'

describe("isPalindrome", () => {
    it("calculates double the points if the word is a palindrome", () => {
        //arrange
        const word = "below"
        const check = isPalindrome(word)

        //assert
        expect(check).toBe(false)
    })

    it("handles words that are combination of uppercase and lowercase letters", () => {
        //arrange
        const word = "RacECar"
        const check = isPalindrome(word)

        //assert
        expect(check).toBe(true)
    })

    it("returns false for an empty string", () => {
        //arrange
        const word = ""
        const check = isPalindrome(word)

        //assert
        expect(check).toBe(false)
    })
})
