// 注意："use client"用于声明服务端和客户端组件模块之间的边界。当你在文件中定义了一个 "use client"，导入的其他模块包括子组件，都会被视为客户端 bundle 的一部分。
"use client";

import { useEffect, useState } from "react";

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export default function Page() {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = (await res.json()).slice(0, getRandomInt(1, 10));
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {list.map(({ title, id }: { title: string; id: number }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        换一批
      </button>
    </>
  );
}
