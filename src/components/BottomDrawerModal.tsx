import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../utils/constants';

interface Option {
  label: string;
  icon: string;
  description: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  theme?: typeof COLORS.light;
}

const options: Option[] = [
  {
    label: 'Habit',
    icon: 'brain',
    description: 'Activity that repeats over time. It has detailed tracking and statistics.',
  },
  {
    label: 'Recurring Task',
    icon: 'calendar-repeat',
    description: 'Activity that repeats over time. It has detailed tracking and statistics.',
  },
  {
    label: 'Task',
    icon: 'check-circle-outline',
    description: 'Single instance activity without tracking over time.',
  },
  {
    label: 'Goal of the Day',
    icon: 'target-variant',
    description: 'A specific target set for oneself to achieve within a single day.',
  },
];

const BottomDrawerModal: React.FC<Props> = ({ visible, onClose, theme = COLORS.light }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity activeOpacity={1} style={[styles.drawer, { backgroundColor: theme.background }]}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.optionCard}>
                {/* Left Icon Box */}
                <View style={styles.iconCircle}>
                  <Icon name={item.icon} size={22} color={COLORS.primary} />
                </View>

                {/* Text Block */}
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{item.label}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>

                {/* Right Chevron */}
                <Icon name="chevron-right" size={22} color={COLORS.gray} />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  drawer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 20,
    maxHeight: '70%',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF3FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  description: {
    fontSize: 13,
    color: COLORS.gray,
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 6,
  },
});

export default BottomDrawerModal;
