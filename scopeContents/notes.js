/*++++++++++++++ON SCOPE+++++++++++++++++++++++++++++
-SCOPE in JS refers to the availability of variables and functions. 

-For example, variables that are set within a given function definition are available within that function,
but not inside of other named functions.

-At a high level, functions have access to variables and other functions set inside and outside of themselves,
but not to variables set inside of other functions.


================TYPES OF SCOPE=============================
There are three types of scope:*/
    //1.Global

        var dog = "Russell"

        console.log(dog);

        var callRussell = function(){
            console.log("Come here, " + dog + "!")
        };

        callRussell();

    //the 'dog' variable is available anywhere in the script. This is what is meant by a 'global variable'

    //2. Local

        function affirmation(){
            var myName = "Ryan";
            console.log("Hell yeah, " + myName +"!")
        }
        //This one will log my name as it runs the function
        affirmation();
        //This one won't, because it doesn't have access to myName
        //console.log(myName);

        //When a variable lives inside of a function, it is only accessible within that function. 
        //This is what is meant by 'locally scoped variables'

    //3. Lexical

    function raiseChildren(){
        //these variables are somewhere between global and local
        var son = "Damon"
        var daughter = "Roz"

        //they can be logged inside of the function
        console.log(son, daughter);

        //they can be invoked in a function within this function
        function callChildren(){
            console.log("Come here, " + son + " and " + daughter + "!");
        }
        
        callChildren();

    }
    //but they can't be invoked here (outside of the function). This is outside of son and daughter's lexical scope
    //console.log(son, daughter)

    raiseChildren();

    //On defining variables...

    function adoptNewDog(){
        var dog = "Khalon";
        function callNewDog(){
            console.log("Come here, " + dog + "!");
        }
        callNewDog();
    }

    adoptNewDog();

    console.log("You're still my dog, " + dog + ".")

    //When you run this code in the browser, Khalon takes the value of 'dog' only within the adoptNewDog function.
    //'dog' retains its value of "Russell" on the global scale. 
    //The two values do not interfere with one another. 
    //If I were to REMOVE the 'var' declaration before 'dog' as it appears in the adoptNewDog function,
    //then the value of 'dog' would UPDATE on the global level, replacing 'Russell' with 'Khalon'. 

    //The takeaway:
    //It's generally a good idea to keep your code out of the global scope, lest it set you up for collisions further
    //down the road when you might, say, use the same var name to a different purpose within a different function. 
    //It's a recipe item for breaking code. 
    //Instead, consider:
        //1. Wrapping your variables within functions so that they are used within specific contexts
        //2. Wrapping all of the code within an IIFE in order to force the browser to run your function immediately
        // (function(){
        //     console.log("This is inside of an IIFE.");
        // })();
        //^^^This syntax is correct, but it seems to only work if it's on the first line of the script...




