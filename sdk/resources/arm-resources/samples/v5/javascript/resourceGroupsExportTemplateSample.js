/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ResourceManagementClient } = require("@azure/arm-resources");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Captures the specified resource group as a template.
 *
 * @summary Captures the specified resource group as a template.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/ExportResourceGroup.json
 */
async function exportAResourceGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "my-resource-group";
  const parameters = {
    options: "IncludeParameterDefaultValue,IncludeComments",
    resources: ["*"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.resourceGroups.beginExportTemplateAndWait(
    resourceGroupName,
    parameters
  );
  console.log(result);
}

exportAResourceGroup().catch(console.error);

/**
 * This sample demonstrates how to Captures the specified resource group as a template.
 *
 * @summary Captures the specified resource group as a template.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/ExportResourceGroupWithFiltering.json
 */
async function exportAResourceGroupWithFiltering() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "my-resource-group";
  const parameters = {
    options: "SkipResourceNameParameterization",
    resources: [
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/my-resource-group/providers/My.RP/myResourceType/myFirstResource",
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.resourceGroups.beginExportTemplateAndWait(
    resourceGroupName,
    parameters
  );
  console.log(result);
}

exportAResourceGroupWithFiltering().catch(console.error);