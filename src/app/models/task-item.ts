export interface TaskItem {
  id: string;
  name: string;
  status: TaskStatus;
}
export type TaskStatus = 'Active' | 'In-Active' | 'Completed';
