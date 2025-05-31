import { act, renderHook } from "@testing-library/react"
import useForm from "../../src/hooks/useForm"

describe('UseForm test', () => {
  const initialState = {
    name: 'Efrén',
    email: 'efren@gmail.com',
    password: '123456'
  }

  test('debe de iniciar con los valores por defecto', () => {

    const {result} = renderHook(() => useForm(initialState))
    const {formState} = result.current

    expect(formState).toEqual(initialState)
  })

  test('Debe de cambiar el valor del campo nombre del formulario', () => {
    const newValue = 'Efren'
    const {result} = renderHook(() => useForm(initialState))
    const {handleOnChange} = result.current
    act(() => {
      handleOnChange({
        target: {
          name: 'name',
          value: newValue
        }
      })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('Debe de reiniciar el valor del formulario', () => {
    const newValue = 'José'
    const {result} = renderHook(() => useForm(initialState))
    
    const {handleOnChange, handleOnReset} = result.current
    act(() => {
      handleOnChange({
        target: {
          name: 'name',
          value: newValue
        }
      })
      
      handleOnReset()
    })


    expect(result.current.name).toBe('Efrén')
    expect(result.current.formState).toEqual(initialState)
  })
})