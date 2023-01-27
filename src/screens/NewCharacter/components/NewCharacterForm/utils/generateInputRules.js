import { numberRegex } from "../../../../../global/utils/numberRegex"

/* eslint-disable prettier/prettier */
const rulesArr = [
  'required',
  'min',
  'max',
  'minLength',
  'maxLength',
  'pattern',
  'validate',
]

const patternObj = {
  number: numberRegex
}

export const generateInputRules = inputData => Object.keys({...inputData}).reduce((acc, key) => {
  if (rulesArr.includes(key)) {
    acc[key] = inputData[key]
  }

  if (key === 'type' && patternObj[inputData[key]]) {
    acc.pattern = patternObj[inputData[key]]
  }

  return acc
}, {})