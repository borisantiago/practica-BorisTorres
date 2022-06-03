window.addEventListener('DOMContentLoaded', function(evento){
    var input = document.getElementById('input');
    input.addEventListener('change', function(e){
        document.getElementById('input-for').innerHTML = e.target.value;
    })
})


/*
function presionarBtn(){
    
}

function presionarBtn(){
    var input = document.getElementById('input').value;
    console.log(input);
        
    document.getElementById("input-for").innerHTML.value = input;
    
}


window.addEventListener('DOMContentLoaded', function onLoadTest(e){
    alert(document.getElementById('input').innerHTML);
})

//repeticiones
window.addEventListener('DOMContentLoaded', function(e){
    var contenido = document.getElementsByClassName('content-marco')[0];

    for(let i=0 ; i<5; i++){
        document.body.innerHTML = document.body. innerHTML + '<div class="content-marco">' + contenido.innerHTML + '</div>';
    }
})
*/



function presionarBtn(){
    var input = document.getElementById('input').value;
    console.log(input);

    alert(document.getElementById('input-for').innerHTML);
    //document.getElementById('input').value = '';


    if(isNaN(input)){
        if(true){
            console.log("caracteres" );
        }
        
        /*window.addEventListener('DOMContentLoaded', function(e){
            var contenido = document.getElementsByClassName("content-marco")[0];
         console.log(contenido.innerHTML);
            
        for(let i=0 ; i<5; i++){
                document.body.innerHTML = document.body. innerHTML + '<div class="content-marco">' + contenido.innerHTML + '</div>';
            }
        
        })
        */
        
        }

        if(!isNaN(input)){
            if(true){
                console.log("numeros");

                window.addEventListener('DOMContentLoaded', function(e){
                var contenido = document.getElementsByClassName("content-marco")[0];
                 console.log(contenido.innerHTML);
                 document.body.innerHTML = document.body.innerHTML + '<div class="content-marco">' + contenido.innerHTML + '</div>';
                /*   
                for(let i=0 ; i<input; i++){
                        document.body.innerHTML = document.body.innerHTML + '<div class="content-marco">' + contenido.innerHTML + '</div>';
                    }
                */
                })
            }
            
            
            
            
            }
}














