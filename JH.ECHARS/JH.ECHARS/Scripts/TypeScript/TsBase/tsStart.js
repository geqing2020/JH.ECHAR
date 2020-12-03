var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.ShowStudentA = function (aa) {
        Start();
    };
    return Student;
}());
function greeter(person) {
    alert("Hello, " + person.firstName + " " + person.lastName);
    //return "Hello, " + person.firstName + " " + person.lastName;
}
function ShowClick() {
    $('#aaa').text("2222");
    var usera = new Student("Jan222e", "M22.", "User33");
    alert("Hello, " + usera.firstName + " " + usera.lastName);
}
var user = new Student("Jane", "M.", "User");
function Start() {
    var mode = new Object();
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
                var obj = new Student("asdas", "adsfasdf", "sdfgs");
                obj.ShowStudentA(obj);
            },
            abc: function () {
                var obj = new Student("asdas", "adsfasdf", "sdfgs");
                obj.ShowStudentA(obj);
            }
        }
    });
}
//Start();
//greeter(user);
//# sourceMappingURL=tsStart.js.map