class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    public ShowStudentA(aa: Student) {
        Start();
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {

    alert("Hello, " + person.firstName + " " + person.lastName)
    //return "Hello, " + person.firstName + " " + person.lastName;
}
 function ShowClick() {
    $('#aaa').text("2222");
    let usera = new Student("Jan222e", "M22.", "User33");
    alert("Hello, " + usera.firstName + " " + usera.lastName)
}
let user = new Student("Jane", "M.", "User");
function Start() {
    var mode: any = new Object();
    mode.aaa = "2343";
    mode.bbb = "modemodemode";
    var app = new Vue({
        el: '#app',
        data: {
            message: mode,
            text: mode.aaa
        },
         methods: {
             change: function () {
                 var obj = new Student("asdas","adsfasdf","sdfgs");
                 obj.ShowStudentA(obj);
             },
             abc: function () {
                 var obj = new Student("asdas", "adsfasdf", "sdfgs");
                 obj.ShowStudentA(obj);
             }
        }
    })
}
//Start();

//greeter(user);