import { useContext, useState } from "react";
import { TaskContext } from "../../context/MyContext";
import Task from "./Task";

export default function TaskBox({ searchData }) {
  const { state, dispatch } = useContext(TaskContext);

  // State for favorite filter
  const [favoriteFilter, setFavoriteFilter] = useState("all");

  // Filter tasks based on the search input and the favorite status
  const filteredTasks = state.tasks.filter((task) => {
    const matchesSearch = task.title
      ?.toLowerCase()
      .includes(searchData?.toLowerCase() || "");
    const matchesFavorite =
      favoriteFilter === "all" ||
      (favoriteFilter === "favorite" && task.isFavorite) ||
      (favoriteFilter === "unfavorite" && !task.isFavorite);

    return matchesSearch && matchesFavorite;
  });

  // Handle filter change (favorite/unfavorite)
  const handleFilterChange = (e) => {
    setFavoriteFilter(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {/* Filter Dropdown for Favorite/Unfavorite */}
        <select
          className="p-2   bg-transparent text-white focus:outline-none  focus:ring-blue-500"
          value={favoriteFilter}
          onChange={handleFilterChange}
        >
          <option className="bg-[#191D26] text-white" value="all">
            All Tasks
          </option>
          <option className="bg-[#191D26] text-white" value="favorite">
            Favorite
          </option>
          <option className="bg-[#191D26] text-white" value="unfavorite">
            Unfavorite
          </option>
        </select>
      </div>

      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                Tags
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => <Task key={task.id} task={task} />)
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-2xl">
                  No tasks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
