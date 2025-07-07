// src/components/DateButton.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

interface Props {
  day: string;
  date: string;
  selected: boolean;
  onPress: () => void;
}

const DateButton: React.FC<Props> = ({ day, date, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
      <View style={styles.outerPill}>
        <Text style={styles.dayText}>{day}</Text>

        <View
          style={[
            styles.innerCircle,
            selected && { backgroundColor: COLORS.primary },
          ]}
        >
          <Text style={[styles.dateText, selected && { color: COLORS.white }]}>
            {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  outerPill: {
    backgroundColor: '#F1F1F1', // light grey
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  innerCircle: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    minWidth: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DateButton;
