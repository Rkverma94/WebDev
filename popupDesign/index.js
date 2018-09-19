window.onload=function(){
  with(document){
    var nav = getElementById('bar');
    var flag = true;
    var btn = nav.getElementsByClassName('bar');
    nav.addEventListener('click', function(e){
      if(e.target.className === 'bar'){
        for(var i=0;i<btn.length;i++){
          if(btn[i].className === 'bar active'){
            btn[i].classList.remove('active');
          }
        }
        e.target.classList.add('active');
      }
    });


    var wd4 = window.screen.width/12;
    var hd4 = (window.screen.height/100)*15;
    var wd3 = wd4/2;
    var hd3 = hd4/2;
    var d4 = getElementsByClassName('d4');
    var d3 = getElementsByClassName('d3');
    for(var i=0;i<d4.length; i++){
      d4[i].style.width = wd4+"px";
      d4[i].style.height = hd4+"px";

    }
    for(var i=0;i<d3.length;i++){
      d3[i].style.width = wd3+"px";
      d3[i].style.height = hd3+"px";
    }

    var content = getElementById('content');
    content.addEventListener('click',function(e){
      if(e.target!==e.currentTarget){
        if(e.target.className === 'd4' || e.target.className === 'd3'){
          console.log(e.target.className);
          for(var i=0; i<d4.length;i++){
            if(d4[i].className === 'd4 clicked'){
              d4[i].classList.remove('clicked');
            }
          }
          for(var i=0; i<d3.length;i++){
            if(d3[i].className === 'd3 clicked'){
              d3[i].classList.remove('clicked');
            }
          }
          e.target.classList.add('clicked');
        }
      }
      e.stopPropagation();
    });
  }
}
