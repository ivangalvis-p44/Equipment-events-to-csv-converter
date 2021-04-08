const TripEvent = require("../model/TripEvent");
const Equipment = require("../model/EquipmentDetail");
const EquipmentEventDetail = require("../model/EquipmentEventDetail");


const processEquipment = (equipments) => {

    if(!equipments){
        return null;
    }

    const processedEquipmentArray = equipments.map(equipmentObject => {

        if(!equipmentObject){
            return null;
        }

        const processedTripEvents = processTripEvents(equipmentObject.tripEvents);
        return new Equipment(equipmentObject.EquipmentID, processedTripEvents ? processedTripEvents : null);
    });

    return processedEquipmentArray? processedEquipmentArray.filter(equipment => equipment != null) :null;
}


const processTripEvents = (tripEventsSource) => {
    
    if(!tripEventsSource){
        return null;
    }
    const tripEventsTranslated = tripEventsSource.map(tripEventInternal => tripEventInternal === null ? null : new TripEvent(tripEventInternal.eventCode, tripEventInternal.eventDate, tripEventInternal.eventLocation));
    return tripEventsTranslated ? tripEventsTranslated.filter(tripEvent => tripEvent != null) : null;
}


const flattenEquipmentsByTripEvent = (equipmentDetailArray) => {
    
    if(!equipmentDetailArray){
        return null;
    }

    const flattennedEquipmentArray = new Array();
    equipmentDetailArray.forEach(equipmentDetail => {
        const equipmentDetailByTripEvetArray = equipmentDetail.tripEvents.map( tripEvent => new EquipmentEventDetail(Equipment.source, equipmentDetail.railId, tripEvent.eventCode, tripEvent.eventDate, tripEvent.eventLocation))
        flattennedEquipmentArray.push(...equipmentDetailByTripEvetArray);
    })

    return flattennedEquipmentArray;
}


module.exports = {
                    processEquipment: processEquipment, 
                    flattenEquipmentsByTripEvent: flattenEquipmentsByTripEvent
                 }