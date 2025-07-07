import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../utils/constants';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleStatus: () => void;
  theme: typeof COLORS.light;
}

// Tag color mapping
const tagColors: Record<string, { bg: string; color: string }> = {
  Habit: { bg: '#F3F3F3', color: '#555' },
  Must: { bg: '#EFE2FF', color: '#9333EA' },
  Important: { bg: '#FFE9E6', color: '#D14343' },
  Task: { bg: '#E6F4FF', color: '#1D75D6' },
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleStatus, theme }) => {
  const isDone = task.status === 'completed';

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      {/* Left circular icon */}
      <View style={styles.avatar}>
        <Icon name={task.icon || 'account'} size={24} color={COLORS.primary} />
      </View>

      {/* Main Content */}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.chipRow}>
          {/* Time Chip */}
          <View style={[styles.chip, { backgroundColor: '#E0ECFF' }]}>
            <Icon name="clock-outline" size={14} color="#3B6EF5" />
            <Text style={[styles.chipText, { color: '#3B6EF5' }]}>{task.time}</Text>
          </View>

          {/* Tag Chips */}
          {task.tags?.map((tag, index) => {
            const tagStyle = tagColors[tag] || tagColors['Habit'];
            return (
              <View
                key={index}
                style={[styles.chip, { backgroundColor: tagStyle.bg }]}
              >
                <Text style={[styles.chipText, { color: tagStyle.color }]}>{tag}</Text>
              </View>
            );
          })}

          {/* Optional status chip like "0/1" */}
          {task.statusChip && (
            <View style={[styles.chip, { backgroundColor: '#FFF3DA' }]}>
              <Text style={[styles.chipText, { color: '#C98200' }]}>{task.statusChip}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Status Indicator */}
      <TouchableOpacity onPress={onToggleStatus} style={styles.statusCircle}>
        {isDone ? (
          <Icon name="check-circle" size={24} color="#4CAF50" />
        ) : (
          <Icon name="checkbox-blank-circle-outline" size={24} color={COLORS.gray} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  chipText: {
    fontSize: 12,
    marginLeft: 4,
  },
  statusCircle: {
    marginLeft: 10,
    marginTop: 6,
  },
});

export default TaskItem;
