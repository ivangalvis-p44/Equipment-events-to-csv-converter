### Steps to set up and run in local:

1. `npm install`
2. `npm run devStart`

### **Sending the Request: Example of curl:**

`curl --location --request POST 'http://localhost:3000/raven/transform' \
--header 'Content-Type: application/json' \
--data-raw '[
{
"EquipmentID": "ADMX62302",
"TripClassifier": "E",
"WaybillNumber": null,
"BOLNumber": null,
"PO": null,
"RavenControlNumber": null,
"CustID": "810848",
"TranID": null,
"MultiCarBilling": "NO",
"WaybillOrigin": null,
"OriginFacility": null,
"WaybillDestination": null,
"DestinationFacility": null,
"Route": null,
"DeliveryCarrier": null,
"Latitude": 41.51193,
"Longitude": -90.60886,
"jeopardizeIDs": [
4,
17,
18,
19,
24
],
"locationDelay": 296,
"parties": null,
"shipmentStatus": {
"BillingStatusCode": null,
"TrackingStatusCode": "N"
},
"ETAs": {
"ToArrival": null,
"ToFirstPlacement": null,
"ToSwitching": null,
"Railroad": null,
"Forecasted": null,
"Variance": 0
},
"cycleKeyEvents": [
{
"eventTypeID": "AD",
"dateValue": null
},
{
"eventTypeID": "AP",
"dateValue": null
},
{
"eventTypeID": "CP",
"dateValue": null
},
{
"eventTypeID": "RE",
"dateValue": null
},
{
"eventTypeID": "SD",
"dateValue": "2021-03-10T05:35:00"
}
],
"tripEvents": [
{
"eventCode": "W",
"eventDate": "2021-03-10T05:35:00",
"eventLocation": "WEST DAVENPORT,IA [CPRS]"
}
]
},
{
"EquipmentID": "AOK19000",
"TripClassifier": "L",
"WaybillNumber": 251180,
"BOLNumber": "332304213",
"PO": "SAN3151002",
"RavenControlNumber": 2518484,
"CustID": "810848",
"TranID": null,
"MultiCarBilling": "NO",
"WaybillOrigin": "CAMDEN, TX",
"OriginFacility": null,
"WaybillDestination": "NORTH LOOP,TX [UP]",
"DestinationFacility": null,
"Route": "UP",
"DeliveryCarrier": "UP",
"Latitude": 29.79538,
"Longitude": -95.29776,
"jeopardizeIDs": [],
"locationDelay": 13,
"parties": [
{
"partytype": "CN",
"partyname": "HOME DEPOT USA INC"
},
{
"partytype": "PF",
"partyname": "HOME DEPOT USA INC"
},
{
"partytype": "SH",
"partyname": "GEORGIA PACIFIC"
}
],
"shipmentStatus": {
"BillingStatusCode": "SHP",
"TrackingStatusCode": "I"
},
"ETAs": {
"ToArrival": "2021-03-23T23:01:00",
"ToFirstPlacement": "2021-03-24T01:01:00",
"ToSwitching": "2021-03-24T23:01:00",
"Railroad": "2021-03-24T00:00:00",
"Forecasted": "2021-03-26T22:45:00",
"Variance": -2.99
},
"cycleKeyEvents": [
{
"eventTypeID": "AD",
"dateValue": null
},
{
"eventTypeID": "AP",
"dateValue": null
},
{
"eventTypeID": "CP",
"dateValue": null
},
{
"eventTypeID": "RE",
"dateValue": null
},
{
"eventTypeID": "SD",
"dateValue": "2021-03-16T07:45:00"
}
],
"tripEvents": [
{
"eventCode": "A",
"eventDate": "2021-03-22T00:01:00",
"eventLocation": "ENGLEWOOD,TX [UP]"
}
]
}
]'`

### **Checking the generated file**
Go to the directory of the application _'Equipment-events-converter'_ and find the _'csvs'_ folder; there is the generated file. If the file is already generated the API will append a new record to it for each `TripEvent` in the `Equipment` object.