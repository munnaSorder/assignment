//https://github.com/munnaSorder/assignment

function kilometerToMeter (km){
    if(km <= 0){
        return 'Sorry Your Number is not valid!.'
    }
    var meters = km * 1000;
    return meters;
};

// var result = kilometerToMeter(-5);
// console.log(result);
// expected output : Sorry Your Number is not valid!.

function budgetCalculator (watch, mobile, laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){
        return 'Sorry Your Number is not valid';
    }

    var totalCost = 0;
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}
// var result = budgetCalculator(0,5,5)
// console.log(result);
// expected output: 3000

function hotelCost(days){
    if(days <=0 ){
        return 'Sorry Your Number is not valid';
    }
    else if(days <= 10){
        var theInitialCost = days * 100;
        return theInitialCost;
    }
    else if(days <= 20){
        var currentDays = days - 10;
        var theInitialCost = 10 * 100;
        var interMediateCost = currentDays * 80;
        var totalCost = theInitialCost + interMediateCost;
        return totalCost
    }
    else{
        var currentDays = days - 20;
        var theInitialCost = 10 * 100;
        var interMediateCost = 10 * 80;
        var lastFewDaysCost = currentDays * 50;
        var totalCost = theInitialCost + interMediateCost + lastFewDaysCost;
        return totalCost;
    }
}
// var result = hotelCost(21)
// console.log(result);
// expected output: 1850

function megaFriend (friends) {
    if(friends.length <= 0){
        return 'Please Type Your Friends Name array'
    }
    var largeFriendName = [];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if(element.length > largeFriendName.length){
            largeFriendName = element;
        }
    }
    return largeFriendName;

}
// var friendName = ['munna','tarek','shoagh']
// var result = megaFriend(friendName)
// console.log(result);
// expected output: shoagh