import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, color: "#000", marginBottom: 10 },
  subtitulo: { fontSize: 18, color: "#444" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginTop: 10, borderRadius: 5 },
  button: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center" },
  card: { backgroundColor: "#f9f9f9", padding: 15, marginTop: 15, borderRadius: 5 },
  cardTitle: { fontSize: 18, color: "#000" },
  cardText: { fontSize: 16, color: "#333" },
});

export const isDarkMode = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },
  titulo: { fontSize: 24, color: "#fff", marginBottom: 10 },
  subtitulo: { fontSize: 18, color: "#ccc" },
  input: { borderWidth: 1, borderColor: "#444", padding: 10, marginTop: 10, borderRadius: 5, color: "#fff" },
  button: { backgroundColor: "#BB86FC", padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: "#000", textAlign: "center" },
  card: { backgroundColor: "#1E1E1E", padding: 15, marginTop: 15, borderRadius: 5 },
  cardTitle: { fontSize: 18, color: "#fff" },
  cardText: { fontSize: 16, color: "#ccc" },
});


