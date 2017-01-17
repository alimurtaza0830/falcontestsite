var calculateTime = function(hour, angle) {
    //var time;
		var totalHours = hour;
    var totalAngle = angle;
    var minutes = totalAngle / 6
    var minutesHand = 0;
    var hoursHand = 0;
    var maxHours = 12;
    for(var i = 1; i <= totalHours; i++){
    	
    		if(hoursHand > maxHours){
        			//reset hour hand
      		  	hoursHand = 1;
              
        }
        hoursHand++;        
    }
    
    minutesHand = minutes + (hoursHand * 5);
    if(minutesHand == 60){
    	minutesHand = '00';
    } else if(minutesHand > 60){
    		minutesHand = minutesHand - 60;
    }
   minutesHand = Math.ceil(minutesHand);
    //console.log(minutesHand);
    console.log("Current Time is "+hoursHand+":"+minutesHand);  
}

calculateTime(7, 140);