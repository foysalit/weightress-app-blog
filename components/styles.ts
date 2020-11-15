import {Dimensions, StyleSheet} from 'react-native';

const windowDim = Dimensions.get('window');
export const windowHeight = windowDim.height;
export const windowWidth = windowDim.width;
export const primaryColor = '#FB8C00';

export const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  addButton: {
    borderColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 3,
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    borderLeftWidth: 3,
    paddingLeft: 10,
    borderLeftColor: primaryColor,
  },
});

export const creatorStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    height: windowHeight / 2,
    shadowColor: '#cacaca',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topCloseButton: {
    padding: 10,
    color: '#494949',
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#c9c9c9',
  },
});

export const chartStyles = StyleSheet.create({
  chart: {
    marginLeft: 15,
    borderRadius: 10,
  },
});

export const chartConfig = {
  backgroundColor: primaryColor,
  backgroundGradientFrom: primaryColor,
  backgroundGradientTo: '#FFA726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export const syncStyles = {
  container: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  text: {
    color: '#FFFFFF',
  },
};
