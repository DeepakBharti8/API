class TermsController {
    constructor() {
        this.terms = {
            content: "Initial Terms and Conditions"
        };
    }

    getTerms(req, res) {
        res.status(200).json({
            message: "Terms and Conditions fetched successfully",
            data: this.terms
        });
    }

    updateTerms(req, res) {
        const { content } = req.body;

        if (!content || typeof content !== 'string') {
            return res.status(400).json({
                message: "Invalid input: 'content' is required and must be a string."
            });
        }

        this.terms.content = content;
        res.status(200).json({
            message: "Terms and Conditions updated successfully",
            data: this.terms
        });
    }
}

module.exports = new TermsController();