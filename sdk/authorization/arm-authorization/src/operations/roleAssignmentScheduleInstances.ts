/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RoleAssignmentScheduleInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";
import {
  RoleAssignmentScheduleInstance,
  RoleAssignmentScheduleInstancesListForScopeNextOptionalParams,
  RoleAssignmentScheduleInstancesListForScopeOptionalParams,
  RoleAssignmentScheduleInstancesListForScopeResponse,
  RoleAssignmentScheduleInstancesGetOptionalParams,
  RoleAssignmentScheduleInstancesGetResponse,
  RoleAssignmentScheduleInstancesListForScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleAssignmentScheduleInstances operations. */
export class RoleAssignmentScheduleInstancesImpl
  implements RoleAssignmentScheduleInstances {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Initialize a new instance of the class RoleAssignmentScheduleInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets role assignment schedule instances of a role assignment schedule.
   * @param scope The scope of the role assignment schedule.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleAssignmentScheduleInstancesListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignmentScheduleInstance> {
    const iter = this.listForScopePagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForScopePagingPage(scope, options);
      }
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    options?: RoleAssignmentScheduleInstancesListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignmentScheduleInstance[]> {
    let result = await this._listForScope(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    options?: RoleAssignmentScheduleInstancesListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignmentScheduleInstance> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Gets role assignment schedule instances of a role assignment schedule.
   * @param scope The scope of the role assignment schedule.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleAssignmentScheduleInstancesListForScopeOptionalParams
  ): Promise<RoleAssignmentScheduleInstancesListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec
    );
  }

  /**
   * Gets the specified role assignment schedule instance.
   * @param scope The scope of the role assignments schedules.
   * @param roleAssignmentScheduleInstanceName The name (hash of schedule name + time) of the role
   *                                           assignment schedule to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentScheduleInstanceName: string,
    options?: RoleAssignmentScheduleInstancesGetOptionalParams
  ): Promise<RoleAssignmentScheduleInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role assignment schedule.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleAssignmentScheduleInstancesListForScopeNextOptionalParams
  ): Promise<RoleAssignmentScheduleInstancesListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listForScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleInstanceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleInstances/{roleAssignmentScheduleInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleInstance
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleInstanceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
