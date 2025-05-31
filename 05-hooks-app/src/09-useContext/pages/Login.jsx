import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function LoginPage() {
  const { user, setLogin } = useContext(UserContext)

  // const handleOnClick = (e) => {
  //   e.preventDefault()

  //   handleLogin({
  //     name: 'John',
  //     age: 30,
  //     email: 'john@gmail.com',
  //     isAdmin: true,
  //   })
  // }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Login Page</h2>
      <main>
        <pre aria-label="user-info">
          { JSON.stringify(user, null, 3)}
        </pre>
        <button
          className="bg-violet-700 py-1 px-2 rounded-xs m-4"
          onClick={() => {setLogin({
            name: 'John',
            age: 30,
            email: 'john@gmail.com',
            isAdmin: true,
          })}}
        >
          Login
        </button>
      </main>
    </div>
  )
}
