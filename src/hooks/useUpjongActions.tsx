import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { largeUpjong } from "../modules/largeUpjong";

const useUpjongActions = () => {
  const dispatch = useDispatch();

  const upjongList = useCallback(() => {
    dispatch(largeUpjong());
  }, [dispatch]);

  return { upjongList };
};

export default useUpjongActions;
