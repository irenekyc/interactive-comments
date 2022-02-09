import React, { FunctionComponent } from "react";
import styles from "./UserRow.module.scss";
import { UserType } from "../../typings/User";

interface UserRowProps {
  user: UserType;
  createdAt: string;
}

const UserRow: FunctionComponent<UserRowProps> = ({
  user,
  createdAt,
}: UserRowProps) => {
  return (
    <div className={styles.userrow}>
      <img
        className={styles.userrow__avatar}
        src={user.image.png}
        alt={user.username}
      />
      <span className={styles.userrow__name}>{user.username}</span>
      <span className={styles.userrow__time}>{createdAt}</span>
    </div>
  );
};

export default UserRow;
