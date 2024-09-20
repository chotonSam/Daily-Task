const initialState = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "API Data Synchronization with Python",
      description:
        "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
      tags: ["JavaScript", "PHP", "Python", "API", "Data Sync"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "User Authentication with JWT",
      description:
        "Create a secure authentication system using JWT tokens for user login and session management in a React app.",
      tags: ["React", "Node.js", "JWT", "Authentication"],
      priority: "Medium",
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Responsive Web Design with Tailwind CSS",
      description:
        "Develop a mobile-first responsive web design using Tailwind CSS, ensuring cross-browser compatibility.",
      tags: ["HTML", "CSS", "TailwindCSS", "Responsive", "Mobile-First"],
      priority: "Low",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Database Optimization for Large Data Sets",
      description:
        "Optimize database queries to handle large datasets efficiently, reducing load times and improving application performance.",
      tags: ["SQL", "NoSQL", "MongoDB", "Optimization", "Performance"],
      priority: "High",
      isFavorite: true,
    },
  ],
};


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, tasks: [...state.tasks, action.payload] };
      break;

    case "TOGGLE_FAV":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isFavorite: !task.isFavorite }
            : task
        ),
      };
      break;

    case "EDIT_ITEM":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
      break;

    case "DELETE_ITEM":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload.id),
      };
      break;

    case "DELETE_ALL":
      return {
        ...state,
        tasks: [],
      };
      break;
    default:
      return state;
  }
};

export { cartReducer, initialState };

