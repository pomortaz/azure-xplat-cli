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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"6b8d34de-84b2-4337-8045-830a75a25d5a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n        \"etag\": \"W/\\\"6b8d34de-84b2-4337-8045-830a75a25d5a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"NsgRule\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5394',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6b8d34de-84b2-4337-8045-830a75a25d5a"',
  'x-ms-request-id': '173912b8-f304-4930-bdb5-ab0617b0af6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': '90f7d760-4011-4a4d-a1da-5c1245853ade',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080439Z:90f7d760-4011-4a4d-a1da-5c1245853ade',
  date: 'Thu, 21 May 2015 08:04:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"6b8d34de-84b2-4337-8045-830a75a25d5a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n        \"etag\": \"W/\\\"6b8d34de-84b2-4337-8045-830a75a25d5a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"NsgRule\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5394',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6b8d34de-84b2-4337-8045-830a75a25d5a"',
  'x-ms-request-id': '173912b8-f304-4930-bdb5-ab0617b0af6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': '90f7d760-4011-4a4d-a1da-5c1245853ade',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080439Z:90f7d760-4011-4a4d-a1da-5c1245853ade',
  date: 'Thu, 21 May 2015 08:04:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n  \"etag\": \"W/\\\"c1eac901-4125-4755-b2e0-2a3142efd7d7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"NsgRuleSetting\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"250\",\r\n    \"destinationPortRange\": \"300\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/16\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fb8fefe0-851e-46ac-8006-a34385f39faa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/fb8fefe0-851e-46ac-8006-a34385f39faa?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '641147fb-6fbc-4f87-b50e-a99558727eb3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080440Z:641147fb-6fbc-4f87-b50e-a99558727eb3',
  date: 'Thu, 21 May 2015 08:04:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n  \"etag\": \"W/\\\"c1eac901-4125-4755-b2e0-2a3142efd7d7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"NsgRuleSetting\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"250\",\r\n    \"destinationPortRange\": \"300\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/16\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fb8fefe0-851e-46ac-8006-a34385f39faa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/fb8fefe0-851e-46ac-8006-a34385f39faa?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '641147fb-6fbc-4f87-b50e-a99558727eb3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080440Z:641147fb-6fbc-4f87-b50e-a99558727eb3',
  date: 'Thu, 21 May 2015 08:04:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/fb8fefe0-851e-46ac-8006-a34385f39faa?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '561a7729-35df-4e87-a606-7fb190dfefcc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'cdccabb5-40f9-4011-9031-90a67a7a751a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080451Z:cdccabb5-40f9-4011-9031-90a67a7a751a',
  date: 'Thu, 21 May 2015 08:04:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/fb8fefe0-851e-46ac-8006-a34385f39faa?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '561a7729-35df-4e87-a606-7fb190dfefcc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'cdccabb5-40f9-4011-9031-90a67a7a751a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080451Z:cdccabb5-40f9-4011-9031-90a67a7a751a',
  date: 'Thu, 21 May 2015 08:04:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"e37ee25d-c069-4df2-a29e-0d1380e29691\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n        \"etag\": \"W/\\\"e37ee25d-c069-4df2-a29e-0d1380e29691\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"NsgRuleSetting\",\r\n          \"protocol\": \"Udp\",\r\n          \"sourcePortRange\": \"250\",\r\n          \"destinationPortRange\": \"300\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/16\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 300,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5400',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e37ee25d-c069-4df2-a29e-0d1380e29691"',
  'x-ms-request-id': '24a84fc6-c728-4663-9107-9639cffd3283',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '657efb10-93ce-4449-a9f5-615b014fcb52',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080453Z:657efb10-93ce-4449-a9f5-615b014fcb52',
  date: 'Thu, 21 May 2015 08:04:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"e37ee25d-c069-4df2-a29e-0d1380e29691\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/securityRules/xplatTestNsgRule\",\r\n        \"etag\": \"W/\\\"e37ee25d-c069-4df2-a29e-0d1380e29691\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"NsgRuleSetting\",\r\n          \"protocol\": \"Udp\",\r\n          \"sourcePortRange\": \"250\",\r\n          \"destinationPortRange\": \"300\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/16\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 300,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5400',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e37ee25d-c069-4df2-a29e-0d1380e29691"',
  'x-ms-request-id': '24a84fc6-c728-4663-9107-9639cffd3283',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '657efb10-93ce-4449-a9f5-615b014fcb52',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080453Z:657efb10-93ce-4449-a9f5-615b014fcb52',
  date: 'Thu, 21 May 2015 08:04:53 GMT',
  connection: 'close' });
 return result; }]];