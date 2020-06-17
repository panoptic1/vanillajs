/*===============================OBJECT.ASSIGN()===========================================
Object.assign() can be used to perform a 'shallow merge' on a number of objects. */
var mercado = {
    tomatoes : 0,
    beans : 5, 
    coffee : {
        regular : 3,
        decaf : 2
    },
    cereal : 12
}

var bodega = {
    tomatoes : 3,
    beans : 2, /*from the console, it's apparent that the last declared value for every key 
               is what gets stored in the new object. Thus 'beans : 5' from 'mercado' gets lost*/

    coffee : {
        regular : 3,
        decaf : 1, 
    },
    cigarettes: {
        regular : true,
        menthol : false
    },
    cereal : 1
}

var tienda = {
    pencils : 1,
    comb : 3,
    shampoo : 4,
    toiletPaper : `delivery pending`
}

var superMercado = Object.assign(mercado, bodega, tienda);

console.log(superMercado);
//console.log(tienda);
//console.log(mercado);

/*
After running the snippet above, it is apparent that superMercado is not the new object but rather the OPERATION by which
each one of the objects (mercado, bodega, tienda) get rolled into mercado (the first argument that got passed
into the method.)

If I do want to create an actual new object from the merge of the other objects, all I have to do is pass 
an empty object into the method as the first argument. Like this: 
*/

var superMercado = Object.assign({}, mercado, bodega, tienda)

console.log(mercado);
console.log(superMercado);

/* 
==================================IMMUTABILITY====================================
When you assign a new name to an object, you're not creating an object with a new name,
but a link to the original variable. Why would you do this? I am not sure yet. For example:
*/
var market = mercado 
console.log(market);
delete mercado.tomatoes;
console.log(market);

/*
In the example above, the tomatoes have disappeared from the shelves of the market DESPITE the fact that I deleted
the tomatoes from the 'mercado' variable. Thus whatever happens to 'mercado' also happens to 'market'.
Their fates are forever intertwined.

Creating a brand new copy of the original array is called IMMUTABILITY.
You can create an immutable copy of an object by using Object.assign() and passing in an empty object as the
first argument, followed by the name of the variable that you wish to copy. This is considered 'best practice' 
before performing any tasks that manipulate an array.
*/

var cornerStore = Object.assign({}, bodega)
delete cornerStore.cigarettes
cornerStore.vapeJuice = true; 

console.log(bodega);
//^this one logs cigarettes

console.log(cornerStore);
//^and this one does not. It does have vape juice though!

/*
=================================JAVASCRIPT PLUGINS============================================

