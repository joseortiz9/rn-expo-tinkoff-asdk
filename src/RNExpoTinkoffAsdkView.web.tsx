import * as React from 'react';

import { RNExpoTinkoffAsdkViewProps } from './RNExpoTinkoffAsdk.types';

export default function RNExpoTinkoffAsdkView(props: RNExpoTinkoffAsdkViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
