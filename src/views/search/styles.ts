import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme/dark';

export const createStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
    },
    listContainer: {
        justifyContent: "space-around",
        width: '100%',
        marginBottom: 15,
    },
    lastItemContainer: {
        width: '93%',
    }
})