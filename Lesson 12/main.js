
// Свойство tagName есть только у элементов Element.
// Свойство nodeName определено для любых узлов Node:

// старый способ
// elem.nodeType == 1 для узлов-элементов,
// elem.nodeType == 3 для текстовых узлов,
// elem.nodeType == 9 для объектов документа,

// Свойство data

// Атрибуты

// В HTML у тегов могут быть атрибуты. Когда браузер парсит HTML, 
// чтобы создать DOM-объекты для тегов, он распознаёт стандартные атрибуты и создаёт DOM-свойства для них.
// Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство. 
// Но этого не происходит, если атрибут нестандартный.
// Разные значения input.checked  div.style  button.id
// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

// -------------------------------------


// innerHTML
let div = document.querySelector('#div');
// console.log(div.innerHTML);
// div.innerHTML += "<div>Привет</div>";
// div.innerHTML += "<div>Как дела?</div>";

// chatDiv.innerHTML += "<div>Привет</div>";
// chatDiv.innerHTML += "<div>Как дела?</div>";
// Старое содержимое удаляется.
// На его место становится новое значение innerHTML (с добавленной строкой).

// Свойство outerHTML содержит HTML элемента целиком. Это как innerHTML плюс сам элемент.
// Мы можем писать в elem.outerHTML, но надо иметь в виду, что это не меняет элемент, в который мы пишем. 
// Вместо этого создаётся новый HTML на его месте. 
// Мы можем получить ссылки на новые элементы, обратившись к DOM.
// div.outerHTML = "<div>Привет</div>";
// console.log(div.outerHTML);

// Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
// С innerHTML вставка происходит «как HTML», со всеми HTML-тегами.
// С textContent вставка получается «как текст», все символы трактуются буквально.
// console.log(div.textContent);
// div.textContent="<b>Привет</b>"
// div.innerHTML +="<b>Привет</b>"
// console.log(div.className);

// div.className = "testNew";

// можем работать как со строкой полного класса, используя className, 
// так и с отдельными классами, используя classList. Выбираем тот вариант, который нам удобнее.

// Методы classList:
console.log(div.className);
div.classList.remove('test')
console.log(div.className, div.classList.contains('test'));

// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
// style
// Свойство elem.style – это объект, который соответствует тому, что написано в атрибуте "style". 
// Установка стиля elem.style.width="100px" работает так же, как наличие в атрибуте style строки width:100px.
// div.style.color = "red";
// console.log(div.style);

// Свойство innerHTML vs createElement
// https://repl.it/repls/SpectacularIllustriousAdware#main.js

// Изменение дом
var p = document.createElement('p');
p.textContent = "Paragraph"
div.replaceWith(p);


// новый методы!
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

// Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. 
// Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.