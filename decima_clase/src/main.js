var nodeObj = {
  "tag": "div",
    "groups": [
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        },
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        },
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        }
    ]
}


function createElement(tag){
  return document.createElement(tag);
}

function createGroups(groups){
  var element = document.createElement(groups.tag);
  groups.students.forEach(function(student){
      var studentNode = createStudents(student);
      element.appendChild(studentNode);
  });
  return element;
}

function createStudents(students){
  var element = document.createElement(students.tag);
  var studentElement = document.createTextNode(students.name);
  element.appendChild(studentElement);
  return element;
}

function createStructure(nodeObj){
  var schoolNode = createElement(nodeObj.tag);
  nodeObj.groups.forEach(function(groups){
      var groupsNode = createGroups(groups);
      schoolNode.appendChild(groupsNode);
  });
  return schoolNode;
}

function init(){
  var structureNode = createStructure(nodeObj)
  var bodyNode = document.querySelectorAll('body')[0]
  bodyNode.appendChild(structureNode)
}

init()