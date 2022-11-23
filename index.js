function distanceFromHqInBlocks(travelling){
    if (travelling>= 42){
        return travelling- 42

    }
    else{
        return 42-travelling
    }

}

function distanceFromHqInFeet(travelling){
    return distanceFromHqInBlocks(travelling)*264
}

function distanceTravelledInFeet(x, y){
   if(y>x){
    return (y-x)*264

   }
   else{
    return (x -y)*264
   }
}
function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start, destination)
    if(totalDistance<=400){
            return 0
    } else if(totalDistance>400 && totalDistance<=2000){
        return (totalDistance-400) * 0.02
    }else if(totalDistance>2000 && totalDistance<=2500){
            return 25
    } else {
        return 'cannot travel that far'
    }
}