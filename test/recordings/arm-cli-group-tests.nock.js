// This file has been autogenerated.

exports.scopes = [[function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate1?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate1' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a1958fe1-f75f-467d-8f3e-6d681b61b09c',
  'x-ms-correlation-request-id': 'a1958fe1-f75f-467d-8f3e-6d681b61b09c',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003544Z:a1958fe1-f75f-467d-8f3e-6d681b61b09c',
  date: 'Thu, 27 Mar 2014 00:35:44 GMT',
  'content-length': '109' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate1?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate1\",\"name\":\"xplatTestGCreate1\",\"location\":\"South Central US\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bbe1db19-d679-47b6-a5a1-3fec8ddec85c',
  'x-ms-correlation-request-id': 'bbe1db19-d679-47b6-a5a1-3fec8ddec85c',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003545Z:bbe1db19-d679-47b6-a5a1-3fec8ddec85c',
  date: 'Thu, 27 Mar 2014 00:35:45 GMT',
  'content-length': '197' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate1\",\"name\":\"xplatTestGCreate1\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aef75da9-a50a-434e-8684-1c090a7f75ab',
  'x-ms-correlation-request-id': 'aef75da9-a50a-434e-8684-1c090a7f75ab',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003545Z:aef75da9-a50a-434e-8684-1c090a7f75ab',
  date: 'Thu, 27 Mar 2014 00:35:44 GMT',
  'content-length': '207' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .delete('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate1?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-request-id': '9b44e5c9-99fb-4433-857c-34d810f6ab40',
  'x-ms-correlation-request-id': '9b44e5c9-99fb-4433-857c-34d810f6ab40',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003546Z:9b44e5c9-99fb-4433-857c-34d810f6ab40',
  date: 'Thu, 27 Mar 2014 00:35:46 GMT',
  'content-length': '0' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview')
  .reply(200, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1d8482d2-bbb2-4882-bb4a-d364e39bf402',
  'x-ms-correlation-request-id': '1d8482d2-bbb2-4882-bb4a-d364e39bf402',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003620Z:1d8482d2-bbb2-4882-bb4a-d364e39bf402',
  date: 'Thu, 27 Mar 2014 00:36:20 GMT',
  'content-length': '4' });
 return result; }],
[function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate2' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c92356b-0b3d-4bc9-b926-e5d4ed1f2f5c',
  'x-ms-correlation-request-id': '7c92356b-0b3d-4bc9-b926-e5d4ed1f2f5c',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003621Z:7c92356b-0b3d-4bc9-b926-e5d4ed1f2f5c',
  date: 'Thu, 27 Mar 2014 00:36:20 GMT',
  'content-length': '109' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2\",\"name\":\"xplatTestGCreate2\",\"location\":\"South Central US\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a93dac54-3721-45aa-b607-7ce5eec5f3ad',
  'x-ms-correlation-request-id': 'a93dac54-3721-45aa-b607-7ce5eec5f3ad',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003622Z:a93dac54-3721-45aa-b607-7ce5eec5f3ad',
  date: 'Thu, 27 Mar 2014 00:36:22 GMT',
  'content-length': '197' });
 return result; },
function (nock) {
var result =
nock('https://management-preview.core.windows-int.net:443')
  .get('/19b520e4-39a7-4fac-b1da-d940f2d39a38/services/storageservices/xptests82/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management-preview.core.windows-int.net/19b520e4-39a7-4fac-b1da-d940f2d39a38/services/storageservices/xptests82</Url><StorageServiceKeys><Primary>ZIVuzYwGNGG208KLzyoU6ynMs9SqETwJ5NhCX1M77JtlhiY3vYa4zniiI5WuvKP0rVTULdtDHj6Dg8QnIOem2A==</Primary><Secondary>haWCXEQvjzqM/ycMtpb0QqtuV4rt+J2Tc8Ty4AU1ZnHRLG9qCHwg2bYGHpcT42bmXCTneW3kzeFFOBbGj72z8w==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '524',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6196.255 (rd_rdfe.140324-1200) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'uswest',
  'x-ms-request-id': 'a8d49983903a8503b8544ef502c0186d',
  date: 'Thu, 27 Mar 2014 00:36:23 GMT' });
 return result; },
function (nock) {
var result =
nock('https://management-preview.core.windows-int.net:443')
  .get('/19b520e4-39a7-4fac-b1da-d940f2d39a38/services/storageservices/xptests82')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management-preview.core.windows-int.net/19b520e4-39a7-4fac-b1da-d940f2d39a38/services/storageservices/xptests82</Url><ServiceName>xptests82</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>Rm9yVGVzdHM=</Label><Status>Created</Status><Endpoints><Endpoint>http://xptests82.blob.core.test-cint.azure-test.net/</Endpoint><Endpoint>http://xptests82.queue.core.test-cint.azure-test.net/</Endpoint><Endpoint>http://xptests82.table.core.test-cint.azure-test.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-03-26T17:03:10Z</CreationTime></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '961',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6196.255 (rd_rdfe.140324-1200) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'uswest',
  'x-ms-request-id': 'c599353017c384d79a8fb81871927923',
  date: 'Thu, 27 Mar 2014 00:36:25 GMT' });
 return result; },
function (nock) {
var result =
nock('http://xptests82.blob.core.test-cint.azure-test.net:80')
  .put('/deployment-templates?restype=container')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ContainerAlreadyExists</Code><Message>The specified container already exists.\nRequestId:fc843124-015e-4c17-aa92-eb580eb0bc22\nTime:2014-03-27T00:36:26.1851756Z</Message></Error>", { 'content-length': '230',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fc843124-015e-4c17-aa92-eb580eb0bc22',
  'x-ms-version': '2012-02-12',
  date: 'Thu, 27 Mar 2014 00:36:26 GMT' });
 return result; },
function (nock) {
var result =
nock('http://xptests82.blob.core.test-cint.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/deployment-templates/blob', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'GsbxbxODESm1PR5cxmMWZg==',
  'last-modified': 'Thu, 27 Mar 2014 00:36:25 GMT',
  etag: '"0x8D1176BB8639830"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd82db2cd-abf2-4198-902f-ddc52c8c7afd',
  'x-ms-version': '2012-02-12',
  date: 'Thu, 27 Mar 2014 00:36:24 GMT' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/deployments/mydep/validate?&api-version=2014-04-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '2e22e4ef-40e0-4e5a-b3b8-f1866808835b',
  'x-ms-correlation-request-id': '2e22e4ef-40e0-4e5a-b3b8-f1866808835b',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003626Z:2e22e4ef-40e0-4e5a-b3b8-f1866808835b',
  date: 'Thu, 27 Mar 2014 00:36:26 GMT',
  'content-length': '0' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/deployments/mydep?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/deployments/mydep\",\"name\":\"mydep\",\"properties\":{\"templateLink\":{\"uri\":\"http://xptests82.blob.core.test-cint.azure-test.net/deployment-templates/blob?se=2014-03-28T00:36:01Z&sp=r&sr=b&sv=2012-02-12&sig=NQRsU4KvfOLFDIpDeVDSnaG3QooVu4WW63TSszPqhGc%3D\",\"contentVersion\":\"1.0.0.0\"},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2014-03-27T00:36:26.7711931Z\",\"correlationId\":\"f3ab5766-73d3-4251-8720-c9f41a06e7c5\",\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/providers/Microsoft.Web/serverFarms/xDeploymentTestHost1\",\"resourceType\":\"Microsoft.Web/serverFarms\",\"resourceName\":\"xDeploymentTestHost1\"}],\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/providers/Microsoft.Web/Sites/xDeploymentTestSite1\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite1\"}],\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite1\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost1\"},\"siteMode\":{\"type\":\"String\",\"value\":\"Limited\"},\"computeMode\":{\"type\":\"String\",\"value\":\"Shared\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"North Europe\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3ab5766-73d3-4251-8720-c9f41a06e7c5',
  'x-ms-correlation-request-id': 'f3ab5766-73d3-4251-8720-c9f41a06e7c5',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003626Z:f3ab5766-73d3-4251-8720-c9f41a06e7c5',
  date: 'Thu, 27 Mar 2014 00:36:26 GMT',
  'content-length': '1379' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2\",\"name\":\"xplatTestGCreate2\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f8561509-3334-42a4-aff9-78705beb0b3c',
  'x-ms-correlation-request-id': 'f8561509-3334-42a4-aff9-78705beb0b3c',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003627Z:f8561509-3334-42a4-aff9-78705beb0b3c',
  date: 'Thu, 27 Mar 2014 00:36:27 GMT',
  'content-length': '207' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/deployments/?&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/deployments/mydep\",\"name\":\"mydep\",\"properties\":{\"templateLink\":{\"uri\":\"http://xptests82.blob.core.test-cint.azure-test.net/deployment-templates/blob?se=2014-03-28T00:36:01Z&sp=r&sr=b&sv=2012-02-12&sig=NQRsU4KvfOLFDIpDeVDSnaG3QooVu4WW63TSszPqhGc%3D\",\"contentVersion\":\"1.0.0.0\"},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2014-03-27T00:36:26.7711931Z\",\"correlationId\":\"f3ab5766-73d3-4251-8720-c9f41a06e7c5\",\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/providers/Microsoft.Web/serverFarms/xDeploymentTestHost1\",\"resourceType\":\"Microsoft.Web/serverFarms\",\"resourceName\":\"xDeploymentTestHost1\"}],\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2/providers/Microsoft.Web/Sites/xDeploymentTestSite1\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite1\"}],\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite1\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost1\"},\"siteMode\":{\"type\":\"String\",\"value\":\"Limited\"},\"computeMode\":{\"type\":\"String\",\"value\":\"Shared\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"North Europe\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}}}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f7d7643-f4c5-4ea3-ba62-c8b08aac8a2a',
  'x-ms-correlation-request-id': '0f7d7643-f4c5-4ea3-ba62-c8b08aac8a2a',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003627Z:0f7d7643-f4c5-4ea3-ba62-c8b08aac8a2a',
  date: 'Thu, 27 Mar 2014 00:36:26 GMT',
  'content-length': '1391' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .delete('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGCreate2?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-request-id': 'c0cba35f-c83c-4a00-8cc1-1159aa86370a',
  'x-ms-correlation-request-id': 'c0cba35f-c83c-4a00-8cc1-1159aa86370a',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003628Z:c0cba35f-c83c-4a00-8cc1-1159aa86370a',
  date: 'Thu, 27 Mar 2014 00:36:27 GMT',
  'content-length': '0' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-request-id': '5bb93197-51f5-4e54-9909-a68147144db5',
  'x-ms-correlation-request-id': '5bb93197-51f5-4e54-9909-a68147144db5',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003647Z:5bb93197-51f5-4e54-9909-a68147144db5',
  date: 'Thu, 27 Mar 2014 00:36:47 GMT',
  'content-length': '0' });
 return result; }],
[function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGrpShow3' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f2799d33-769c-4392-b78a-53704e3e8779',
  'x-ms-correlation-request-id': 'f2799d33-769c-4392-b78a-53704e3e8779',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003648Z:f2799d33-769c-4392-b78a-53704e3e8779',
  date: 'Thu, 27 Mar 2014 00:36:48 GMT',
  'content-length': '109' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3\",\"name\":\"xplatTestGrpShow3\",\"location\":\"South Central US\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b509b288-9ca6-43dc-9f1e-973cb71bd4f2',
  'x-ms-correlation-request-id': 'b509b288-9ca6-43dc-9f1e-973cb71bd4f2',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003648Z:b509b288-9ca6-43dc-9f1e-973cb71bd4f2',
  date: 'Thu, 27 Mar 2014 00:36:48 GMT',
  'content-length': '197' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3\",\"name\":\"xplatTestGrpShow3\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a6c0c6b4-2bd7-492f-a2df-b2bed3283c93',
  'x-ms-correlation-request-id': 'a6c0c6b4-2bd7-492f-a2df-b2bed3283c93',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003649Z:a6c0c6b4-2bd7-492f-a2df-b2bed3283c93',
  date: 'Thu, 27 Mar 2014 00:36:49 GMT',
  'content-length': '195' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourceGroups/xplatTestGrpShow3/resources?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '144e6a7e-7059-429a-ac47-7fd4d6271090',
  'x-ms-correlation-request-id': '144e6a7e-7059-429a-ac47-7fd4d6271090',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003649Z:144e6a7e-7059-429a-ac47-7fd4d6271090',
  date: 'Thu, 27 Mar 2014 00:36:49 GMT',
  'content-length': '12' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .delete('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/resourcegroups/xplatTestGrpShow3?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-request-id': '74892787-a889-4cd4-912b-7e2310631668',
  'x-ms-correlation-request-id': '74892787-a889-4cd4-912b-7e2310631668',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003649Z:74892787-a889-4cd4-912b-7e2310631668',
  date: 'Thu, 27 Mar 2014 00:36:49 GMT',
  'content-length': '0' });
 return result; },
function (nock) {
var result =
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/19b520e4-39a7-4fac-b1da-d940f2d39a38/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ==?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-request-id': 'f7b4ea5f-506d-4da9-8851-51dc46681e8b',
  'x-ms-correlation-request-id': 'f7b4ea5f-506d-4da9-8851-51dc46681e8b',
  'x-ms-routing-request-id': 'CENTRALUS:20140327T003712Z:f7b4ea5f-506d-4da9-8851-51dc46681e8b',
  date: 'Thu, 27 Mar 2014 00:37:12 GMT',
  'content-length': '0' });
 return result; }]];