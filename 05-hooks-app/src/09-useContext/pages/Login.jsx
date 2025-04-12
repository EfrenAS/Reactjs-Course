import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function LoginPage() {
  const { user, handleLogin } = useContext(UserContext)

  const handleOnClick = (e) => {
    e.preventDefault()

    handleLogin({
      name: 'John',
      age: 30,
      email: 'john@gmail.com',
      isAdmin: true,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Login Page</h2>
      <main>
        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>
        <button
          className="bg-violet-700 py-1 px-2 rounded-xs m-4"
          onClick={handleOnClick}
        >
          Login
        </button>
      </main>
    </div>
  )
}
