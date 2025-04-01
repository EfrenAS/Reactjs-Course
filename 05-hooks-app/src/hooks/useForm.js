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

  const handleOnReset = () => setFormState(initialState)

  return {
    ...formState,
    formState,
    handleOnChange,
    handleOnReset
  }
}