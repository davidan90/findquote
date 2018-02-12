export class Quote {
    constructor(quote = null, author = null, category = null) {
        this._quote = quote
        this._author = author
        this._category = category
    }

    get quote() {
        return this._quote
    }

    set quote(quote) {
        this._quote = quote
    }

    get author() {
        return this._author
    }

    set author(author) {
        this._author = author
    }

    get category() {
        return this._category
    }

    set category(category) {
        this._category = category
    }
}
