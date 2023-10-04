import { useSelector } from "react-redux";
const Alert = () => {
  const { alertType, alertText } = useSelector((state) => state.add);
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
