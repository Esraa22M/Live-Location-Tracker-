import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
export const AppLoader = ({message}) => {
	return (
		<View style={styles.center}>
			<ActivityIndicator size="large" />
			<Text style={{ marginTop: 8 }}>
                {message}
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
