
function Addnum(a,b){
  return a + b;
}

describe('Calculator tests', () => {
  test('adding 1 + 2 should return 3', () => {
    expect(Addnum(1, 2)).toBe(3);
  });
});
