import { analyseCellDependancies } from './jsutils';

function containsMany<T>(array: Array<T>, items: Array<T>) {
  expect(array).toHaveLength(items.length);
  for (const item of items) {
    expect(array).toContain(item);
  }
}

function cellWithCode(code: string) {
  const { dependsOn, dependingOn } = analyseCellDependancies(code);
  const expectFuncs = {
    shouldDependOn(cells: Array<string>) {
      containsMany(
        dependsOn,
        cells,
      );
      return expectFuncs;
    },
    shouldBeDependedOnBy(cells: Array<string>) {
      containsMany(
        dependingOn,
        cells,
      );
      return expectFuncs;
    }
  };
  return expectFuncs;
}

describe('jsutils', () => {
  describe('analyseCellDependancies', () => {
    it('should be depended on when assigning to another cell', () => {
      cellWithCode('X1 = 123;')
        .shouldDependOn([])
        .shouldBeDependedOnBy(['X1']);
    });
    it('should depend on another cell when referencing it - in a return statement', () => {
      cellWithCode('return X1;')
        .shouldDependOn(['X1'])
        .shouldBeDependedOnBy([]);
    });
    it('should depend on another cell when referencing it - in a template literal', () => {
      cellWithCode('let test = `${X1}`')
        .shouldDependOn(['X1'])
        .shouldBeDependedOnBy([]);
    });
    it('should not depend on another cell when the cell is mentioned in a comment', () => {
      cellWithCode('// let test = X1;')
        .shouldDependOn([])
        .shouldBeDependedOnBy([]);
    });
    it('should not depend on a cell when the cells id is declared as a variable and not referenced', () => {
      cellWithCode('let X1 = 123;')
        .shouldDependOn([])
        .shouldBeDependedOnBy([]);
    });
    it.skip('should not depend on a cell when the cells id is declared as a variable and then referenced', () => {
      cellWithCode(
        `function test() {
          var X1 = 123;
          return X1;
        }`
      )
        .shouldDependOn([])
        .shouldBeDependedOnBy([]);
    });
    it.skip('should not be a dependency of another cell when the cells id is declared as a variable and then assigned to', () => {
      cellWithCode(
        `function test() {
          var X1 = 123;
          X1 = 321;
        }`
      )
        .shouldDependOn([])
        .shouldBeDependedOnBy([]);
    });
  });
});
