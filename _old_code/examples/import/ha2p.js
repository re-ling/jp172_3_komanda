//module.exports = attributeToProperty


export default function attributeToProperty (h) {
  const transform = {
    'class': 'className',
    'for': 'htmlFor',
    'http-equiv': 'httpEquiv'
  };

  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  };
}
