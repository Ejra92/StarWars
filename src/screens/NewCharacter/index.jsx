import { ContainerScreen } from '../../global/components/ContainerScreen'
import { NewCharacterForm } from './components/NewCharacterForm'

export const NewCharacter = () => {
  return (
    <ContainerScreen
      testID='NewCharacter'
      withScroll
      keyboardShouldPersistTaps='handled'
    >
      <NewCharacterForm testID='NewCharacterForm' />
    </ContainerScreen>
  )
}