var randomNumber1=Math.ceil(Math.random()*6);
var randomSrc1='images/dice'+randomNumber1+'.png';
var randomNumber2=Math.ceil(Math.random()*6);
var randomSrc2='images/dice'+randomNumber2+'.png';
document.querySelector('.img1').setAttribute('src',randomSrc1);
document.querySelector('.img2').setAttribute('src',randomSrc2);

if (randomNumber1>randomNumber2) {
    document.querySelector('h1').innerText='Player 1 Wins!';
} 
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerText='Player 2 Wins!';
}
else {
    document.querySelector('h1').innerText='Draw!';
}