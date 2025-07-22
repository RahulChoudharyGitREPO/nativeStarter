import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 6,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Text style={{ color: "#2563eb", fontWeight: "600" }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 6,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Text style={{ color: "#2563eb", fontWeight: "600" }}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 6,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Text style={{ color: "#2563eb", fontWeight: "600" }}>About</Text>
      </TouchableOpacity>
    </View>
  );
}
