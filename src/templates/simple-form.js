module.exports = function (d) {
  return function (json = {}, params = {}) {
    return d('node', {"scope":"fest","type":"template","name":"fest:template"}, {"xmlns:fest":"http://fest.mail.ru","context_name":"json"}, null, [d('node', {"scope":"dom","name":"div","type":"div"}, {"class":"container"}, null, [d('node', {"scope":"dom","name":"form","type":"form"}, {"action":"./","method":"GET"}, null, [d('node', {"scope":"dom","name":"fieldset","type":"fieldset"}, {}, null, [d('node', {"scope":"dom","name":"legend","type":"legend"}, {}, null, [d('text', null, {}, null, ['Person'])]),d('node', {"scope":"dom","name":"p","type":"p"}, {}, null, [d('text', null, {}, null, ['Lorem ipsum dolor sit amet,']),d('node', {"scope":"dom","name":"strong","type":"strong"}, {}, null, [d('text', null, {}, null, ['consectetur adipisicing elit'])]),d('text', null, {}, null, [', sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'])]),d('node', {"scope":"dom","name":"div","type":"div"}, {}, null, [d('node', {"scope":"dom","name":"label","type":"label"}, {}, null, [d('node', {"scope":"dom","name":"input","type":"input"}, {"type":"text","name":"nombre","placeholder":"Nombre"}, null, [])])]),d('node', {"scope":"dom","name":"div","type":"div"}, {}, null, [d('node', {"scope":"dom","name":"label","type":"label"}, {}, null, [d('node', {"scope":"dom","name":"input","type":"input"}, {"type":"text","name":"apellido","placeholder":"Apellido"}, null, [])])]),d('node', {"scope":"dom","name":"div","type":"div"}, {}, null, [d('node', {"scope":"dom","name":"label","type":"label"}, {}, null, [d('node', {"scope":"dom","name":"input","type":"input"}, {"type":"text","name":"segundo_apellido","placeholder":"Segundo apellido"}, null, [])])])]),d('node', {"scope":"fest","type":"if","name":"fest:if"}, {"test":"json.done"}, null, [d('node', {"scope":"dom","name":"h1","type":"h1"}, {}, null, [d('text', null, {}, null, ['done'])])])])])]);
  };
};