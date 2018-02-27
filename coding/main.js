function start (e) {
  e.dataTransfer.setData('labelName', this.getAttribute('fun-name'))
}

function enter(e) {
  console.log(e)
  this.style.border = "solid red"
  return true
}

function leave (e) {
  this.style.border = ""
  return true
}

function over(e) {
  e.preventDefault();
}

function drop (e) {
  e.stopPropagation()
  this.style.border = ""
  this.innerHTML = ""
  var labelName = e.dataTransfer.getData('labelName')
  var div = document.createElement('div')
  div.innerHTML = labelName
  var func = document.getElementById(labelName)
  var regx = /\((.+)\)/
  var args =regx.exec(func.innerHTML)[1].split(',')
  var argsNum = args.length
  console.log(argsNum)
  this.appendChild(div)
  for(var i = 0; i < argsNum; i++){
      var div = document.createElement('div')
      div.ondragstart = start
      div.ondragenter = enter
      div.ondragleave = leave
      div.ondragover  = over
      div.ondrop = drop
      this.appendChild(div)
  }
  return false
}

function main() {
    var labels = document.getElementsByTagName('span')
    for(var i = 0; i < labels.length; i++){
        var label = labels[i]
        label.ondragstart = start
    }

    var expression = document.getElementById('expression')
    expression.ondragenter = enter
    expression.ondragleave = leave
    expression.ondragover = over
    expression.ondrop = drop
}

main()