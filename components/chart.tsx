import React, {FC} from 'react';
import withObservables from '@nozbe/with-observables';
import {LineChart} from 'react-native-chart-kit';

import {observeWeights, Weight} from '../data/helpers';
import {chartConfig, chartStyles, windowWidth} from './styles';

const Chart: FC<{weights: Weight[]}> = ({weights}) => {
  if (weights.length < 1) {
    return null;
  }

  const labels: string[] = [];
  const data: number[] = [];
  weights.forEach((w) => {
    labels.push(`${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`);
    data.push(w.weight);
  });
  return (
    <LineChart
      bezier
      height={250}
      width={windowWidth - 30}
      chartConfig={chartConfig}
      style={chartStyles.chart}
      data={{labels, datasets: [{data}]}}
    />
  );
};

const enhanceWithWeights = withObservables([], () => ({
  weights: observeWeights(),
}));

export default enhanceWithWeights(Chart);
