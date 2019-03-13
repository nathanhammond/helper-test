import Helper from '@ember/component/helper';

export function myHelper(input) {
  // return input;

  // const span = document.createElement('span');
  // span.appendChild(document.createTextNode(input));
  // return span;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.createTextNode(input));
  return fragment;
}

export default Helper.helper(myHelper);
