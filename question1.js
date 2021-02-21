function password() {
var userInput = document.getElementById("pass").value;
var last = userInput.slice(12,16)
document.write("**********" + last);
}


function wordCheck() {
    var userInput = document.getElementById("word").value;
    
    var letter_Count = 0;
    for (var position =0  ; position < userInput.length; position++) {
        if (userInput.search("potato")) 
      {
      letter_Count += 1;
      }
  }
  document.write(letter_Count);
    }



    function DoubleString() {
        var str = document.getElementById("twoStr").value;
        var two = str.toString();
          document.write(two); 
    }


    function EmpSalary() {
        var sal = document.getElementById('salary').value;
        var show = "";
        if (sal <= 10000) {
            show = "Basic Salary = " + sal + " HRA = 20%, DA = 80%";
        } else if (sal <= 20000) {
            show = "Basic Salary = " + sal + " HRA = 25%, DA = 90%";
        } else if (sal > 20000) {
            show = "Basic Salary = " + sal + " HRA = 30%, DA = 95%";
        }
       document.write(show);
    }



    function MeterUnits() {
        var unit = document.getElementById('units').value;
        var show = "";
        if (unit <= 50) {
            show = unit * 0.2 * 0.5;
        } else if (unit >= 51 && unit <= 100) {
            show = unit * 0.2 * 0.75;
        } else if (unit >= 101 && unit <= 200) {
            show = unit * 0.2 * 1.20;
        } else if (unit > 250) {
            show = unit * 0.2 * 1.50;
        }
        document.write(show);
    }


    function Sum() {
        var unit = document.getElementById('sum').value;
        var show = "";
        for (let index = 0; index < unit; index++) {
            if (unit[index]%3 === 0 || unit[index]%5 === 0) {
                var al = unit[index];
                // al++;
            }
            var all = al + al;
        }
        show = all;
        
        document.write(show);
    }



    function findChar() {
        var userInput = document.getElementById('user').value;
        var chk = userInput.match(/c/g);
        document.write(chk);

    }


    



