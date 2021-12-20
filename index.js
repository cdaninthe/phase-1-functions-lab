// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    const headquarters = 42;
    return Math.abs(pickup - headquarters);
}

function distanceFromHqInFeet(pickup){
    return (distanceFromHqInBlocks(pickup))*264;
}

function distanceTravelledInFeet(pickup, destination){
    return Math.abs((pickup-destination)*264);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400){
        fare = 0;
    }
    else if ((distance > 400) && (distance < 2000)){
        fare = (distance - 400) * 0.02;
    }
    else if ((distance > 2000) && (distance < 2500)){
        fare = 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
    return fare;
  }