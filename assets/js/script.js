let start = document.getElementById(`generate`);
let iter = 100;

start.addEventListener(`click`,
    function(){
        main()
    }
)

//NOTE Soluzione con lo switch che si è rilevata inutilmente lunga
//let modul 
// function main(){
//     for(let i = 1; i <= iter; i++){
//         // console.log(`${iter}`)
//         //Soluzione per non usare un array con lo switch
//         let i3 = (i%3);
//         let i5 = (i%5);
        
//         modul = (`${i3}${i5}`);

//         // console.log(`${modul}`);
//         switch (modul) {
//             case `01`:
//             case `02`:
//             case `03`:
//             case `04`:
//             case `05`:
//             case `06`:
//             case `07`:
//             case `08`:
//             case `09`:
//                 console.log(`multiplo`);
//                 break;
//             case `10`:
//             case `20`:
//             case `30`:
//             case `40`:
//             case `50`:
//             case `60`:
//             case `70`:
//             case `80`:
//             case `90`:
//                 console.log(`funzia`);
//                 break;
//             case  `00`:
//                 console.log(`caso special`);
//                 break;
//             default:
//                 console.log(`default`);
//                 break;
//         }
//     }
// }

function main(){
    for(let i = 1; i<=iter; i++){
        if (((i%3)==0) && ((i%5)==0)){
            //console.log("15");
            document.getElementById(`list`).innerHTML += `<li class="col bg-danger"><p>FizzBuzz</p></li>` 
        } else if ((i%3)==0) {
            //console.log(`3`);
            document.getElementById(`list`).innerHTML += `<li class="col bg-success"><p>Fizz</p></li>`
        } else if ((i%5)==0) {
            //console.log(`5`);
            document.getElementById(`list`).innerHTML += `<li class="col bg-warning"><p>Buzz</p></li>` 
        } else {
            //console.log(`default`);
            document.getElementById(`list`).innerHTML += `<li class="col bg-secondary"><p>${i}</p></li>` 
        }
    }
}