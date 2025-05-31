import { act, renderHook } from "@testing-library/react"
import useCounter from '../../src/hooks/useCounter'

describe('useCounter', () => {
  test('debe de retornar con el valor por defecto', () => {
    const {result} = renderHook(() => useCounter())
    const {counter, decrement, increment, reset} = result.current

    expect(counter).toBe(1)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe generar el counter con el valor de 100', () => {
    const conunterCurrentValue = 100

    const {result} = renderHook(() => useCounter(conunterCurrentValue))
    const {counter} = result.current

    expect(counter).toBe(conunterCurrentValue)
  })

  test('debe incrementar el counter',() => {
    const {result} = renderHook(() => useCounter())
    const {increment} = result.current

    act(() => {
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(4)
  })

  test('Debe de decrementar el valor del counter', () =>{

    const {result} = renderHook(() => useCounter())

    const {decrement} = result.current

    act(() => {
      decrement()
      decrement(2)
    })

    expect(result.current.counter).toBe(-2)

  })

  test('Debe de reiniciar el valor inicial de counter', () => {
    const {result} = renderHook(()=> useCounter())
    const {increment, reset } = result.current

    act(() =>  {
      increment()
      reset()
    })

    expect(result.current.counter).toBe(1)
  })

})