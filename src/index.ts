import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RNExpoTinkoffAsdk.web.ts
// and on native platforms to RNExpoTinkoffAsdk.ts
import RNExpoTinkoffAsdkModule from './RNExpoTinkoffAsdkModule';
import RNExpoTinkoffAsdkView from './RNExpoTinkoffAsdkView';
import { ChangeEventPayload, RNExpoTinkoffAsdkViewProps } from './RNExpoTinkoffAsdk.types';

// Get the native constant value.
export const PI = RNExpoTinkoffAsdkModule.PI;

export function hello(): string {
  return RNExpoTinkoffAsdkModule.hello();
}

export async function setValueAsync(value: string) {
  return await RNExpoTinkoffAsdkModule.setValueAsync(value);
}

const emitter = new EventEmitter(RNExpoTinkoffAsdkModule ?? NativeModulesProxy.RNExpoTinkoffAsdk);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RNExpoTinkoffAsdkView, RNExpoTinkoffAsdkViewProps, ChangeEventPayload };
