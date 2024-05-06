const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function About() {
  await sleep(2000)
  return (
    <div className="h-60 flex-1 rounded-xl bg-teal-400 text-white flex items-center justify-center">Hello, About!</div>
  )
}