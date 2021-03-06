/* @internal */

/**
 * A set of keywords that provide an action.
 */
export interface ActionKeywordSet {
  Arm?: DefineActionWithExplosive;
  'Calculate Odds'?: DefineAction;
  Distract?: DefineAction;
  Jump?: DefineActionWithAmount;
  Observe?: DefineActionWithAmount;
  'Pulling the Strings'?: DefineAction;
  'Quick Thinking'?: DefineAction;
  Repair?: DefineActionWithCapacity;
  'Secret Mission'?: DefineAction;
  Smoke?: DefineActionWithAmount;
  Spotter?: DefineActionWithAmount;
  Treat?: DefineActionWithCapacity;
  'Take Cover'?: DefineActionWithAmount;
  [k: string]:
    | (
        | undefined
        | DefineAction
        | DefineActionWithAmount
        | DefineActionWithCapacity
        | DefineActionWithExplosive
      )
    | undefined;
}
export interface DefineActionWithExplosive {
  actions: number;
  amount: number;
  /**
   * This name must be identical to a weapon on an upgrade or command card.
   */
  explosive: string;
}
export interface DefineAction {
  actions: number;
}
export interface DefineActionWithAmount {
  actions: number;
  amount: number;
}
export interface DefineActionWithCapacity {
  actions: number;
  amount: number;
  capacity: number;
}
