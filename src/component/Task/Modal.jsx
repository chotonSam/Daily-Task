import { useState } from "react";

import { useContext } from "react";
import {
  EditContext,
  ModalContext,
  TaskContext,
} from "../../context/MyContext";

import { toast } from "react-toastify";

export default function Modal() {
  const { isModal, setIsModal } = useContext(ModalContext);
  const { state, dispatch } = useContext(TaskContext);
  const { updatedTask, setUpdatedTask, OnEditHandler } =
    useContext(EditContext);

  const [formData, setFormData] = useState(
    updatedTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isEdit, setIsEdit] = useState(Object.isExtensible(updatedTask, null));

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "tags" ? value.split(",") : value,
    });
  }

  function taskHandler(e) {
    e.preventDefault();

    const { title, description, tags, priority } = formData;
    if (!title || !description || !tags.length || !priority) {
      toast.error("All fields are required!");
      return;
    }

    if (isEdit) {
      const hasChanges =
        JSON.stringify(formData) !== JSON.stringify(updatedTask);
      if (!hasChanges) {
        toast.error("No changes were made!");
        return;
      }

      dispatch({ type: "EDIT_ITEM", payload: formData });

      toast.success("Item updated successfully!");
    } else {
      dispatch({ type: "ADD_ITEM", payload: formData });
      toast.success("Item created successfully!");
    }

    setIsModal(false);
    setUpdatedTask(null);
  }

  function OnCloseHandler() {
    setIsModal(false);
    setUpdatedTask(null);
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-[#191D26] bg-opacity-50  flex items-center justify-center z-[1000]">
      <form className="mx-auto my-10  w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px] ">
          {isEdit ? "Edit Task" : "Add New Task"}
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label for="title">Title</label>
            <input
              onChange={handleChange}
              value={formData.title}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label for="description">Description</label>
            <textarea
              onChange={handleChange}
              value={formData.description}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label for="tags">Tags</label>
              <input
                onChange={handleChange}
                value={formData.tags}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label for="priority">Priority</label>
              <select
                onChange={handleChange}
                value={formData.priority}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            type="button"
            onClick={OnCloseHandler}
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            onClick={taskHandler}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isEdit ? "Update Task" : "Create new Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
