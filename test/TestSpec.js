describe('getLastPathValue', function () {
    function getLastPathValue(pathText) {
        if (!pathText) {
            return '';
        }
        if (pathText.length === 0) {
            return pathText;
        }
        var pathArray = pathText.split('\\');
        return pathArray[pathArray.length - 1];
    }

    it('returns the last segment for a defined path', function () {
        expect(getLastPathValue('a\\b\\c')).toBe('c');
    });

    it('returns an empty string for undefined input', function () {
        expect(getLastPathValue(undefined)).toBe('');
    });
});