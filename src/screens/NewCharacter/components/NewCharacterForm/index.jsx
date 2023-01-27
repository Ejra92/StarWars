import { Controller } from 'react-hook-form'
import { Text } from 'react-native'
import { View } from 'react-native'
import { CustomButton } from '../../../../global/components/CustomButton'
import { FormInput } from '../../../../global/components/FormInput'
import { numberRegex } from '../../../../global/utils/numberRegex'
import { useNewCharacterLogic } from './hook/useNewCharacterLogic'
import { styles } from './NewCharacterForm.styles'
import { generateInputRules } from './utils/generateInputRules'
import { inputs } from './utils/inputs.json'


export const NewCharacterForm = ({ testID }) => {
  const {
    control,
    handleSubmit,
    createNewCharacter
  } = useNewCharacterLogic()

  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.inputContainer}>
        {inputs.map(inputData => {
          const {id, label, placeholder, options, ...rest} = inputData
          return (
            <Controller
              key={id}
              control={control}
              rules={generateInputRules(rest)}
              render={({ field }) => {
                const { onChange, onBlur, value } = field
                const numValidator = (
                  inputData.type === 'number' && !numberRegex.test(value)
                )

                if(inputData.type === 'option') return (
                  <View style={styles.optContainer}>
                    {options.map((optionText) => (
                      <Text
                        key={optionText}
                        onPress={() => onChange(optionText)}
                        style={[
                          styles.optTextBase,
                          value === optionText && styles.optTextSelected
                        ]}
                      >
                        {optionText}
                      </Text>
                    ))}
                  </View>
                )
                return (
                  <FormInput
                    testID={`NewCharacterFormInput-${id}`}
                    placeholder={placeholder}
                    label={label}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    textStyle={
                      numValidator 
                        ? styles.textError 
                        : styles.textSuccess
                    }
                  />
                )
              }}
              name={id}
            />
          )
        })}
      </View>

      <Text testID={'NewCharacterDisclaimerText'} style={styles.textDisclaimer}>
        ** All fields are required
      </Text>

      <CustomButton
        testID={'NewCharacterCreateButton'}
        title='Create'
        onPress={handleSubmit(createNewCharacter)}
      />
    </View>
  )
}