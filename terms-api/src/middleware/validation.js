function validateTerms(req, res, next) {
    const { content } = req.body;

    if (!content || typeof content !== 'string' || content.trim() === '') {
        return res.status(400).json({ message: 'Invalid input: content is required and must be a non-empty string.' });
    }

    next();
}

module.exports = validateTerms;