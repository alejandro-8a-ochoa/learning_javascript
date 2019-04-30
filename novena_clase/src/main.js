/* document.write('hola Diana! (°-°)/'); */
/* document.getElementsByTagName('body')[0].innerHTML='<h1>hello world</h1>' */

/* console.log(document.getElementsByTagName('div')[0])
console.log(document.getElementsByClassName('even') )
console.log( document.getElementsByTagName('li')[3] );
console.log( document.getElementsByTagName('ul')[0] ) */

/* 
console.log( document.querySelectorAll('div > ul > .even') );
console.log( document.querySelectorAll('div > ul > li')[3] );
console.log( document.querySelectorAll('div > ul') ); */

//console.log( document.querySelectorAll('div > ul') )



/* document.querySelectorAll('ul').forEach(function(element){

    element.style.border= '2px solid red'
})

var liS=document.getElementsByTagName('li');


for(var x=0;x< liS.length ;x++){
    liS[x].style.border= '2px solid #8a8a8a'
} */



/* var nodeObj = {
    'tag': 'div',
    'childs' : [
        {
            'tag' : 'h2',
            'text': 'Hello'  
        },
        {
            'tag' : 'h2',
            'text': 'World'  
        }
    ]
}

var nodeFather = document.createElement(nodeObj.tag);


var children = nodeObj.childs;

children.forEach(function(element){

     var nodeChildren =document.createElement(element.tag);
     var nodeChildren_text =document.createTextNode(element.text);
      nodeChildren.appendChild(nodeChildren_text);    
     nodeFather.appendChild(nodeChildren);  
});


document.innerHTML= nodeFather; */
var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "h2",
            "text": "Hello"
        },
        {
          "tag": "h2",
          "text": "World"
        },
        {
          "tag": "p",
          "text": "holi"
        },
        {
          "tag": "span",
          "text": "ontas?"
        }
    ]
  }
  
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag)
    var textElement = document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child)
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()


