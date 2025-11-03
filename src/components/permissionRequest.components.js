import { View, Text,StyleSheet } from "react-native";
export const PermissionRequest = () => {
    return (
        <View style={styles.center}>
				<Text style={{ fontSize: 16 }}>Permission denied</Text>
				<Text style={{ color: "gray", marginTop: 8 }}>
					Please allow location access from your device settings to use this
					app.
				</Text>
			</View>
    );
};
const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
