import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../utils/constants';
import DateButton from '../components/DateButton';
import ProgressBar from '../components/ProgressBar';
import TaskItem from '../components/TaskItem';
import FloatingActionButton from '../components/FloatingActionButton';
import BottomDrawerModal from '../components/BottomDrawerModal';
import { Task } from '../types/Task';

const dateData = [
  { day: 'Sun', date: '15' },
  { day: 'Mon', date: '16' },
  { day: 'Tue', date: '17' },
  { day: 'Wed', date: '18' },
  { day: 'Thu', date: '19' },
  { day: 'Fri', date: '20' },
  { day: 'Sat', date: '21' },
];

const mockTasks: Task[] = [
  {
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    tags: ['Habit', 'Must'],
    status: 'completed',
    icon: 'calendar-check',
  },
  {
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
    icon: 'meditation',
  },
  {
    title: 'Save 200 Rupees Daily',
    time: '12:00 PM',
    tags: ['Habit'],
    status: 'pending',
    icon: 'cash-multiple',
    statusChip: '',
  },
  {
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    tags: ['Habit', 'Important'],
    status: 'pending',
    icon: 'run',
    statusChip: '12/31',
  },
  {
    title: 'Buy Sunflower for Mumma',
    time: '11:00 AM',
    tags: ['Task', 'Important'],
    status: 'pending',
    icon: 'flower-tulip-outline',
    statusChip: '0/1',
  },
];

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const theme = COLORS[colorScheme === 'dark' ? 'dark' : 'light'];

  const [selectedIndex, setSelectedIndex] = useState(3);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleTaskStatus = (index: number) => {
    const updated = [...tasks];
    updated[index].status =
      updated[index].status === 'completed' ? 'pending' : 'completed';
    setTasks(updated);
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={[styles.logo, { color: theme.primary }]}>WingsFly</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="magnify" size={24} color={theme.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Icon name="bell-outline" size={22} color={theme.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Icon name="cog-outline" size={22} color={theme.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Strip */}
        <FlatList
          data={dateData}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.dateStrip}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <DateButton
              day={item.day}
              date={item.date}
              selected={selectedIndex === index}
              onPress={() => setSelectedIndex(index)}
            />
          )}
        />

        {/* Quote Card + Progress */}
        <View style={[styles.quoteCard, { backgroundColor: theme.card || '#fff' }]}>
          <View style={{ marginTop: 10 }}>
            <ProgressBar progress={0.65} quote={''} />
          </View>
        </View>

        {/* Task List */}
        <View style={{ marginTop: 16 }}>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onToggleStatus={() => toggleTaskStatus(index)}
              theme={theme}
            />
          ))}
        </View>
      </ScrollView>

      {/* FAB and Modal */}
      <FloatingActionButton onPress={() => setModalVisible(true)} />
      <BottomDrawerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: 20,
    paddingBottom: 100,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateStrip: {
    paddingVertical: 16,
  },
  quoteCard: {
    borderRadius: 10,
    padding: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});

export default HomeScreen;
