const input = document.querySelector('input');
const agregarBtn = document.querySelector('.agregar-btn');
const ul = document.querySelector('ul');
const vacio = document.querySelector('.vacio');

      


agregarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const text = input.value;
    

    
   

    if(text !== ""){
        const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    
    li.appendChild(agregarBorrarBtn());
    ul.appendChild(li);

    input.value = "";
    vacio.style.display ="none";


    const guardar = () =>{
        localStorage.setItem('tarea', text);
    };

    guardar(text);

    const mostrar = () =>{
        localStorage.getItem('tarea', text);
    };
        mostrar(text);
    };
    
});

function agregarBorrarBtn(){
    const borrarBtn = document.createElement("button");

    borrarBtn.textContent = "X";
    borrarBtn.className = "btn-borrar";

    borrarBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length===0){
            vacio.style.display = "block";
        }
    });
    return borrarBtn;

};




