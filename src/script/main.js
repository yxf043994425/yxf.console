function main() {
  var context = document.createElement('div');
  context.setAttribute('id', 'context');
  document.body.appendChild(context);
}

function load() {
  var context = document.getElementById('context');
  var cache = [];
  document.onkeydown = function(e) {
    console.log(e);
    var current = document.getElementById('current');
    if (!current) {
      current = document.createElement('div');
      current.setAttribute('id', 'current');
      context.appendChild(current);
    }
    var keyNum=window.event ? e.keyCode :e.which;
    var line = current.innerHTML;
    switch (parseInt(keyNum)) {
      case 8:
        if (cache.length > 0) {
          cache.length--;
        }
        line = cache.join('');
        break;
      case 13:
        var result = eval(line);
        cache.push('</br>');
        line += '</br>';
        line += result;
        break;
      case 32:
        cache.push('&nbsp;');
        line += '&nbsp;';
      case 37:
        break;
      case 38:
        break;
      case 39:
        break;
      case 40:
        break;
      case 9:
        cache.push('&nbsp;&nbsp;');
        line += '&nbsp;';
        line += '&nbsp;';
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 91:
      case 92:
      case 93:
        break;
      default:
        cache.push(e.key);
        line += e.key;
    }
    current.innerHTML = line;
    return false;
  }

  document.onkeyup = function(e) {
    console.log(e);

  }
}

window.onload = function() {
  main();
  load();
}