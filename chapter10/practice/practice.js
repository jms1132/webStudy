function 381(){
  var list = document.getElementsByTagName('ul')[0];
  var allItems = list..getElementsByTagName('li');

  for( var i = 0, length = allItems.length; i<length ; i++){
    alert(allItems[i].firstChild.data);
  }
}
