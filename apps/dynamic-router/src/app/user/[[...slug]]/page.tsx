export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Post: {JSON.stringify(params)}</h1>
    </div>
  );
}

//在命名文件夹的时候，如果在双方括号内添加省略号，比如 [[...folderName]]，这表示可选的捕获所有后面所有的路由片段。

// 它与[...slug]的区别就在于，不带参数的路由也会被匹配（就比如 /user）

// 当访问 /shop的时候，params 的值为 {}。

// 当访问 /shop/a的时候，params 的值为 { slug: ['a'] }。

// 当访问 /shop/a/b的时候，params 的值为 { slug: ['a', 'b'] }。

// 当访问 /shop/a/b/c的时候，params 的值为 { slug: ['a', 'b', 'c'] }。

// 以此类推。
