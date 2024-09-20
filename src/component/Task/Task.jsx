import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { useContext } from "react";
import Swal from "sweetalert2";
import {
  EditContext,
  ModalContext,
  TaskContext,
} from "../../context/MyContext";

import { toast } from "react-toastify";

export default function Task({ task }) {
  const colors = [
    "#FE1A1AB5",
    "#BD560BB2",
    "#00B2D9CC",
    "#07AC67D6",
    "#1F2C3F",
    "#4A4A4A",
    "#3E2723",
    "#1A1A72",
    "#0D3B66",
    "#3B0D66",
    "#014421",
    "#4A235A",
  ];

  const { dispatch } = useContext(TaskContext);
  const { updatedTask, setUpdatedTask, OnEditHandler } =
    useContext(EditContext);
  const { isModal, setIsModal } = useContext(ModalContext);

  function DeleteHandler(task) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",

      
      
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deletion
        dispatch({ type: "DELETE_ITEM", payload: task });
        toast.success("Item successfully deleted!");
      } else {
        // Cancel action
        toast.info("Item deletion canceled!");
      }
    });
  }
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td
        className="text-xl text-gray-300"
        onClick={() => dispatch({ type: "TOGGLE_FAV", payload: task })}
      >
        {task.isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, index) => (
            <li key={index}>
              <span
                style={{ backgroundColor: colors[index % colors.length] }}
                className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={() => DeleteHandler(task)}>
            Delete
          </button>
          <button className="text-blue-500" onClick={() => OnEditHandler(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
