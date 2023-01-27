import { FlatList } from 'react-native'
import { View, StyleSheet,ActivityIndicator } from 'react-native'
import { ListItem } from '../ListItem'
import { ErrorText } from '../../../../global/components/ErrorText'
import { useListLogic } from './hooks/useListLogic'

export const List = ({testID}) => {
  const {
    data,
    isFetching,
    error,
  }= useListLogic()

  return (
    <View testID={testID} style={styles.container}>
      {isFetching && <ActivityIndicator testID='ListActivityIndicator' size="large" />}
      {(!isFetching && !!data.length) && (
        <FlatList
          data={data}
          renderItem={({item}) => {
            const {name, height, gender} = item
            return (
              <ListItem
                key={name}
                name={name}
                height={height}
                gender={gender}
              />
            )
          }}
          key={item => item.name}
          style={{width: '100%'}}
        />
      )}
      {!isFetching && !data.length && (
        <ErrorText
          testID={'ListErrorText'}
          text={error ? 'An error has occurred' : 'The list is empty'}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.75,
    width: '100%',
  }
})