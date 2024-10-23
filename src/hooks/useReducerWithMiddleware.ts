import {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useRef,
  useEffect,
  useReducer,
} from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useReducerWithMiddleware = <R extends Reducer<any, any>>(
  reducer: Reducer<ReducerState<R>, ReducerAction<R>>,
  initialState: ReducerState<R>,
  middlewareFns: ReducerAction<R>[],
  afterwareFns: ReducerAction<R>[]
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const aRef = useRef()

  const dispatchWithMiddleware = (action) => {
    middlewareFns.forEach((middlewareFn) => middlewareFn(action, state))

    aRef.current = action

    dispatch(action)
  }

  useEffect(() => {
    if (!aRef.current) return

    afterwareFns.forEach((afterwareFn) => afterwareFn(aRef.current, state))

    aRef.current = null
  }, [afterwareFns, state])

  return [state, dispatchWithMiddleware as Dispatch<ReducerAction<R>>] as const
}

export default useReducerWithMiddleware
