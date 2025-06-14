/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CloudinaryAssetMgmtCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { CloudinaryAssetMgmtError } from "../models/errors/cloudinaryassetmgmterror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get resource by public ID
 *
 * @remarks
 * Returns the details of a single resource specified by its public ID.
 */
export function assetsGetResourceByPublicId(
  client: CloudinaryAssetMgmtCore,
  resourceType: components.ResourceTypeParameter,
  type: operations.GetResourceByPublicIdType,
  publicId: string,
  colors?: boolean | undefined,
  mediaMetadata?: boolean | undefined,
  faces?: boolean | undefined,
  qualityAnalysis?: boolean | undefined,
  accessibilityAnalysis?: boolean | undefined,
  pages?: boolean | undefined,
  phash?: boolean | undefined,
  coordinates?: boolean | undefined,
  versions?: boolean | undefined,
  maxResults?: number | undefined,
  derivedNextCursor?: string | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.Info,
    | errors.ApiError
    | CloudinaryAssetMgmtError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    resourceType,
    type,
    publicId,
    colors,
    mediaMetadata,
    faces,
    qualityAnalysis,
    accessibilityAnalysis,
    pages,
    phash,
    coordinates,
    versions,
    maxResults,
    derivedNextCursor,
    options,
  ));
}

async function $do(
  client: CloudinaryAssetMgmtCore,
  resourceType: components.ResourceTypeParameter,
  type: operations.GetResourceByPublicIdType,
  publicId: string,
  colors?: boolean | undefined,
  mediaMetadata?: boolean | undefined,
  faces?: boolean | undefined,
  qualityAnalysis?: boolean | undefined,
  accessibilityAnalysis?: boolean | undefined,
  pages?: boolean | undefined,
  phash?: boolean | undefined,
  coordinates?: boolean | undefined,
  versions?: boolean | undefined,
  maxResults?: number | undefined,
  derivedNextCursor?: string | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.Info,
      | errors.ApiError
      | CloudinaryAssetMgmtError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const input: operations.GetResourceByPublicIdRequest = {
    resourceType: resourceType,
    type: type,
    publicId: publicId,
    colors: colors,
    mediaMetadata: mediaMetadata,
    faces: faces,
    qualityAnalysis: qualityAnalysis,
    accessibilityAnalysis: accessibilityAnalysis,
    pages: pages,
    phash: phash,
    coordinates: coordinates,
    versions: versions,
    maxResults: maxResults,
    derivedNextCursor: derivedNextCursor,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.GetResourceByPublicIdRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    cloud_name: encodeSimple("cloud_name", client._options.cloudName, {
      explode: false,
      charEncoding: "percent",
    }),
    public_id: encodeSimple("public_id", payload.public_id, {
      explode: false,
      charEncoding: "percent",
    }),
    resource_type: encodeSimple("resource_type", payload.resource_type, {
      explode: false,
      charEncoding: "percent",
    }),
    type: encodeSimple("type", payload.type, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}",
  )(pathParams);

  const query = encodeFormQuery({
    "accessibility_analysis": payload.accessibility_analysis,
    "colors": payload.colors,
    "coordinates": payload.coordinates,
    "derived_next_cursor": payload.derived_next_cursor,
    "faces": payload.faces,
    "max_results": payload.max_results,
    "media_metadata": payload.media_metadata,
    "pages": payload.pages,
    "phash": payload.phash,
    "quality_analysis": payload.quality_analysis,
    "versions": payload.versions,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getResourceByPublicId",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "404", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.Info,
    | errors.ApiError
    | CloudinaryAssetMgmtError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, components.Info$inboundSchema),
    M.jsonErr([400, 401, 404], errors.ApiError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
