import React, { FunctionComponent, useContext } from "react";
import styles from "./UserRow.module.scss";
import { UserType } from "../../typings/User";
import AppContext from "../../context/AppContext";

interface UserRowProps {
  user: UserType;
  createdAt: string;
}

const UserRow: FunctionComponent<UserRowProps> = ({
  user,
  createdAt,
}: UserRowProps) => {
  const { currentUser } = useContext(AppContext);
  const isCurrentUser = user.username === currentUser.username;
  return (
    <div className={styles.userrow}>
      <img
        className={styles.userrow__avatar}
        src={user.image.png}
        alt={user.username}
      />
      <span className={styles.userrow__name}>{user.username}</span>
      {isCurrentUser && <span className={styles.userrow__badge}>you</span>}
      <span className={styles.userrow__time}>{createdAt}</span>
    </div>
  );
};

export default UserRow;
