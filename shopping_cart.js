var ham_counter, chicken_counter, veg_counter, rib_counter, beef_counter, coke_counter, stoney_counter, grapejuice_counter, applejuice_counter, orangejuice_counter;



document.getElementById('add_ham').addEventListener('click', (event) => {
  let element_added_items = document.getElementById('added_items');
  let new_li = document.createElement('li');
  new_li.innerText = 'Ham and cheese beef burger';

  element_added_items.appendChild(new_li);
  let element_ham_counter = document.getElementById('ham_counter');
  ham_counter = (typeof ham_counter === 'number' ? ham_counter : 0) + 1;
  element_ham_counter.innerText = ham_counter;
  element_ham_counter.style.color = '#663366';

});

document.getElementById('add_chicken').addEventListener('click', (event) => {
  let element_added_items2 = document.getElementById('added_items');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'double chicken burger';

  element_added_items2.appendChild(new_li2);
  let element_chicken_counter = document.getElementById('chicken_counter');
  chicken_counter = (typeof chicken_counter === 'number' ? chicken_counter : 0) + 1;
  element_chicken_counter.innerText = chicken_counter;
  element_chicken_counter.style.color = '#663366';

});

document.getElementById('add_vegetarian').addEventListener('click', (event) => {
  let element_added_items3 = document.getElementById('added_items');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'vegetarian burger';

  element_added_items3.appendChild(new_li3);
  let element_veg_counter = document.getElementById('veg_counter');
  veg_counter = (typeof veg_counter === 'number' ? veg_counter : 0) + 1;
  element_veg_counter.innerText = veg_counter;
  element_veg_counter.style.color = '#663366';

});

document.getElementById('add_rib').addEventListener('click', (event) => {
  let element_added_items4 = document.getElementById('added_items');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'rib burger';

  element_added_items4.appendChild(new_li4);
  let element_rib_counter = document.getElementById('rib_counter');
  rib_counter = (typeof rib_counter === 'number' ? rib_counter : 0) + 1;
  element_rib_counter.innerText = rib_counter;
  element_rib_counter.style.color = '#663366';

});

document.getElementById('add_beef').addEventListener('click', (event) => {
  let element_added_items5 = document.getElementById('added_items');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'beef burger';

  element_added_items5.appendChild(new_li5);
  let element_beef_counter = document.getElementById('beef_counter');
  beef_counter = (typeof beef_counter === 'number' ? beef_counter : 0) + 1;
  element_beef_counter.innerText = beef_counter;
  element_beef_counter.style.color = '#663366';

});

document.getElementById('coke').addEventListener('click', (event) => {
  let element_added_items6 = document.getElementById('added_items');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Coke Zero 400ml';

  element_added_items6.appendChild(new_li6);
  let element_coke_counter = document.getElementById('coke_counter');
  coke_counter = (typeof coke_counter === 'number' ? coke_counter : 0) + 1;
  element_coke_counter.innerText = coke_counter;
  element_coke_counter.style.color = '#663366';

});

document.getElementById('stoney').addEventListener('click', (event) => {
  let element_added_items7 = document.getElementById('added_items');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Stoney Zero 400ml';

  element_added_items7.appendChild(new_li7);
  let element_stoney_counter = document.getElementById('stoney_counter');
  stoney_counter = (typeof stoney_counter === 'number' ? stoney_counter : 0) + 1;
  element_stoney_counter.innerText = stoney_counter;
  element_stoney_counter.style.color = '#663366';

});

document.getElementById('grape_juice').addEventListener('click', (event) => {
  let element_added_items8 = document.getElementById('added_items');
  let new_li8 = document.createElement('li');
  new_li8.innerText = 'Grape Juice 440ml';

  element_added_items8.appendChild(new_li8);
  let element_grapejuice_counter = document.getElementById('grapejuice_counter');
  grapejuice_counter = (typeof grapejuice_counter === 'number' ? grapejuice_counter : 0) + 1;
  element_grapejuice_counter.innerText = grapejuice_counter;
  element_grapejuice_counter.style.color = '#663366';

});

document.getElementById('apple_juice').addEventListener('click', (event) => {
  let element_added_items9 = document.getElementById('added_items');
  let new_li9 = document.createElement('li');
  new_li9.innerText = 'Apple Juice 440ml';

  element_added_items9.appendChild(new_li9);
  let element_applejuice_counter = document.getElementById('applejuice_counter');
  applejuice_counter = (typeof applejuice_counter === 'number' ? applejuice_counter : 0) + 1;
  element_applejuice_counter.innerText = applejuice_counter;
  element_applejuice_counter.style.color = '#663366';

});

document.getElementById('orange_juice').addEventListener('click', (event) => {
  let element_added_items10 = document.getElementById('added_items');
  let new_li10 = document.createElement('li');
  new_li10.innerText = 'Orange Juice 440ml';

  element_added_items10.appendChild(new_li10);
  let element_orangejuice_counter = document.getElementById('orangejuice_counter');
  orangejuice_counter = (typeof orangejuice_counter === 'number' ? orangejuice_counter : 0) + 1;
  element_orangejuice_counter.innerText = orangejuice_counter;
  element_orangejuice_counter.style.color = '#663366';

});

var image_list;


image_list = ['https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', 'https://images.unsplash.com/photo-1619250921784-7b2b5070e498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'];
let element_images = document.getElementById('images');
element_images.setAttribute("src", image_list[0]);


document.getElementById('next').addEventListener('click', (event) => {
  image_list.push(image_list.shift());
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", image_list[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  image_list.unshift(image_list.pop());
  let element_images3 = document.getElementById('images');
  element_images3.setAttribute("src", image_list[0]);

});