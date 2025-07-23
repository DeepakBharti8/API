class Terms {
    constructor(content) {
        this.content = content || "No terms and conditions available.";
    }

    getTerms() {
        return this.content;
    }

    updateTerms(newContent) {
        if (newContent && typeof newContent === 'string') {
            this.content = newContent;
            return true;
        }
        return false;
    }
}

module.exports = Terms;