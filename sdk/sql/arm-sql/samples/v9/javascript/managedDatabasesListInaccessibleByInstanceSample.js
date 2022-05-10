/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of inaccessible managed databases in a managed instance
 *
 * @summary Gets a list of inaccessible managed databases in a managed instance
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/InaccessibleManagedDatabaseListByManagedInstance.json
 */
async function listInaccessibleManagedDatabasesByManagedInstances() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const managedInstanceName = "testcl";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabases.listInaccessibleByInstance(
    resourceGroupName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listInaccessibleManagedDatabasesByManagedInstances().catch(console.error);