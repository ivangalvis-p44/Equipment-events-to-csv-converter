const express = require('express');
const router = express.Router();
const translator = require('../Processors/Translator.js');
const converter = require('../Processors/Converter');

module.exports = router;


router.post('/transform', (req, res) => {

    if (Object.keys(req.body).length === 0) res.status(400).json({message: "The equipment payload is null"});

    const processedEquipments = translator.flattenEquipmentsByTripEvent(translator.processEquipment(req.body));
    try {
        converter.convertToCSV(processedEquipments);
        res.status(201).json({ message: "The equipment events have been processed" });
    } catch (err) {
        res.status(503).json({ message: "There was an error processing the json file" + err.message })
    }
});