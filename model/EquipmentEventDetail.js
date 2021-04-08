module.exports = class EquipmentEventDetail{

    constructor(source, railId, eventCode, eventDate, eventLocation){
        this.railCar = railId;
        this.source = source;
        this.eventDate = eventDate;
        this.eventCode = eventCode;
        this.eventLocation = eventLocation;
    }
}