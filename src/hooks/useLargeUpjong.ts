import { useSelector } from "react-redux";
import { RootState } from "../modules/reducers";

function useLargeUpjong() {
  const largeUpjong = useSelector((state: RootState) => state.largeUpjong);
  console.log(largeUpjong);
  return largeUpjong;
}

export default useLargeUpjong;
