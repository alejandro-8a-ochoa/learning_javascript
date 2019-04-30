
var ObjKoders={ 
    'koders_wrapper':
        {
        'tag':'div',
        'id':'koders_wrapper',
        'clase':'koders'
        },
    'koders':[
        ['p','alejandro','22','M'],
        ['p','alejandro','22','M'],
        ['p','alejandro','22','M']
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
    var structureNode = createStructure(ObjKoders)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}
  
init()