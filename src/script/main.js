function main() {
  var context = document.createElement('div');
  context.setAttribute('id', 'context');
  document.body.appendChild(context);
}

function load() {
  document.onkeydown = function(e) {
    var keyNum=window.event ? e.keyCode :e.which;
    var context = document.getElementById('context');
    var cache = context.innerHTML;
    switch (parseInt(keyNum)) {
      case 8: 
        cache = cache.substr(0,cache.length - 1);
        console.log(cache);
        break;
      case 13:
        cache += '</br>';
        break;
      case 16:
      case 17:
      case 18:
        break;
      default:
        console.log(e.key);
        cache += e.key;
    }
    context.innerHTML = cache;
  }
}

window.onload = function() {
  main();
  load();
}