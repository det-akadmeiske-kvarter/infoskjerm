import EventCard from "./EventCard.js"
import React from "react";

export default class utils {

    static getFloor(rom) {
        const etg=
            [
                ["Storelogen","Halvtimen","Støy","Stillhet"],
                ["Maos Lille Røde","Stjernesalen","Speilsalen","Bakgården"],
                ["Teglverket","Grøndahls","Tivoli"]
            ];

        for (let i = 0; i <etg.length ; i++) {
            for (let j = 0; j <etg[i].length ; j++) {

                if(rom===etg[i][j]){
                    return (i+1) ;
                }
            }
        }
    }
    static getEventCard(EventCards){
        let eventList =[];
        let dato=new Date();
        let day= dato.getDate();
        let month= dato.getMonth()+1;
        let year= dato.getFullYear();
        let date;
        if(month>=10){
         date= year+"-"+month+"-"+day;}

        else{ date= year+"-0"+month+"-"+day;}



        for (let i = 0; i <EventCards.length ; i++) {
            if(EventCards[i]["dato"]===date){
                eventList.push( <EventCard
                    key={i}
                    floor={this.getFloor(EventCards[i]["sted"])}
                    value1={EventCards[i]["arrangoernavn"]}
                    value2={EventCards[i]["dato"]}
                    value3={EventCards[i]["typenavn"]}
                    value4={EventCards[i]["sted"]}

                    content1={"hei"}
                />);
            }
        }

        return eventList;



    }


}