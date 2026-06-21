import { useInView as _useInView } from 'react-intersection-observer'

export const useInView = (threshold = 0.2) =>
  _useInView({ threshold, triggerOnce: true })
