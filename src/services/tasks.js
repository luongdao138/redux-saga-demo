const mockTasks = [
  {
    id: 1,
    title: 'Go to school',
    description: 'Go to school',
    completed: false,
  },
  {
    id: 2,
    title: 'Eat breakfast',
    description: 'Eat breakfast',
    completed: true,
  },
  {
    id: 3,
    title: 'Do homeword',
    description: 'Do homework',
    completed: false,
  },
];

export const getAllTasks = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const tasks = localStorage.getItem('tasks');
      resolve(tasks ? JSON.parse(tasks) : []);
    }, 1500);
  });

export const addTask = (task) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(task);
    }, 1500);
  });

export const deleteTask = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });

export const searchTasks = (searchTerm) => {
  console.log('Call API');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(searchTerm);
    }, 1000);
  });
};
