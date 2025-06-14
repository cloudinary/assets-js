/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUsageGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type GetUsageRequest = {
  date?: RFCDate | undefined;
};

/** @internal */
export const GetUsageGlobals$inboundSchema: z.ZodType<
  GetUsageGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  cloud_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "cloud_name": "cloudName",
  });
});

/** @internal */
export type GetUsageGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const GetUsageGlobals$outboundSchema: z.ZodType<
  GetUsageGlobals$Outbound,
  z.ZodTypeDef,
  GetUsageGlobals
> = z.object({
  cloudName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    cloudName: "cloud_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUsageGlobals$ {
  /** @deprecated use `GetUsageGlobals$inboundSchema` instead. */
  export const inboundSchema = GetUsageGlobals$inboundSchema;
  /** @deprecated use `GetUsageGlobals$outboundSchema` instead. */
  export const outboundSchema = GetUsageGlobals$outboundSchema;
  /** @deprecated use `GetUsageGlobals$Outbound` instead. */
  export type Outbound = GetUsageGlobals$Outbound;
}

export function getUsageGlobalsToJSON(
  getUsageGlobals: GetUsageGlobals,
): string {
  return JSON.stringify(GetUsageGlobals$outboundSchema.parse(getUsageGlobals));
}

export function getUsageGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetUsageGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUsageGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUsageGlobals' from JSON`,
  );
}

/** @internal */
export const GetUsageRequest$inboundSchema: z.ZodType<
  GetUsageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().transform(v => new RFCDate(v)).optional(),
});

/** @internal */
export type GetUsageRequest$Outbound = {
  date?: string | undefined;
};

/** @internal */
export const GetUsageRequest$outboundSchema: z.ZodType<
  GetUsageRequest$Outbound,
  z.ZodTypeDef,
  GetUsageRequest
> = z.object({
  date: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUsageRequest$ {
  /** @deprecated use `GetUsageRequest$inboundSchema` instead. */
  export const inboundSchema = GetUsageRequest$inboundSchema;
  /** @deprecated use `GetUsageRequest$outboundSchema` instead. */
  export const outboundSchema = GetUsageRequest$outboundSchema;
  /** @deprecated use `GetUsageRequest$Outbound` instead. */
  export type Outbound = GetUsageRequest$Outbound;
}

export function getUsageRequestToJSON(
  getUsageRequest: GetUsageRequest,
): string {
  return JSON.stringify(GetUsageRequest$outboundSchema.parse(getUsageRequest));
}

export function getUsageRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUsageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUsageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUsageRequest' from JSON`,
  );
}
