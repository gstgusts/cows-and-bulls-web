class CowsAndBulls {
    constructor() {
        this.numberToGuess = 0;
        this.results = [];
        this.restart();
    }

    static RETRY_MAX_COUNT = 10;

    restart() {
       this.results = [];
       this.numberToGuess = this.getNumber();
       console.log(this.numberToGuess);
    }

    getNumber() {
        return Math.floor((Math.random() * (9999 - 1000)) + 1000);
    }

    isGameOver() {
        return CowsAndBulls.RETRY_MAX_COUNT == this.results.length;
    }

    getGuessCount() {
        return this.results.length;
    }

    guess(number) {
       if(this.isGameOver()) {
           return null;
       }

       let bulls = 0;
       let cows = 0;

       let numberAsString = number + '';

       let numberArray = numberAsString.split('');
       let numberToGuessArray = this.numberToGuess.toString().split('');

        for (let i = 0; i < numberArray.length; i++) {
            if(numberArray[i] === numberToGuessArray[i]) {
                ++bulls;

                numberArray[i] = "";
                numberToGuessArray[i] = "";

                continue;
            }            
        }

        for (let i = 0; i < numberArray.length; i++) {
           if(numberArray[i] === '') {
               continue;
           }    
           
           for (let j = 0; j < numberToGuessArray.length; j++) {
                if(numberArray[i] === numberToGuessArray[j]) {
                    ++cows;
                    numberToGuessArray[j] = '';
                    break;
                }              
           }
        }

        let result = new CowsAndBullsResult(number, bulls, cows);

        this.results.push(result);

        return result;
    }
}