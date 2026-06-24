let employees = [
  {
    id: 101,
    name: "Rohit Sharma",
    salary: 50000,
  },
  {
    id: 102,
    name: "Priya Patil",
    salary: 45000,
  },
  {
    id: 103,
    name: "Amit Kumar",
    salary: 60000,
  },
  {
    id: 104,
    name: "Sneha Joshi",
    salary: 55000,
  },
  {
    id: 105,
    name: "Rahul Verma",
    salary: 48000,
  },
];

export const showAllEmployees = () => {
  return employees;
};

export const deleteById = (id) => {
  const newList = employees.filter((emp) => emp.id !== id);
  employees = newList;
};
