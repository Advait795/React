// localStorage.clear();

const employee = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task A",
        description: "Complete the report",
        date: "2025-02-16",
        category: "Documentation",
      },
      {
        active: false,
        newTask: true,
        failed: false,
        completed: true,
        title: "Task B",
        description: "Fix UI bug",
        date: "2025-02-17",
        category: "Development",
      },
    ],
    taskSummary: { active: 3, newTask: 1, failed: 0, completed: 1 },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        completed: false,
        title: "Task C",
        description: "Update database",
        date: "2025-02-18",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: true,
        title: "Task D",
        description: "Debug API issue",
        date: "2025-02-19",
        category: "Backend",
      },
    ],
    taskSummary: { active: 1, newTask: 1, failed: 1, completed: 1 },
  },
  {
    id: 3,
    firstName: "Raj",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        title: "Task E",
        description: "Write unit tests",
        date: "2025-02-20",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: true,
        title: "Task F",
        description: "Refactor module",
        date: "2025-02-21",
        category: "Refactoring",
      },
    ],
    taskSummary: { active: 1, newTask: 1, failed: 0, completed: 1 },
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task G",
        description: "Optimize queries",
        date: "2025-02-22",
        category: "Database",
      },
      {
        active: false,
        newTask: true,
        failed: false,
        completed: true,
        title: "Task H",
        description: "Design new UI",
        date: "2025-02-23",
        category: "Design",
      },
    ],
    taskSummary: { active: 1, newTask: 1, failed: 0, completed: 1 },
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        title: "Task I",
        description: "Fix security vulnerability",
        date: "2025-02-24",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: true,
        title: "Task J",
        description: "Deploy latest build",
        date: "2025-02-25",
        category: "Deployment",
      },
    ],
    taskSummary: { active: 1, newTask: 0, failed: 1, completed: 1 },
  },
];

const admin = [{ id: 1, email: "admin@example.com", password: "123" }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};
