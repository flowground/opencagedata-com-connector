/**
 * Auto-generated action file for "OpenCage Geocoder" API.
 *
 * Generated at: 2019-05-07T14:43:25.027Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / opencagedata-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/v{version}/{format}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "version",
    "format",
    "q",
    "key",
    "abbrv",
    "add_request",
    "bounds",
    "countrycode",
    "jsonp",
    "language",
    "limit",
    "min_confidence",
    "no_annotations",
    "no_dedupe",
    "no_record",
    "pretty",
    "proximity"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "version": "version",
    "format": "format",
    "q": "q",
    "key": "key",
    "abbrv": "abbrv",
    "add_request": "add_request",
    "bounds": "bounds",
    "countrycode": "countrycode",
    "jsonp": "jsonp",
    "language": "language",
    "limit": "limit",
    "min_confidence": "min_confidence",
    "no_annotations": "no_annotations",
    "no_dedupe": "no_dedupe",
    "no_record": "no_record",
    "pretty": "pretty",
    "proximity": "proximity"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/v{version}/{format}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}