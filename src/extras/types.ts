import { BaseDerivable } from '../derivable/base-derivable';
import { Derivable, SettableDerivable } from '../derivable/derivable.interface';

/**
 * Returns true iff the provided `derivable` is a Derivable.
 *
 * @param derivable the object to test
 */
export function isDerivable<V>(derivable: Derivable<V>): derivable is Derivable<V>;
export function isDerivable(obj: any): obj is Derivable<any>;
export function isDerivable(derivable: any) {
    return derivable instanceof BaseDerivable;
}

/**
 * Returns true iff the provided `derivable` is a SettableDerivable.
 *
 * @param derivable the object to test
 */
export function isSettableDerivable<V>(derivable: Derivable<V>): derivable is SettableDerivable<V>;
export function isSettableDerivable(obj: any): obj is SettableDerivable<any>;
export function isSettableDerivable(derivable: any) {
    return isDerivable(derivable) && derivable.settable;
}
