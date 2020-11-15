import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import Chart from './components/chart';
import Header from './components/header';
import Creator from './components/creator';
import SyncIndicator from './components/sync-indicator';

const App = () => {
  const [showCreator, setShowCreator] = useState<boolean>(false);
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <SyncIndicator />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header onOpenCreator={() => setShowCreator(true)} />
          <Creator
            isCreatorVisible={showCreator}
            onHideCreator={() => setShowCreator(false)}
          />
          <Chart />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
