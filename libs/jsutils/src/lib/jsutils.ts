import { parse, Node, Options } from 'acorn';
import { fullAncestor, FullAncestorWalkerCallback } from 'acorn-walk';

const PARSE_OPTIONS: Options = {
  ecmaVersion: 'latest',
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
};

function validateCellId(id: string) {
  return /^[A-Z]+\d+$/gm.test(id);
}

function getNodeText(code: string, node: Node) {
  return code.substr(node.start, node.end - node.start);
}

function getParent<T>(ancestors: T[]) {
  return ancestors[ancestors.length - 2];
}

export function analyseCellDependancies(code: string) {
  const dependsOn: Array<string> = [];
  const dependingOn: Array<string> = [];

  const baseNode = parse(code, PARSE_OPTIONS);

  function analyseVariablePattern(node: Node, ancestors: Node[], type: string) {
    const nodeText = getNodeText(code, node);
    if (!validateCellId(nodeText)) return;
    if (getParent(ancestors).type === 'AssignmentExpression') {
      dependingOn.push(nodeText);
    }
  }

  function analyseIdentifier(node: Node, ancestors: Node[], type: string) {
    const nodeText = getNodeText(code, node);
    if (!validateCellId(nodeText)) return;
    dependsOn.push(nodeText);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function analyseNode(...[node, state, ancestors, type]: Parameters<FullAncestorWalkerCallback<unknown>>) {
    switch (type) {
      case 'VariablePattern':
        return analyseVariablePattern(node, ancestors, type);
      case 'Identifier':
        return analyseIdentifier(node, ancestors, type);
    }
  }

  fullAncestor(
    baseNode,
    analyseNode,
  );

  return {
    dependsOn,
    dependingOn,
  }
}
