// box 1
const zeroType = document.getElementById('zero-type');
const btnIncrement = document.getElementById('btn-increment');
const decBtn = document.getElementById('btn-dec');

// // step   1 

let zeroTypeValue = 0;

btnIncrement.addEventListener('click', function(){
    if(zeroTypeValue === 33){
        return alert("zeroType is complete. please Fillup another one")
    }
    zeroTypeValue += 1
    zeroType.innerText = zeroTypeValue;
})

decBtn.addEventListener('click', function(){
    if(zeroTypeValue === 0){
        return alert("zeroType is complete. please Fillup another one")
    }
    zeroTypeValue -= 1
    zeroType.innerText = zeroTypeValue;;
})

// box 2
const ramType = document.getElementById('ram-type');
const ramIncrement = document.getElementById('ram-btn-increment');
const ramDecBtn = document.getElementById('ram-btn-dec');

let ramTypeValue = 0;

ramIncrement.addEventListener('click', function(){
    if(ramTypeValue === 34){
        return alert("ramType is complete. please Fillup another one")
    }
    ramTypeValue += 1
    ramType.innerText = ramTypeValue;
})
ramDecBtn.addEventListener('click', function(){
    if(ramTypeValue === 0){
        return alert("ramType is complete. please Fillup another one")
    }
    ramTypeValue -= 1
    ramType.innerText = ramTypeValue;
})


// // box 3

const ramRamType = document.getElementById('hare-type');
const ramRamBtnIncrement = document.getElementById('hare-btn-increment');
const ramRamBtnDec = document.getElementById('hare-btn-dec');

let ramRamTypeValue = 0;

ramRamBtnIncrement.addEventListener('click', function(){
    if(ramRamTypeValue === 35){
        return alert("ramRamType is complete. please Filup another one")
    }
    ramRamTypeValue += 1
    ramRamType.innerText = ramRamTypeValue;l
})


ramRamBtnDec.addEventListener('click', function(){
    if(ramRamTypeValue === 0){
        return alert("ramRamType is complete. please Filup another one")
    }
    ramRamTypeValue -= 1
    ramRamType.innerText = ramRamTypeValue;


})
            //   reset
const resetBtn = document.getElementById('btn-reset');
resetBtn.addEventListener('click', function(){
    zeroType.innerText = 0
    ramType.innerText = 0
    ramRamType.innerText = 0
    zeroTypeValue = 0
    ramTypeValue = 0
    ramRamTypeValue = 0
});
