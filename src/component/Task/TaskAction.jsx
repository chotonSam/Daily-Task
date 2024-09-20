import { useContext } from "react";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { ModalContext, TaskContext } from "../../context/MyContext";
export default function TaskAction() {
  const { setIsModal } = useContext(ModalContext);

  const { dispatch } = useContext(TaskContext);

  // function DeleteAllHandler() {
  //   const isConfirmed = window.confirm(
  //     "Are you sure you want to delete all items?"
  //   );

  //   if (isConfirmed) {
  //     dispatch({ type: "DELETE_ALL" });
  //     toast.success("All items are deleted successfully!");
  //   } else {
  //     toast.info("Items deletion canceled!");
  //   }
  // }




function DeleteAllHandler() {
  Swal.fire({
    title: 'Are you sure?',
    text: "Do you really want to delete all items? This action cannot be undone.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete all!',
    cancelButtonText: 'No, keep them'
  }).then((result) => {
    if (result.isConfirmed) {
      // If confirmed, delete all items
      dispatch({ type: 'DELETE_ALL' });
      toast.success('All items are deleted successfully!');
    } else {
      // If canceled, show an info toast
      toast.info('Items deletion canceled!');
    }
  });
}


  return (
    <>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => setIsModal(true)}
      >
        Add Task
      </button>
      <button
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={DeleteAllHandler}
      >
        Delete All
      </button>
    </>
  );
}
