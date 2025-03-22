import { useEffect } from "react";

export default function Message(){
  useEffect(() => {
    console.log('Mmessage Mounted')
    return () => {
      console.log('Message Unmounted')
    }
  }, [])

  return (
    <>
      <h3 className="text-red-500 text-[0.7rem]">User exists</h3>
    </>
  )
}