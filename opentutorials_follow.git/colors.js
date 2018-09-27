function nightAndDay(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    document.querySelector('a').style.color = 'powderblue';
    self.value = 'day';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while( i < alist.length) {
      alist[i].style.color = 'yellow';
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    document.querySelector('a').style.color = 'blue';
    self.value = 'night';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while( i < alist.length) {
      alist[i].style.color = 'blue';
      i = i + 1;
    }
  }
}
