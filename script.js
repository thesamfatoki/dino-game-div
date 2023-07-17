var character = document.getElementById('character')

var block = document.getElementById('block')

document.addEventListener('keydown', function(event){
    if (event.code === 'Space'){
        jump()
    }
})

function jump(){
    
    if(character.classList != "animate"){
        character.classList.add('animate')
    }
    
    setTimeout(function(){
        character.classList.remove('animate')
    }, 500)
}