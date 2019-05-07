# ![LOGO](logo.png) OpenCage Geocoder **flow**ground Connector

## Description

A generated **flow**ground connector for the OpenCage Geocoder API (version 1).

Generated from: https://api.apis.guru/v2/specs/opencagedata.com/1/swagger.json<br/>
Generated at: 2019-05-07T17:43:25+03:00

## API Description

Worldwide forward and reverse geocoding

## Authorization

This API does not require authorization.

## Actions

### geocode a query

#### Input Parameters
* `version` - _required_ - API version.
* `format` - _required_ - format of the response. One of 'json', 'xml' or 'map'.
* `q` - _required_ - string or lat,lng to be geocoded.
* `key` - _required_ - an application key.
* `abbrv` - _optional_ - when true we attempt to abbreviate the formatted field in the response.
* `add_request` - _optional_ - if true the request is included in the response.
* `bounds` - _optional_ - four coordinate points forming the south-west and north-east corners of a bounding box (min long, min lat, max long, max lat).
* `countrycode` - _optional_ - two letter code ISO 3166-1 Alpha 2 code to limit results to that country.
* `jsonp` - _optional_ - wraps the returned JSON with a function name.
* `language` - _optional_ - an IETF format language code (ex: 'es' or 'pt-BR').
* `limit` - _optional_ - maximum number of results to return. Default is 10. Maximum is 100.
* `min_confidence` - _optional_ - integer from 1-10. Only results with at least this confidence are returned.
* `no_annotations` - _optional_ - when true annotations are not added to results.
* `no_dedupe` - _optional_ - when true results are not deduplicated.
* `no_record` - _optional_ - when true query content is not logged.
* `pretty` - _optional_ - when true results are pretty printed. Useful for debugging.
* `proximity` - _optional_ - lat,lng to bias results.

## License

**flow**ground :- Telekom iPaaS / opencagedata-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
