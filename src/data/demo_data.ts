export const demoProjects = [
  {
    nr: "asdfas",
    name: "Project 1",
    description: "Description of Proj 1",
  },
  {
    nr: "werwet",
    name: "Project 2",
    description: "Description of Proj 2",
  },
  {
    nr: "nbrnrtz",
    name: "Project 3",
    description: "Description of Proj 3",
  },
  {
    nr: "xcvxcv",
    name: "Project 4",
    description: "Description of Proj 4",
  },
  {
    nr: "qwer",
    name: "Project 5",
    description: "Description of Proj 5",
  },
];

export const demoTasks = [
  {
    nr: "1234",
    name: "Task 1",
    description: "Description of Task 1",
  },
  {
    nr: "3456",
    name: "Task 2",
    description: "Description of Task 2",
  },
  {
    nr: "234",
    name: "Task 3",
    description: "Description of Task 3",
  },
  {
    nr: "6453",
    name: "Task 4",
    description: "Description of Task 4",
  },
  {
    nr: "42345",
    name: "Task 5",
    description: "Description of Task 5",
  },
];

export function demoBookings() {
  const list = [] as {
    name: string;
    task: (typeof demoTasks)[0];
    project: (typeof demoProjects)[0];
    time: number;
    date: Date;
    comment: string;
  }[];
  for (let i = 0; i < 10; i++) {
    const rngTaskIdx = Math.floor(Math.random() * demoTasks.length);
    const rngPrjIdx = Math.floor(Math.random() * demoProjects.length);
    const time = Math.floor(Math.random() * 10);
    list.push({
      name: "Max Mustermann",
      comment: "Lorem ipsum lorem ipsum",
      date: new Date(),
      task: demoTasks[rngTaskIdx],
      project: demoProjects[rngPrjIdx],
      time: time,
    });
  }
  return list;
}
