import React from "react"
import dynamic from "next/dynamic"

const TextEditor = dynamic(() => import("../components/editor/TextEditor"), {
  ssr: false,
})

export default function editor() {
  return (
    <>
      <h2>
        Testing Draft in Next. <br />
        Loading problem css. When refresh is ok. I try ssr:false{" "}
        <a href="https://web.dev/code-splitting-with-dynamic-imports-in-nextjs">
          dynamic-imports-in-nextjs
        </a>{" "}
        but stil problem
      </h2>
      <TextEditor />
    </>
  )
}