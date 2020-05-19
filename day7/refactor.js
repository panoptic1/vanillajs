document.addEventListener('input', function(event){
    let text = document.querySelector('#text').value.length;
    let count = document.querySelector('#character-count');
    count.textContent = text
})

//I'm pretty sure I can't get it any shorter than this!