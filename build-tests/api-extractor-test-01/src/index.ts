// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * api-extractor-test-01
 *
 * @remarks
 * This library is consumed by api-extractor-test-02 and api-extractor-test-03.
 * It tests the basic types of definitions, and all the weird cases for following
 * chains of type aliases.
 *
 * @packagedocumentation
 */

/**
 * A simple, normal definition
 * @public
 */
export interface ISimpleInterface {
}

/**
 * Test different kinds of ambient definitions
 * @public
 */
export class AmbientConsumer {
  /**
   * Found via tsconfig.json's "lib" setting, which specifies the built-in "es2015.collection"
   */
  public builtinDefinition1(): Map<string, string> {
    return new Map<string, string>();
  }

  /**
   * Found via tsconfig.json's "lib" setting, which specifies the built-in "es2015.promise"
   */
  public builtinDefinition2(): Promise<void> {
    return new Promise<void>(() => { /* */ });
  }

  /**
   * Configured via tsconfig.json's "lib" setting, which specifies "@types/jest".
   * The emitted index.d.ts gets a reference like this:  <reference types="jest" />
   */
  public definitelyTyped(): jest.Context {
    return {} as jest.Context;
  }

  /**
   * Found via tsconfig.json's "include" setting point to a *.d.ts file.
   * This is an old-style Definitely Typed definition, which is the worst possible kind,
   * because consumers are expected to provide this, with no idea where it came from.
   */
  public localTypings(): IAmbientInterfaceExample {
    return {} as IAmbientInterfaceExample;
  }
}

/**
 * Example decorator
 * @public
 */
export function virtual(target: Object, propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>): void {
  // Eventually we may implement runtime validation (e.g. in DEBUG builds)
  // but currently this decorator is only used by the build tools.
}

/**
 * Tests a decorator
 * @public
 */
export class DecoratorTest {
  /**
   * Function with a decorator
   */
  @virtual
  public test(): void {
    console.log('');
  }
}

export { default as AbstractClass } from './AbstractClass';
export { default as AbstractClass2, AbstractClass3 } from './AbstractClass2';

export { ClassWithTypeLiterals } from './ClassWithTypeLiterals';

export * from './DeclarationMerging';

export {
  DefaultExportEdgeCase,
  default as ClassExportedAsDefault
} from './DefaultExportEdgeCase';

export { ForgottenExportConsumer1 } from './ForgottenExportConsumer1';
export { ForgottenExportConsumer2 } from './ForgottenExportConsumer2';
export { ForgottenExportConsumer3 } from './ForgottenExportConsumer3';

export { default as IInterfaceAsDefaultExport } from './IInterfaceAsDefaultExport';

/**
 * Test the alias-following logic:  This class gets aliased twice before being
 * exported from the package.
 */
export { ReexportedClass1 as ReexportedClass } from './ReexportedClass1';

export { TypeReferencesInAedoc as _TypeReferencesInAedoc } from './TypeReferencesInAedoc';