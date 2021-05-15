import dynamic from 'next/dynamic'
const CodeWithCodemirror = dynamic(import('../components/editor/Codemirror'), {ssr: false})
// const CodeWithCodemirror = dynamic(import('@component/edior/Codemirror'), {ssr: false})

export default () => {
  return (
    <div>
      <CodeWithCodemirror value={"for (var i=0; i < 10; i++) {\n  console.log(i)\n}"} />
    </div>
  )
}