var hundred = document.getElementById("hundred")



function generate() {

    for (let count = 1; count < 101; count++)  {
    
        if (count % 15 === 0) {
            console.log(count + ".   FizzBuzz")
            document.getElementById("hundred").innerText += ("\n" + count + ".   FizzBuzz")
        }
        else if (count % 3 === 0)  {
            console.log(count + ".   Fizz")
            document.getElementById("hundred").innerText += ("\n" + count + ".   Fizz")
        }
        else if (count % 5 === 0) {
            console.log(count + ".   Buzz")
            document.getElementById("hundred").innerText += ("\n" + count + ".   Buzz")
        }
        else {
            console.log(count + ".   " + count)
            document.getElementById("hundred").innerText += ("\n" + count + ".   " + count)
        }
    };

}






function check() {

    var x = document.getElementById("input").value
    
    if (x % 15 === 0) {
        document.getElementById("result").innerText = ("FizzBuzz")
    }
    else if (x % 3 === 0)  {
        document.getElementById("result").innerText = ("Fizz")
    }
    else if (x % 5 === 0) {
        document.getElementById("result").innerText = ("Buzz")
    }
    else {
        document.getElementById("result").innerText = x
    }

}
