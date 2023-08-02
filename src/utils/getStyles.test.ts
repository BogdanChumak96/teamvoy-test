const { getTypeStyles } = require('./getStyles');

describe('getTypeStyles', () => {
    it('should return styles for "normal" type', () => {
        const result = getTypeStyles('normal');
        expect(result).toEqual({
            backgroundColor: "#A8A77A",
            color: "#ffffff",
        });
    });``

    it('should return styles for "rock" type', () => {
        const result = getTypeStyles('rock');
        expect(result).toEqual({
            backgroundColor: "#B6A136",
            color: "#ffffff",
        });
    });

    // Add similar test cases for other types...

    it('should return default styles for unknown type', () => {
        const result = getTypeStyles('unknown_type');
        expect(result).toEqual({
            backgroundColor: "#CCCCCC",
            color: "#000000",
        });
    });
});
