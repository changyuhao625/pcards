// Unit tests for utility functions

describe('getLastPathValue', function () {
  function getLastPathValue(pathText) {
    if (pathText && pathText.length > 0) {
      var pathArray = pathText.split('\\');
      return pathArray[pathArray.length - 1];
    } else {
      return pathText;
    }
  }

  it('returns last segment for a normal path', function () {
    expect(getLastPathValue('a\\b\\c')).toBe('c');
  });

  it('returns the original string when there is no separator', function () {
    expect(getLastPathValue('abc')).toBe('abc');
  });

  it('returns empty string when path is empty', function () {
    expect(getLastPathValue('')).toBe('');
  });

  it('throws when path is undefined', function () {
    expect(function () { getLastPathValue(undefined); }).toThrow();
  });
});

describe('A suite', function () {
    it('contains spec with an expectation', function () {
        expect(true).toBe(true);
    });
});
