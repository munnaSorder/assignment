//https://github.com/munnaSorder/assignment

//Convert Kilometer To Meter
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

//Calculation Your Gadget Cost
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

//Calculation Your Hotel Rent
function hotelCost(days){
    if(days <=0 ){
        return 'Sorry Your Number is not valid';
    }
    else if(days <= 10){
        var initialCost = days * 100;
        return initialCost;
    }
    else if(days <= 20){
        var currentDays = days - 10;
        var initialCost = 10 * 100;
        var interMediateCost = currentDays * 80;
        var totalCost = initialCost + interMediateCost;
        return totalCost
    } else{
        var currentDays = days - 20;
        var initialCost = 10 * 100;
        var interMediateCost = 10 * 80;
        var lastFewDaysCost = currentDays * 50;
        var totalCost = initialCost + interMediateCost + lastFewDaysCost;
        return totalCost;
    }
}
// var result = hotelCost(21)
// console.log(result);
// expected output: 1850

//Find Your Larger Friend Name
function megaFriend (friends) {
    if(friends.length <= 0){
        return 'Please Type Your Friends Name array'
    }
    var largeFriendName = [];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if(friend.length > largeFriendName.length){
            largeFriendName = friend;
        }
    }
    return largeFriendName;

}
// var friendName = ['munna','tarek','shoagh']
// var result = megaFriend(friendName)
// console.log(result);
// expected output: shoagh