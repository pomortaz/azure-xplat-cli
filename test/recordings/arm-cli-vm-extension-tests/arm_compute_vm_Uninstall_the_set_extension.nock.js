// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli8bcbfd9e4e865891-os-1440068538291\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext9644.blob.core.windows.net/xplatstoragecntext1749/cli8bcbfd9e4e865891-os-1440068538291.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9iZmI1ZTBiZi0xMjRiLTRkMGMtOTM1Mi03YzBhOWY0ZDk5NDgvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbi9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"storageAccount\":\"xplatstoragext9644\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3600',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': '1185c089-1868-4d8d-a40e-2b64f87be529',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14883',
  'x-ms-correlation-request-id': 'd7b884f8-8c1f-4856-b462-e57f8116f4e4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112138Z:d7b884f8-8c1f-4856-b462-e57f8116f4e4',
  date: 'Thu, 20 Aug 2015 11:21:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli8bcbfd9e4e865891-os-1440068538291\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext9644.blob.core.windows.net/xplatstoragecntext1749/cli8bcbfd9e4e865891-os-1440068538291.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9iZmI1ZTBiZi0xMjRiLTRkMGMtOTM1Mi03YzBhOWY0ZDk5NDgvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbi9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"storageAccount\":\"xplatstoragext9644\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3600',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': '1185c089-1868-4d8d-a40e-2b64f87be529',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14883',
  'x-ms-correlation-request-id': 'd7b884f8-8c1f-4856-b462-e57f8116f4e4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112138Z:d7b884f8-8c1f-4856-b462-e57f8116f4e4',
  date: 'Thu, 20 Aug 2015 11:21:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '926',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'c17ae588-3fe4-421b-bea1-b43819747f34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14877',
  'x-ms-correlation-request-id': '3be58854-32f1-4937-8593-6851afa4a8ca',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112139Z:3be58854-32f1-4937-8593-6851afa4a8ca',
  date: 'Thu, 20 Aug 2015 11:21:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '926',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'c17ae588-3fe4-421b-bea1-b43819747f34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14877',
  'x-ms-correlation-request-id': '3be58854-32f1-4937-8593-6851afa4a8ca',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112139Z:3be58854-32f1-4937-8593-6851afa4a8ca',
  date: 'Thu, 20 Aug 2015 11:21:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?monitor=true&api-version=2015-05-01-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'b03483f4-1be7-478a-a6c4-e82aad5a5091',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '9d0955c8-c980-4314-bd58-88a0b4364d04',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112144Z:9d0955c8-c980-4314-bd58-88a0b4364d04',
  date: 'Thu, 20 Aug 2015 11:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExtension/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?monitor=true&api-version=2015-05-01-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'b03483f4-1be7-478a-a6c4-e82aad5a5091',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '9d0955c8-c980-4314-bd58-88a0b4364d04',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112144Z:9d0955c8-c980-4314-bd58-88a0b4364d04',
  date: 'Thu, 20 Aug 2015 11:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"operationId\": \"b03483f4-1be7-478a-a6c4-e82aad5a5091\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-08-20T11:21:43.1731909+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': '152f8571-8260-47dc-a8c9-f915a5034d11',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14891',
  'x-ms-correlation-request-id': 'fa75f87c-9b4f-4abf-9b3a-8152346bf7f2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112216Z:fa75f87c-9b4f-4abf-9b3a-8152346bf7f2',
  date: 'Thu, 20 Aug 2015 11:22:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"operationId\": \"b03483f4-1be7-478a-a6c4-e82aad5a5091\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-08-20T11:21:43.1731909+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': '152f8571-8260-47dc-a8c9-f915a5034d11',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14891',
  'x-ms-correlation-request-id': 'fa75f87c-9b4f-4abf-9b3a-8152346bf7f2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112216Z:fa75f87c-9b4f-4abf-9b3a-8152346bf7f2',
  date: 'Thu, 20 Aug 2015 11:22:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"operationId\": \"b03483f4-1be7-478a-a6c4-e82aad5a5091\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-08-20T11:21:43.1731909+00:00\",\r\n  \"endTime\": \"2015-08-20T11:22:36.1896243+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'fedf7d65-6646-4181-bd81-6bdff96e89d7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-correlation-request-id': 'c436e0d5-df32-484b-9904-0ae2862d064b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112247Z:c436e0d5-df32-484b-9904-0ae2862d064b',
  date: 'Thu, 20 Aug 2015 11:22:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/b03483f4-1be7-478a-a6c4-e82aad5a5091?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"operationId\": \"b03483f4-1be7-478a-a6c4-e82aad5a5091\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-08-20T11:21:43.1731909+00:00\",\r\n  \"endTime\": \"2015-08-20T11:22:36.1896243+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130822579502374884',
  'x-ms-request-id': 'fedf7d65-6646-4181-bd81-6bdff96e89d7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-correlation-request-id': 'c436e0d5-df32-484b-9904-0ae2862d064b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150820T112247Z:c436e0d5-df32-484b-9904-0ae2862d064b',
  date: 'Thu, 20 Aug 2015 11:22:46 GMT',
  connection: 'close' });
 return result; }]];