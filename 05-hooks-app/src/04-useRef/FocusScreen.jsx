import { useRef } from "react"

export default function FocusScreen() {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }


  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something"
      />
      <button
        onClick={onClick}
        className="bg-gray-700 text-white px-2 py-1 m-2 rounded-md cursor-pointer hover:text-amber-400"
      >
        Focus
      </button>
    </>
  )
}