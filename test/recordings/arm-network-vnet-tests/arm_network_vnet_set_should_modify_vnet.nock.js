// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42"',
  'x-ms-request-id': '3b0ae711-3ff1-4be8-b319-c086b55c044b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': 'e549a75c-d1ee-44d7-b904-875ea7e154b9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080615Z:e549a75c-d1ee-44d7-b904-875ea7e154b9',
  date: 'Thu, 21 May 2015 08:06:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42"',
  'x-ms-request-id': '3b0ae711-3ff1-4be8-b319-c086b55c044b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': 'e549a75c-d1ee-44d7-b904-875ea7e154b9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080615Z:e549a75c-d1ee-44d7-b904-875ea7e154b9',
  date: 'Thu, 21 May 2015 08:06:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"9210aa45-57dd-4b36-8da8-d11d6bc74304\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '569edcb7-5ef1-45a3-ace7-bf35bfdcd242',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/569edcb7-5ef1-45a3-ace7-bf35bfdcd242?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'bd00c3ad-d5b9-4e37-aa26-d590271b0fd5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080622Z:bd00c3ad-d5b9-4e37-aa26-d590271b0fd5',
  date: 'Thu, 21 May 2015 08:06:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"9210aa45-57dd-4b36-8da8-d11d6bc74304\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '569edcb7-5ef1-45a3-ace7-bf35bfdcd242',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/569edcb7-5ef1-45a3-ace7-bf35bfdcd242?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'bd00c3ad-d5b9-4e37-aa26-d590271b0fd5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080622Z:bd00c3ad-d5b9-4e37-aa26-d590271b0fd5',
  date: 'Thu, 21 May 2015 08:06:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/569edcb7-5ef1-45a3-ace7-bf35bfdcd242?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17e18983-b83f-4fce-8c0c-faba26a16cb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '26da07fe-222f-48e0-ba76-472567c9be64',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080633Z:26da07fe-222f-48e0-ba76-472567c9be64',
  date: 'Thu, 21 May 2015 08:06:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/569edcb7-5ef1-45a3-ace7-bf35bfdcd242?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17e18983-b83f-4fce-8c0c-faba26a16cb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '26da07fe-222f-48e0-ba76-472567c9be64',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080633Z:26da07fe-222f-48e0-ba76-472567c9be64',
  date: 'Thu, 21 May 2015 08:06:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '526',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed"',
  'x-ms-request-id': '95b6549f-e44e-4773-9fb8-3689a5b9e49e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'f5bf2605-fb2c-41c2-b272-0e91b0eb7a12',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080635Z:f5bf2605-fb2c-41c2-b272-0e91b0eb7a12',
  date: 'Thu, 21 May 2015 08:06:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '526',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed"',
  'x-ms-request-id': '95b6549f-e44e-4773-9fb8-3689a5b9e49e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'f5bf2605-fb2c-41c2-b272-0e91b0eb7a12',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080635Z:f5bf2605-fb2c-41c2-b272-0e91b0eb7a12',
  date: 'Thu, 21 May 2015 08:06:35 GMT',
  connection: 'close' });
 return result; }]];