export default function PlusButton({ increment }) {
  const handleClick = () => {
    increment(5)
  }
  
  return (

    <button
      onClick={handleClick}
      className="bg-green-700 text-white rounded px-4 py-2 m-2 cursor-pointer"
    >
      +
    </button>
  )
}
