import React, { useEffect, useState } from "react";

type MyStructure = Object[];

const HttpExample = () => {
  const [data, setData] = useState<[]>();
  const getData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const data = await response.json();
      setData(data.slice(0, 10));
    } catch (e: unknown) {
      console.log(e);
    }
    console.log(data);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data?.map((item: any) => {
        return <>{item.name}</>;
      })}
    </div>
  );
};

export default HttpExample;
