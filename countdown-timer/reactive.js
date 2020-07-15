//
// Variables
//

var duration = 120;
var timer;


//
// Methods
//

/**
* State-based UI Component
* @param {String} selector The selector for the target element
* @param {Object} options  Component options
*/
var Rue = function (selector, options) {

    //the context of 'this' won't be the Rue() component inside the function. To get around this we can save it to a variable??
    var _this = this;

    this.elem = document.querySelector(selector);
    
    //pass options.data into a new proxy before initiating the handler again
    //this.data = new Proxy(options.data, handler());
    
    //on second thought, make the Proxy a private variable inside the component. And put the data there?
    var _data = new Proxy(options.data, handler(this));

    this.template = options.template;
    
    //Define getter and setter for thd data
    Object.defineProperty(this, `data`, {
        get: function () {
            return _data;
        },
        set: function (data) {
            _data = new Proxy(data, handler(_this));
            return true;
        }
    });
};

/**
* Render a new UI
*/
Rue.prototype.render = function () {
	this.elem.innerHTML = this.template(this.data);
};

//Create a handler function
//gain access to 'this' by passing it into the handler function
//call the render function inside each of the methods in the handler function
var handler = function (instance) {
    return {
        get: function (obj, prop) {
            console.log('gotcha!');
            if([`[object Object]`, `[object Array]`].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
                return new Proxy (obj[prop], handler(instance));
            }
            return obj[prop];
        },
        set: function (obj, prop, value) {
            console.log(`setcha!`);
            obj[prop] = value;
            instance.render();
            return true;
        },
        deleteProperty: function (obj, prop) {
            console.log(`see ya!`);
            delete obj[prop];
            instance.render();
            return true;
        }
    };
};

var list = new Rue(`#app`, {
    data: {
        heading: `Shit to do`,
        todos: [`meditate`, `write`, `code`, `read`]
    },
    
    template: function (props) {
        return `
                <h1>${props.heading}</h1>
                <ul>
                    ${props.todos.map(function (todo){
                    return `<li>${todo}</li>`;
                    }).join(``)}
                </ul>`;
    }
});

//Render the UI
list.render();

//After three seconds, update the data and render a new UI
setTimeout(function () {

    //This will automatically update the UI
    list.data.todos.push(`eat mushrooms`);

    //This will not
    list.data = {todos: [], heading: `hello, cruel world!`};
}, 3000);


