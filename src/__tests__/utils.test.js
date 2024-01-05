// Your tests here
import { isPalindrome } from '../utils'

describe("isPalindrome", () => {
    it("returns true if the word is a palindrome", () => {
        //arrange
        const word = "mom"
        const check = isPalindrome(word)

        //assert
        expect(check).toBe(true)
    })

    it("returns false if the word is not a palindrome", () => {
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
        expect(() => isPalindrome(word.toThrow())
    )})

    it("throws and error if input contains any non-alphabetic characters", () => {
        
        const word = "what??"
        
        expect(() => isPalindrome(word).toThrow())

    })
})
