import { useState } from "react"

export default function useForm(initialState = {}) {
  const [formState, setFormState] = useState(initialState)

  const handleOnChange = ({target}) => {
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleOnReset = (event) => {
    event.preventDefault()
    setFormState(initialState)
  }

  return {
    formState,
    handleOnChange,
    handleOnReset
  }
}