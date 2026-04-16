(function(){
  var path=(location.pathname||"").toLowerCase();
  var file=path.split("/").pop() || "index.html";
  var links=document.querySelectorAll('[data-nav]');
  links.forEach(function(a){
    var href=(a.getAttribute('href')||"").toLowerCase();
    if(href===file){a.classList.add('active');}
  });
  var y=document.getElementById('year');
  if(y){y.textContent=String(new Date().getFullYear());}
})();
