import React, { useEffect } from "react";
import useLargeUpjong from "../hooks/useLargeUpjong";
import useUpjongActions from "../hooks/useUpjongActions";

function UpjongList() {
  const list = useLargeUpjong();
  const { upjongList } = useUpjongActions();
  useEffect(() => {
    upjongList();
  }, [upjongList]);
  console.log(list);
  return (
    <ul>
      {list.largeList.map((data: any) => (
        <li>{data.indsLclsNm}</li>
      ))}
    </ul>
  );
}

export default UpjongList;
