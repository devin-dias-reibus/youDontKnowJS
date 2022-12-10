// fill in this function so the tests pass

function isPalindrome(str) {
//return a boolean to show of the word is spelt the same backwards as forwards then run the file and you should see all passes
}



const answerBank = {
    answers: [isPalindrome("racecar"),
    !isPalindrome("Braves"),
    !isPalindrome("redsox"),
    isPalindrome("lulilul")],
    logPass:  function(){this.answers.forEach(bool => console.log(bool ? "pass" : "fail"))}
}
answerBank.logPass()