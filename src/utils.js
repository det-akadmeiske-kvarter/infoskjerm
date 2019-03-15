/**
 * Takes event and returns which floor event is in.
 * 
 */  
var etasje1 = ["Grøndahls Flygel- Og Pianolager", "Eldorado", "Teglverket"];
var etasje2 = ["Stjernesalen", "Maos Lille Røde"];
var etasje3 = ["Troferommet"];

export function getFloor(event){
    if(etasje1.indexOf(event.sted) >= 0){
        return "Etasje 1";
    }
    if(etasje2.indexOf(event.sted) >= 0){
        return "Etasje 2";
    }
    if(etasje3.indexOf(event.sted) >= 0){
        return "Etasje 3";
    }
    return; 
}

/**
 * Takes a list with events, and returns events for today.
 * 
 */ 
export function getCurrentEvents(events){
    var currentEvents = [];
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"+ (currentdate.getMonth()+1)  + "-" + currentdate.getDay();
    if(currentdate.getMonth()+1 < 10){
        datetime = currentdate.getFullYear() + "-0"+ (currentdate.getMonth()+1)  + "-" + currentdate.getDay();
    }
    for(var i = 0; i < events.length; i++){
        if(events[i]["dato"] == currentdate){
            currentEvents.push(events[i]);
        }
    }
    return currentEvents;
}
