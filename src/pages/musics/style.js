import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.preto
    },
    containerPedidos: {
        width: '85%',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: cores.preto,
        marginVertical: 10,
        padding: 10,
        borderColor: cores.roxo,
        borderWidth: 1
    },
    txtOs: {
        color: cores.branco,
        fontSize: 14,
    },
    imageStyle: {
        height: 50,
        width: 50,
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    txtTitle: {
        color: cores.branco,
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    }

})

export default styles