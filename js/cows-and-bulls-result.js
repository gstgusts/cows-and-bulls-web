class CowsAndBullsResult {
    constructor(number, bulls, cows) {
        this._number = number;
        this._bulls = bulls;
        this._cows = cows;
    }

    get number() {
        return this._number;
    }

    get bulls() {
        return this._bulls;
    }

    get cows() {
        return this._cows;
    }
}