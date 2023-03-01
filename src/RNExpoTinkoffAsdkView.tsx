import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RNExpoTinkoffAsdkViewProps } from './RNExpoTinkoffAsdk.types';

const NativeView: React.ComponentType<RNExpoTinkoffAsdkViewProps> =
  requireNativeViewManager('RNExpoTinkoffAsdk');

export default function RNExpoTinkoffAsdkView(props: RNExpoTinkoffAsdkViewProps) {
  return <NativeView {...props} />;
}
