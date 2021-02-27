import * as React from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale } from '@devexpress/dx-react-chart';

interface IDataItem {
  day: string,
  score: number,
}

const chartData: IDataItem[] = [
  { day: 'S', score: 14 },
  { day: 'M', score: 15 },
  { day: 'T', score: 20 },
  { day: 'W', score: 26 },
  { day: 'R', score: 29 },
  { day: 'F', score: 30 },
];

export default class Graph extends React.Component<object, object> {
  public render(): React.ReactNode {
    return (
        <Chart
          data={chartData}
        >
          <ValueScale name="score" />

          <ArgumentAxis />
          <ValueAxis scaleName="score" showGrid={false} showLine={false} showTicks={true} />

          <BarSeries
            name="History"
            valueField="score"
            argumentField="day"
            scaleName="score"
          />
        </Chart>
    );
  }
}
