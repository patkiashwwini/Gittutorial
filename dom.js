//console.dir(document);
console.log(document.domain);
//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent ="Hello";
//headerTitle.innerText ='Goodbye';
//headerTitle.innerHTML = '<h3>hello</h3>';
/*let items =document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor ='yellow';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = 'gray';
}

let li =document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor ='yellow';
for(let i=0;i<items.length;i++){
    li[i].style.backgroundColor = 'gray';
}*/
 let header = document.querySelector('#main header');
 //header.style.borderBottom = 'solid 4px #ccc';

 let input = document.querySelector('input');
  input.value = 'hello world';

  let submit =document.querySelector('input[type = "submit"]');
  submit.value = "SEND";
