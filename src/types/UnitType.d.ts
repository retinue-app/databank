/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unit types and sub-types
 */
export type UnitType = "Trooper" | Trooper | Vehicle;

/**
 * A trooper subtype.
 */
export interface Trooper {
  name: "Trooper";
  type: string;
}
/**
 * A vehicle subtype.
 */
export interface Vehicle {
  name: "Vehicle";
  type: string;
}
