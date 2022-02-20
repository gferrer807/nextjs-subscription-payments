import { ToastContainer, toast } from 'react-toastify';

const notifyOfError = (error: any) => {
    return toast.error(`${error}`, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
}