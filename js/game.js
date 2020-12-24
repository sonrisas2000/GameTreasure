const WIDTH = 571;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let $counter = document.getElementById('counter')
let clicks = 0;

$map.addEventListener('click',function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    $counter.innerHTML = `<h1>Your points : ${clicks} </h1>`

    if(distance < 20){
        alert(`You are find the treasure in ${clicks} clicks`)
        setTimeout(location.reload(),2000)
        
    }

})