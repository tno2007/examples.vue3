export const processNode = (
  node: Document | ChildNode,
  tree?: ITreeElement[]
) => {
  // console.log(node);

  let treeElement: ITreeElement = {};

  /*if (tree == null) {
    nodeTree = [];
  } else {
    treeElement.
  }*/

  // do some thing with the node here
  var nodes = node.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    if (!nodes[i]) {
      continue;
    }

    const n = nodes[i] as HTMLElement;

    switch (n.nodeType) {
      case 1:
        break;
      case 3:

        break;
      default:
    }

    if (n.nodeType === 3) {
      if(tree.le)
    }

    if (n.nodeType === 1) {
      // set $el
      let el: ITreeElement = {
        $el: n.tagName,
        attrs: {
          class: n.classList.length ? n.className : null,
        },
        children: [],
      };

      if (!tree) {
        tree = [];
        tree.push(el);
      } else {
        tree.length &&
          tree[0].children &&
          (tree[0].children as ITreeElement[]).push(el);
      }
    }

    if (nodes[i].childNodes.length > 0) {
      processNode(nodes[i], tree);
    }
  }
  return tree;
};

interface ITreeElement {
  $el?: string;
  attrs?: {
    [key: string]: unknown;
  };
  children?: ITreeElement[] | string;
}


const parse = (doc, list, e) => {
var children = e.getChildNodes();
for (int i = 0; i < children.getLength(); i++) {
  Node n = children.item(i);
  if (n.getNodeType() == Node.ELEMENT_NODE) {
    list.add(n.getNodeName());
    parse(doc, list, (Element) n);
  }
}
}