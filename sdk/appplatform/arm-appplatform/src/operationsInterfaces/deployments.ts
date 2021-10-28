/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DeploymentResource,
  DeploymentsListOptionalParams,
  DeploymentsListForClusterOptionalParams,
  DeploymentsGetOptionalParams,
  DeploymentsGetResponse,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsCreateOrUpdateResponse,
  DeploymentsDeleteOptionalParams,
  DeploymentsUpdateOptionalParams,
  DeploymentsUpdateResponse,
  DeploymentsStartOptionalParams,
  DeploymentsStopOptionalParams,
  DeploymentsRestartOptionalParams,
  DeploymentsGetLogFileUrlOptionalParams,
  DeploymentsGetLogFileUrlResponse,
  DiagnosticParameters,
  DeploymentsGenerateHeapDumpOptionalParams,
  DeploymentsGenerateThreadDumpOptionalParams,
  DeploymentsStartJFROptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Deployments. */
export interface Deployments {
  /**
   * Handles requests to list all resources in an App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: DeploymentsListOptionalParams
  ): PagedAsyncIterableIterator<DeploymentResource>;
  /**
   * List deployments for a certain service
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listForCluster(
    resourceGroupName: string,
    serviceName: string,
    options?: DeploymentsListForClusterOptionalParams
  ): PagedAsyncIterableIterator<DeploymentResource>;
  /**
   * Get a Deployment and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams
  ): Promise<DeploymentsGetResponse>;
  /**
   * Create a new Deployment or update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    deploymentResource: DeploymentResource,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateResponse>,
      DeploymentsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new Deployment or update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    deploymentResource: DeploymentResource,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<DeploymentsCreateOrUpdateResponse>;
  /**
   * Operation to delete a Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Operation to delete a Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Operation to update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    deploymentResource: DeploymentResource,
    options?: DeploymentsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsUpdateResponse>,
      DeploymentsUpdateResponse
    >
  >;
  /**
   * Operation to update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    deploymentResource: DeploymentResource,
    options?: DeploymentsUpdateOptionalParams
  ): Promise<DeploymentsUpdateResponse>;
  /**
   * Start the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Start the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsStartOptionalParams
  ): Promise<void>;
  /**
   * Stop the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stop the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsStopOptionalParams
  ): Promise<void>;
  /**
   * Restart the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsRestartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Restart the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsRestartOptionalParams
  ): Promise<void>;
  /**
   * Get deployment log file URL
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The options parameters.
   */
  getLogFileUrl(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    options?: DeploymentsGetLogFileUrlOptionalParams
  ): Promise<DeploymentsGetLogFileUrlResponse>;
  /**
   * Generate Heap Dump
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginGenerateHeapDump(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsGenerateHeapDumpOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Generate Heap Dump
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginGenerateHeapDumpAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsGenerateHeapDumpOptionalParams
  ): Promise<void>;
  /**
   * Generate Thread Dump
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginGenerateThreadDump(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsGenerateThreadDumpOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Generate Thread Dump
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginGenerateThreadDumpAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsGenerateThreadDumpOptionalParams
  ): Promise<void>;
  /**
   * Start JFR
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginStartJFR(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsStartJFROptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Start JFR
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param diagnosticParameters Parameters for the diagnostic operation
   * @param options The options parameters.
   */
  beginStartJFRAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    deploymentName: string,
    diagnosticParameters: DiagnosticParameters,
    options?: DeploymentsStartJFROptionalParams
  ): Promise<void>;
}