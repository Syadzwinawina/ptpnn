import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';
import NavBarA from '../components/NavBarA';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const Dashboard_A = () => {
  const [isBarChartVisible, setIsBarChartVisible] = useState(true);

  const toggleChartType = () => {
    setIsBarChartVisible(!isBarChartVisible);
  };

  return (
    <>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Dashboard Admin</Text>
      </View>

      <View style={styles.container}>
        {isBarChartVisible ? (
          
          <LineChart
            data={data}
            width={400}
            height={300}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            verticalLabelRotation={30}
          />
        ) : (
          <LineChart
            data={data}
            width={400}
            height={300}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            verticalLabelRotation={30}
          />
        )}

        <Button
          title={isBarChartVisible ? 'Grafik Sounding' : 'Grafik Rendemen'}
          onPress={toggleChartType}
          color="green"
        />
        <NavBarA activePage={"Dashboard_A"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Dashboard_A;
