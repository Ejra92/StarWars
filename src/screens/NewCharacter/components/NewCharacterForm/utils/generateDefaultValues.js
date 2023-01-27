/* eslint-disable prettier/prettier */
import { inputs } from './inputs.json'

const inputCopy = [...inputs]

export const generateDefaultInputValues = () => inputCopy.reduce((acc, input) => {
  acc[input.id] = ''
  return acc
}, {})