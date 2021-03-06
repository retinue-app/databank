/* @internal */

/**
 * Upgrade categories in the game.
 */
export type UpgradeType =
  | 'Armament'
  | 'Command'
  | 'Comms'
  | 'Counterpart'
  | 'Crew'
  | 'Force'
  | 'Gear'
  | 'Generator'
  | 'Grenades'
  | 'Hardpoint'
  | 'Heavy Weapon'
  | 'Ordnance'
  | 'Personnel'
  | 'Pilot'
  | 'Training';
export type DefinePassive = null;
export type DefinePassiveWithAmount = number;
/**
 * Factions that are part of the game.
 */
export type Faction =
  | (
      | 'Galactic Empire'
      | 'Galactic Republic'
      | 'Separatist Alliance'
      | 'Rebel Alliance'
    )
  | string;
/**
 * Ranks that are part of the game. These values are not customizable for custom content.
 */
export type UnitRank =
  | 'Commander'
  | 'Operative'
  | 'Corps'
  | 'Special Forces'
  | 'Support'
  | 'Heavy';
/**
 * Unit types and sub-types
 */
export type UnitType =
  | ('Trooper' | 'Vehicle')
  | {
      Trooper: string;
    }
  | {
      Vehicle: string;
    };
/**
 * Sides of a notched base.
 */
export type NotchedBaseSide = 'Front' | 'Sides' | 'Rear';
export type DefinePassiveWithSurge = 'Hit' | 'Crit';
export type DefinePassiveWithActions = ('Attack' | 'Dodge' | 'Move')[];
export type DefinePassiveWithTerrain =
  | 'Ground'
  | {
      Air: number;
    };
export type DefinePassiveWithEffects = (
  | 'Blast'
  | 'Deflect'
  | 'Melee'
  | 'Pierce'
  | 'Pierce (Melee)'
  | 'Range 1 Weapons'
)[];

/**
 * A set of keywords that provide a passive effect.
 */
export interface PassiveKeywordSet {
  '$Add Upgrade'?: UpgradeType;
  '$Add and Equip Upgrade'?: UpgradeType;
  '$Coordinate: Range 1-2'?: DefinePassive;
  '$Increase Courage'?: DefinePassiveWithAmount;
  '$Lose Keyword'?: PassiveKeywordSet1;
  '$Modify Maximum Speed'?: DefinePassiveWithAmount;
  '$Move While Engaged With Immobilized Unit'?: null;
  $Surge?: DefinePassiveWithSurge;
  AI?: DefinePassiveWithActions;
  Agile?: DefinePassiveWithAmount;
  Armor?: DefinePassive | DefinePassiveWithAmount;
  Arsenal?: DefinePassiveWithAmount;
  Authoritative?: DefinePassive;
  Barrage?: DefinePassive;
  Block?: DefinePassive;
  Bounty?: DefinePassive;
  Charge?: DefinePassive;
  'Climbing Vehicle'?: DefinePassive;
  Compel?: DefinePassive;
  Coordinate?: TargetSet;
  Cover?: DefinePassiveWithAmount;
  'Covert Ops'?: DefinePassive;
  Cunning?: DefinePassive;
  'Danger Sense'?: DefinePassiveWithAmount;
  Dauntless?: DefinePassive;
  Defend?: DefinePassiveWithAmount;
  Deflect?: DefinePassive;
  Demoralize?: DefinePassiveWithAmount;
  Detachment?: TargetSet;
  Detonate?: DefinePassiveWithExplosive;
  Disciplined?: DefinePassiveWithAmount;
  Disengage?: DefinePassive;
  'Djem So Mastery'?: DefinePassive;
  Duelist?: DefinePassive;
  Enrage?: DefinePassiveWithAmount;
  Entourage?: TargetSet;
  Equip?: TargetSet;
  Exemplar?: DefinePassive;
  'Expert Climber'?: DefinePassive;
  'Field Commander'?: DefinePassive;
  'Fire Support'?: DefinePassive;
  Flawed?: DefinePassive;
  'Full Pivot'?: DefinePassive;
  Generator?: DefinePassiveWithAmount;
  Grounded?: DefinePassive;
  Guardian?: DefinePassiveWithAmount;
  Gunslinger?: DefinePassive;
  'Heavy Weapon Team'?: DefinePassive;
  Hover?: DefinePassiveWithTerrain;
  Immune?: DefinePassiveWithEffects;
  Impervious?: DefinePassive;
  Incognito?: DefinePassive;
  Inconspicuous?: DefinePassive;
  Indomitable?: DefinePassive;
  Infiltrate?: DefinePassive;
  Inspire?: DefinePassiveWithAmount;
  'Jedi Hunter'?: DefinePassive;
  'Juyo Mastery'?: DefinePassive;
  'Light Transport'?: DefinePassiveWithTransport;
  Loadout?: DefinePassive;
  'Low Profile'?: DefinePassive;
  'Makashi Mastery'?: DefinePassive;
  Marksman?: DefinePassive;
  'Master of the Force'?: DefinePassiveWithAmount;
  Nimble?: DefinePassive;
  Outmaneuver?: DefinePassive;
  Plodding?: DefinePassive;
  Precise?: DefinePassiveWithAmount;
  Ready?: DefinePassiveWithAmount;
  Recharge?: DefinePassiveWithAmount;
  Regenerate?: DefinePassiveWithAmount;
  Relentless?: DefinePassive;
  Reliable?: DefinePassiveWithAmount;
  Reposition?: DefinePassive;
  Retinue?: TargetSet;
  Scale?: DefinePassive;
  Scout?: DefinePassiveWithAmount;
  'Scouting Party'?: DefinePassiveWithAmount;
  Sentinel?: DefinePassive;
  Sharpshooter?: DefinePassiveWithAmount;
  Shielded?: DefinePassiveWithAmount;
  'Soresu Mastery'?: DefinePassive;
  Speeder?: DefinePassiveWithAmount;
  Spur?: DefinePassive;
  Stationary?: DefinePassive;
  Steady?: DefinePassive;
  Tactical?: DefinePassiveWithAmount;
  Target?: DefinePassiveWithAmount;
  Teamwork?: TargetSet;
  Tempted?: DefinePassive;
  Transport?: DefinePassiveWithTransport;
  'Uncanny Luck'?: DefinePassiveWithAmount;
  Unhindered?: DefinePassive;
  Versatile?: DefinePassive;
  'Weak Point'?: DefinePassiveWithSides;
  'Wheel Mode'?: DefinePassive;
  [k: string]:
    | (
        | undefined
        | DefinePassive
        | DefinePassiveWithActions
        | DefinePassiveWithAmount
        | DefinePassiveWithEffects
        | DefinePassiveWithExplosive
        | PassiveKeywordSet1
        | DefinePassiveWithSides
        | DefinePassiveWithSurge
        | TargetSet
        | DefinePassiveWithTransport
        | DefinePassiveWithTerrain
        | UpgradeType
      )
    | undefined;
}
/**
 * A set of keywords that provide a passive effect.
 */
export interface PassiveKeywordSet1 {
  '$Add Upgrade'?: UpgradeType;
  '$Add and Equip Upgrade'?: UpgradeType;
  '$Coordinate: Range 1-2'?: null;
  '$Increase Courage'?: number;
  '$Lose Keyword'?: PassiveKeywordSet1;
  '$Modify Maximum Speed'?: number;
  '$Move While Engaged With Immobilized Unit'?: null;
  $Surge?: 'Hit' | 'Crit';
  AI?: ('Attack' | 'Dodge' | 'Move')[];
  Agile?: number;
  Armor?: null | number;
  Arsenal?: number;
  Authoritative?: null;
  Barrage?: null;
  Block?: null;
  Bounty?: null;
  Charge?: null;
  'Climbing Vehicle'?: null;
  Compel?: null;
  Coordinate?: TargetSet;
  Cover?: number;
  'Covert Ops'?: null;
  Cunning?: null;
  'Danger Sense'?: number;
  Dauntless?: null;
  Defend?: number;
  Deflect?: null;
  Demoralize?: number;
  Detachment?: TargetSet;
  Detonate?: {
    amount: number;
    /**
     * This name must be identical to a weapon on an upgrade or command card.
     */
    explosive: string;
  };
  Disciplined?: number;
  Disengage?: null;
  'Djem So Mastery'?: null;
  Duelist?: null;
  Enrage?: number;
  Entourage?: TargetSet;
  Equip?: TargetSet;
  Exemplar?: null;
  'Expert Climber'?: null;
  'Field Commander'?: null;
  'Fire Support'?: null;
  Flawed?: null;
  'Full Pivot'?: null;
  Generator?: number;
  Grounded?: null;
  Guardian?: number;
  Gunslinger?: null;
  'Heavy Weapon Team'?: null;
  Hover?:
    | 'Ground'
    | {
        Air: number;
      };
  Immune?: (
    | 'Blast'
    | 'Deflect'
    | 'Melee'
    | 'Pierce'
    | 'Pierce (Melee)'
    | 'Range 1 Weapons'
  )[];
  Impervious?: null;
  Incognito?: null;
  Inconspicuous?: null;
  Indomitable?: null;
  Infiltrate?: null;
  Inspire?: number;
  'Jedi Hunter'?: null;
  'Juyo Mastery'?: null;
  'Light Transport'?: {
    type: 'Open' | 'Closed';
    capacity: number;
  };
  Loadout?: null;
  'Low Profile'?: null;
  'Makashi Mastery'?: null;
  Marksman?: null;
  'Master of the Force'?: number;
  Nimble?: null;
  Outmaneuver?: null;
  Plodding?: null;
  Precise?: number;
  Ready?: number;
  Recharge?: number;
  Regenerate?: number;
  Relentless?: null;
  Reliable?: number;
  Reposition?: null;
  Retinue?: TargetSet;
  Scale?: null;
  Scout?: number;
  'Scouting Party'?: number;
  Sentinel?: null;
  Sharpshooter?: number;
  Shielded?: number;
  'Soresu Mastery'?: null;
  Speeder?: number;
  Spur?: null;
  Stationary?: null;
  Steady?: null;
  Tactical?: number;
  Target?: number;
  Teamwork?: TargetSet;
  Tempted?: null;
  Transport?: {
    type: 'Open' | 'Closed';
    capacity: number;
  };
  'Uncanny Luck'?: number;
  Unhindered?: null;
  Versatile?: null;
  'Weak Point'?: {
    amount: number;
    sides: NotchedBaseSide[];
  };
  'Wheel Mode'?: null;
  [k: string]:
    | (
        | undefined
        | null
        | ('Attack' | 'Dodge' | 'Move')[]
        | number
        | (
            | 'Blast'
            | 'Deflect'
            | 'Melee'
            | 'Pierce'
            | 'Pierce (Melee)'
            | 'Range 1 Weapons'
          )[]
        | {
            amount: number;
            /**
             * This name must be identical to a weapon on an upgrade or command card.
             */
            explosive: string;
          }
        | PassiveKeywordSet1
        | {
            amount: number;
            sides: NotchedBaseSide[];
          }
        | ('Hit' | 'Crit')
        | TargetSet
        | {
            type: 'Open' | 'Closed';
            capacity: number;
          }
        | (
            | 'Ground'
            | {
                Air: number;
              }
          )
        | UpgradeType
      )
    | undefined;
}
/**
 * A set of units, types, ranks, targeted by an effect.
 */
export interface TargetSet {
  /**
   * Factions. Multiple entries is treated as an OR.
   */
  factions?: Faction[];
  /**
   * Force alignments. Multiple entries is treated as an OR.
   */
  forceAlignment?: ('Light Side' | 'Dark Side')[];
  /**
   * Unit names. Multiple entries is treated as an OR.
   */
  units?: string[];
  /**
   * Unit ranks. Multiple entries is treated as an OR.
   */
  unitRanks?: UnitRank[];
  /**
   * Unit types. Multiple entries is treated as an OR.
   */
  unitTypes?: UnitType[];
  /**
   * This unit or effect is unique (once per list or per game).
   */
  isUnique?: true;
  /**
   * Units that have an upgrade icon. Multiple entries is treated as an OR.
   */
  hasUpgradeSlot?: UpgradeType[];
}
export interface DefinePassiveWithExplosive {
  amount: number;
  /**
   * This name must be identical to a weapon on an upgrade or command card.
   */
  explosive: string;
}
export interface DefinePassiveWithTransport {
  type: 'Open' | 'Closed';
  capacity: number;
}
export interface DefinePassiveWithSides {
  amount: number;
  sides: NotchedBaseSide[];
}
