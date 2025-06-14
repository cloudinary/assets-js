/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Folder,
  Folder$inboundSchema,
  Folder$Outbound,
  Folder$outboundSchema,
} from "./folder.js";

export type FoldersListResponse = {
  /**
   * The root folders in the product environment.
   */
  folders: Array<Folder>;
  /**
   * A cursor for pagination. Always null for root folders.
   */
  nextCursor: string | null;
  /**
   * The total number of root folders.
   */
  totalCount: number;
};

/** @internal */
export const FoldersListResponse$inboundSchema: z.ZodType<
  FoldersListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  folders: z.array(Folder$inboundSchema),
  next_cursor: z.nullable(z.string()),
  total_count: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "next_cursor": "nextCursor",
    "total_count": "totalCount",
  });
});

/** @internal */
export type FoldersListResponse$Outbound = {
  folders: Array<Folder$Outbound>;
  next_cursor: string | null;
  total_count: number;
};

/** @internal */
export const FoldersListResponse$outboundSchema: z.ZodType<
  FoldersListResponse$Outbound,
  z.ZodTypeDef,
  FoldersListResponse
> = z.object({
  folders: z.array(Folder$outboundSchema),
  nextCursor: z.nullable(z.string()),
  totalCount: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    nextCursor: "next_cursor",
    totalCount: "total_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FoldersListResponse$ {
  /** @deprecated use `FoldersListResponse$inboundSchema` instead. */
  export const inboundSchema = FoldersListResponse$inboundSchema;
  /** @deprecated use `FoldersListResponse$outboundSchema` instead. */
  export const outboundSchema = FoldersListResponse$outboundSchema;
  /** @deprecated use `FoldersListResponse$Outbound` instead. */
  export type Outbound = FoldersListResponse$Outbound;
}

export function foldersListResponseToJSON(
  foldersListResponse: FoldersListResponse,
): string {
  return JSON.stringify(
    FoldersListResponse$outboundSchema.parse(foldersListResponse),
  );
}

export function foldersListResponseFromJSON(
  jsonString: string,
): SafeParseResult<FoldersListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FoldersListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FoldersListResponse' from JSON`,
  );
}
