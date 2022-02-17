const items = document.getElementsByClassName('button-buy')
        for (const item of items){
            item.addEventListener('click',function(event){
                event.target.parentNode.removeChild(event.target);
            })
}
document.getElementById('click-button').addEventListener('click',function(){
    document.getElementById('change-name').innerText = 'I am penguin';
})