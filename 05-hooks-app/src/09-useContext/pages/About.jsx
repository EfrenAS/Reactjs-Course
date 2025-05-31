import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function AboutPage() {
  const { user } = useContext(UserContext)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        About Page - Hola
        <span aria-label="user-name" className="text-orange-400">
          {user?.name}
        </span>
      </h1>
    </div>
  )
}
