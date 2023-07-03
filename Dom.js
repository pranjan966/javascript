// asscessing document object//
// console.dir(document)
// console.log(document.domain)//
// console.log(document.body)
// console.log(document.ELEMENT_NODE)
// console.log(document.title)
// document.title = "123"
// console.log(document.all[6])
// console.log(document.forms)


// Methods to query DOM//
//getElementById//
// console.log(document.getElementById('header-title'))
// const doc1 = document.getElementById('header-title')
// const header = document.getElementById('main-header');
// console.log(doc)

// doc.textContent = 'Hello'
// console.log(doc.innerText)
// doc.innerHTML = '<h3>hello</h3>'
// header.style.borderBottom = 'solid 3px #000';

//Selector getelementbyclassname//
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'HELLO';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red'
// // items.style.backgroundColor = "#f4f4f4"
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }
// // selection by tag name//
// const tagname1 = document.getElementsByTagName('li')
// console.log(tagname1[2].innerText = 'mast')
// for (let i = 0; i < tagname1.length; i++) {
//     tagname1[i].style.backgroundColor = '#ccc';

// const newlii = document.getElementsByClassName('newli')
// console.log(newlii.style.color = 'red')
const li = document.getElementsByTagName('li')
console.log(li)
li[4].style.color = 'red'



// }
// queary selector//
// const header1 = document.querySelector('#main-header');
// header1.style.borderbottom = '#ccc'
//

// const listItems = document.querySelector('list-group-item')
// listItems.computedStyleMap.color = 'red'




