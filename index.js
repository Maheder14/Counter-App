let count = JSON.parse (localStorage.getItem('counter')) || 0;
document.querySelector('h1').innerHTML = count;

document.getElementById('increase').addEventListener('click', () =>{
    const increaseInput = document.getElementById('myInput').value;   
    count = count + parseInt(increaseInput); 
     localStorage.setItem('counter', count);
    document.querySelector('h1').innerHTML = count;
});

document.getElementById('decrease').addEventListener('click', () =>{
    const decreaseInput = document.getElementById('myInput').value;
    count = count - parseInt(decreaseInput);
    if(count < 0){
        count = 0;
    }  
    localStorage.setItem('counter', count);
    document.querySelector('h1').innerHTML = count;
});

document.getElementById('reset').addEventListener('click', () =>{
    count = 0;
    localStorage.setItem('counter', count);
    document.querySelector('h1').innerHTML = count;
});

document.getElementById('increase').addEventListener('mouseover', () =>{
    document.getElementById('increase').style.cursor = 'pointer';
})
document.getElementById('decrease').addEventListener('mouseover', () =>{
    document.getElementById('decrease').style.cursor = 'pointer';
    if(count === 0){
        document.getElementById('decrease').style.cursor = 'no-drop';
    }
});

document.getElementById('reset').addEventListener('mouseover', () => {
    document.getElementById('reset').style.cursor = 'pointer';
    if(count === 0){
        document.getElementById('reset').style.cursor = 'no-drop';
    }
});