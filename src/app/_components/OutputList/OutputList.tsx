import { User } from "@/app/api/users/_data/users";
import style from "./OutputList.module.css";

type Props = {
  users: User[];
};

export const OutputList = ({ users }: Props) => {
  return (
    <ul className={style.userList}>
      {users.map(({ id, lName, fName }) => (
        <li key={id} className={style.userLine}>
          {fName} {lName}
        </li>
      ))}
    </ul>
  );
};
