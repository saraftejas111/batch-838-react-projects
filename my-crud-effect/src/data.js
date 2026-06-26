let employees = [
  {
    id: 101,
    name: "Raj",
    role: "React Developer",
    salary: 45000,
  },
  {
    id: 102,
    name: "Amit",
    role: "Java Developer",
    salary: 55000,
  },
  {
    id: 103,
    name: "Priya",
    role: "Python Developer",
    salary: 60000,
  },
  {
    id: 104,
    name: "Sneha",
    role: "Frontend Developer",
    salary: 48000,
  },
  {
    id: 105,
    name: "Rahul",
    role: "Backend Developer",
    salary: 65000,
  },
  {
    id: 106,
    name: "Neha",
    role: "Full Stack Developer",
    salary: 75000,
  },
  {
    id: 107,
    name: "Karan",
    role: "UI/UX Designer",
    salary: 50000,
  },
  {
    id: 108,
    name: "Pooja",
    role: "QA Engineer",
    salary: 47000,
  },
  {
    id: 109,
    name: "Vikas",
    role: "DevOps Engineer",
    salary: 80000,
  },
  {
    id: 110,
    name: "Anjali",
    role: "Data Analyst",
    salary: 58000,
  },
];

export const showAllEmployees = () => {
  return employees;
};

export const deleteByID = (id) => {
  const newList = employees.filter((e) => e.id !== id);
  employees = newList;
};

export const addEmployee = (emp) => {
  employees = [...employees, emp];
};

export const updateEmployee = (emp) => {
  const newList = employees.filter((e) => e.id !== emp.id);
  employees = [...newList, emp];

};
