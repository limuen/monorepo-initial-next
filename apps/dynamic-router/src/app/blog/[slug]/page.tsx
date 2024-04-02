export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Post: {params.slug}</h1>
    </div>
  );
}

// [slug] 的文件夹名字是动态路由的关键。在这个例子中，我们可以访问 /blog/a 和 /blog/limuen，
// 但是不能访问 /blog/limuen/another。

// 当访问 /blog/a的时候，params 的值为 { slug: 'a' }。

// 当访问 /blog/limuen的时候，params 的值为 { slug: 'limuen' }。

// 以此类推。
