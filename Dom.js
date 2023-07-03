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
// // items.style.backgroundColor = "#f4f4f4" = 'red'



// }
// queary selector//
// const header1 = document.querySelector('#main-header');
// header1.style.borderbottom = '#ccc'
//

// const listItems = document.querySelector('.list-group-item:nth-child(2)')
// listItems.style.backgroundColor = 'green'
// const listItem = document.querySelector('.list-group-item:nth-child(3)')
// listItem.style.display = "none"


// quearyselectorall
// const items = document.querySelectorAll(".list-group-item")
// console.log(items)
// items[1].style.color = "#00FF00"
// const itemall = document.querySelectorAll(".list-group-item:nth-child(odd)")
// for (let i = 0; i < items.length; i++) {
//     itemall[i].style.backgroundColor = 'green'


//     //aa
// }




// const li = document.getElementsByTagName('li')
// li[4].style.color = 'red'



// Traversing DOM
const listItems = document.querySelector('#items')
console.log(listItems)