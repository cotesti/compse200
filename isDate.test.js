describe('isDate Tests', () => {
  describe('isDate with nodeIsDate', () => {
    const isDate = require('./COMP.SE.200-2023-2024-1-main/src/isDate').default;

    it('returns true for a Date object', () => {
      expect(isDate(new Date())).toBe(true);
    });

    it('returns false for non-Date objects', () => {
      expect(isDate({})).toBe(false);
      expect(isDate('string')).toBe(false);
    });
  });

  describe('isDate without nodeIsDate', () => {
    jest.resetModules();
    jest.mock('./COMP.SE.200-2023-2024-1-main/src/.internal/nodeTypes.js', () => ({
      isDate: undefined
    }));

    const isDate = require('./COMP.SE.200-2023-2024-1-main/src/isDate').default;

    it('returns false for non-object values', () => {
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
    });

    it('returns true for Date objects', () => {
      expect(isDate(new Date())).toBe(true);
    });

    it('returns false for non-Date object-like values', () => {
      expect(isDate({})).toBe(false);
      expect(isDate([])).toBe(false);
    });
  });
});
