import css from "./Contact.module.css";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
<FaRegUser />;
const Contact = ({ data: { username, telnumber, id }, onDel }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.text}>
          <FaRegUser />
          {"  "}
          {username}
        </p>
        <p className={css.text}>
          <FiPhone />
          {"  "}
          {telnumber}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDel(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
