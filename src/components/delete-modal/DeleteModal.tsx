import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from "react";

import Modal from "react-modal";
import styles from "./DeleteModal.module.scss";
import AppContext from "../../context/AppContext";

interface DeleteModalProps {
  isOpen: boolean;
  clickClose: () => void;
  commentId: string;
  isReply: boolean;
}

const DeleteModal: FunctionComponent<DeleteModalProps> = ({
  isOpen,
  commentId,
  isReply,
  clickClose,
}: DeleteModalProps) => {
  const { deleteComment } = useContext(AppContext);
  const [show, setShow] = useState<boolean>(isOpen);
  const closeModal = () => {
    clickClose();
    setShow(false);
  };

  const confirmDelete = () => {
    closeModal();
    deleteComment(commentId, isReply);
  };

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };
  return (
    <Modal
      isOpen={show}
      appElement={document.querySelector("body") as HTMLElement}
      onRequestClose={closeModal}
      contentLabel="Delete Modal"
      style={{ ...modalStyles }}
    >
      <div className={styles.deleteModal}>
        <h3>Delete Comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be redone
        </p>
        <div className={styles.deleteModal__buttonRow}>
          <button
            className={styles.deleteModal__backButton}
            onClick={closeModal}
          >
            No, Cancel
          </button>
          <button
            className={styles.deleteModal__confirmButton}
            onClick={confirmDelete}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
