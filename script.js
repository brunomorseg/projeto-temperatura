const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);





const converter = () => {

let numero = c('.main-select--input').value
const select = c('#main-select-first').value
const select_1 = c('#main-select-second').value



console.log(`${select} e ${select_1}`)

if(select === 'Celsius' && select_1 === 'Fahrenheit-1' ) {
    
    let resultado = (numero * 9/5) + 32

    c('.amostra-resultado').innerHTML = `${resultado.toFixed(2)} Fahrenheit`
    
    

} else if ( select === 'Fahrenheit' && select_1 === 'Celsius-1') {
    let resultado = (numero - 32)*5/9

    c('.amostra-resultado').innerHTML = `${resultado.toFixed(2)} Celsius`
  

} else {
    alert('Selecione temperatura diferente!')
}




}















/*
const converter = () => {
    const numero = parseFloat(c('.main-select--input').value);
    
    if (!isNaN(numero)) {
        const option_first_celsius = c('#option-celsius-first').getAttribute('data');
        const option_second_fahren = c('.option-fahren-second').getAttribute('data');

        console.log(option_first_celsius)
        
        if (option_first_celsius == 1) {    
            const resultado = (numero * 9/5) + 32;
            document.querySelector('.amostra-resultado').innerHTML = `A temperatura será: ${resultado.toFixed(2)} F`;
        } else {
            alert('Selecione "Celsius" para "Fahrenheit" para fazer a conversão.');
        }
    } else {
        alert('Insira um valor numérico válido.');
    }
}*/

/*
document.querySelector('button').addEventListener('click',()=> {
    alert('Clicou no')
})*/





//COLOCAR UM ADDEVENTLISTENER EM CADA OPTION E TENTAR COLOCAR UM SWICTH CASE. if COM UM ADDEVENTLISTENER. Colocar no BUTTON todo esse evento