import { View, Text, StyleSheet } from "react-native";
export const LocationInfo = ({location , message}) => {
	return (
		<View style={styles.infoBox}>
			<Text style={styles.infoText}>
				{location
					? `Lat: ${location.latitude.toFixed(
							6
					  )}, Lon: ${location.longitude.toFixed(6)}`
					: "No location yet"}
			</Text>
			<Text style={styles.small}>{message}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	infoBox: {
		position: "absolute",
		bottom: 20,
		alignSelf: "center",
		backgroundColor: "rgba(255,255,255,0.95)",
		padding: 10,
		borderRadius: 8,
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 4,
	},
	infoText: { fontWeight: "600" },
    
	small: { fontSize: 12, color: "gray", marginTop: 4 },
});
