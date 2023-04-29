import { NewDemo } from "./new-demo"

const sourceCode = `
import { Code } from "bright"

const myCode = \`
let hello = "hello brightness"
console.log(hello, "my old friend")
\`.trim()

// focus(1:2)
// set any prop globally
Code.lineNumbers = true

export default function Page() {
  return (
    <Code lang="js">{myCode}</Code>
  )
}
`.trim()

export default function Demo() {
  return (
    <>
      <div style={{ height: "1rem" }} />
      <NewDemo
        filename="app/page.js"
        sourceProps={{ children: sourceCode, lang: "jsx" }}
        demoProps={{
          lineNumbers: true,
          lang: "js",
          code: `
let hello = "hello brightness"
console.log(hello, "my old friend")
`.trim(),
        }}
      />
    </>
  )
}
