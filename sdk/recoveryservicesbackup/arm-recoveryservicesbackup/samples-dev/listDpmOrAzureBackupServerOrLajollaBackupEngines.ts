/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.
 *
 * @summary Backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/Dpm/BackupEngines_List.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function listDpmOrAzureBackupServerOrLajollaBackupEngines() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "testVault";
  const resourceGroupName = "testRG";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backupEngines.list(
    vaultName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDpmOrAzureBackupServerOrLajollaBackupEngines().catch(console.error);