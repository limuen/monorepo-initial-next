export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Post: {JSON.stringify(params)}</h1>
    </div>
  );
}

// 在命名文件夹的时候，如果你在方括号内添加省略号，比如 [...folderName]，这表示捕获所有后面所有的路由片段。

// [...slug] 的文件夹名字是动态路由的关键。在这个例子中，我们可以访问 /shop/a、/shop/a/b、/shop/a/b/c 等等。

// 当访问 /shop/a的时候，params 的值为 { slug: ['a'] }。

// 当访问 /shop/a/b的时候，params 的值为 { slug: ['a', 'b'] }。

// 当访问 /shop/a/b/c的时候，params 的值为 { slug: ['a', 'b', 'c'] }。

// 以此类推。
