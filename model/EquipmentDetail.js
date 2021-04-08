module.exports = class EquipmentDetail{
    
    static get source() {
        return 'Raven';
    }

    constructor(railId, tripEvents){
        this.railId = railId;
        this.tripEvents = tripEvents;
    }
}