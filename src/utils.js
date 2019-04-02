import React from 'react'
import EventCard from './components/EventCard'

var etasje1 = ["Grøndahls Flygel- Og Pianolager", "Eldorado", "Teglverket", "Grønndahls", "Tivoli", "Tivoli + Eldorado"];
var etasje2 = ["Stjernesalen", "Maos Lille Røde", "Speilsalen", "Lobbyen", "Bakgården"];
var etasje3 = ["Troferommet", "Storelogen", "Støy", "Stillhet", "Halvtimen"];

/**
 * Takes room name and returns which floor event is in.
 * 
 */  
export function getFloorNumber(roomName){
    if(etasje1.indexOf(roomName) >= 0){
        return 1;
    }
    if(etasje2.indexOf(roomName) >= 0){
        return 2;
    }
    if(etasje3.indexOf(roomName) >= 0){
        return 3;
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
    var year = currentdate.getFullYear();
    var month = currentdate.getMonth() + 1;
    var day = currentdate.getDate();

    if(month < 10) {
        month = '0' + month;
    }

    if(day < 10) {
        day = '0' + day;
    }

    var datetime = year + '-' + month + '-' + day
    for(var i = 0; i < events.length; i++){
        if(events[i]["dato"] == datetime){
            currentEvents.push(events[i]);
        }
    }
    console.log(currentEvents);
    return currentEvents;
}

/**
 * Get events for today, at inFloor
 * Example: Get events at 2nd floor -> getEventsAtFloor(events,2)
 */ 
export function getEventsAtFloor(events, inFloor){
    var eventsAtFloor = [];
    var currentEvents = getCurrentEvents(events);
    console.log(currentEvents);
    for(var i = 0; i < currentEvents.length; i++){
        if(getFloorNumber(currentEvents[i]["sted"]) == inFloor) {
            eventsAtFloor.push(currentEvents[i]);
        }
    }
    return eventsAtFloor;
}
/**
 * Returns a list of EventCard components to be rendered
 * @param {*} events All list of events (pass function getEventsAtFloor() if you want a filtered list)
 */
export function generateEventCards(events) {
    let eventCardList =[];

    for (let i = 0; i < events.length; i++) {
        eventCardList.push(<EventCard
            key={i}
            leftValue1={events[i]["arrangoernavn"]}
            leftValue2={events[i]["sted"]}
            middleValue={<h2>{events[i]["navn"]}</h2>}
            rightValue2={events[i]["starttid"]}
        />);
        
    }

    return eventCardList;
}

export function filterPastEvents(events) {
    var today = new Date();
    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if(hours < 10) {
        hours = '0' + hours;
    }
    if(min < 10) {
        min = '0' + min;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }
    var time = hours + ":" + min + ":" + sec;

    var filteredEvents = events.filter(e => e.slutt > time)
    return filteredEvents
}
