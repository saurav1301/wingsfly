export interface Task {
  title: string;
  time: string;
  tags: string[]; // ✅ add this line
  status: 'pending' | 'completed';
  icon: string;
  statusChip?: string;
}
