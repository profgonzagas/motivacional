import { geradorMotivacional as geradorMotivacional } from "@/services/ai/generator";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Share } from "react-native";
import { MotiView } from "moti";

export default function Index() {
  const [motivacional, setMotivacional] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center',  backgroundColor: isDarkMode ? "#121212" : "#fff", padding: 20 },
    titulo: { fontSize: 30,  fontWeight:'bold', color: isDarkMode ? "#fff" : "#000", marginBottom: 10 },
    subtitulo: { fontSize: 18, color: isDarkMode ? "#ccc" : "#444" },
    input: {
      borderWidth: 1,
      width: '100%',
      borderColor: isDarkMode ? "#444" : "#ccc",
      padding: 10,
      marginTop: 10,
      borderRadius: 5,
      color: isDarkMode ? "#fff" : "#000",
    },
    button: {
      backgroundColor: isDarkMode ? "#BB86FC" : "#007BFF",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: { color: isDarkMode ? "#000" : "#fff", textAlign: "center" },
    themeButton: {
      alignSelf: "flex-end",
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      padding: 10,
      borderRadius: 5,
    },
    themeButtonText: { color: isDarkMode ? "#fff" : "#000", fontSize: 14 },
    card: {
      backgroundColor: isDarkMode ? "#1E1E1E" : "#f9f9f9",
      padding: 15,
      marginTop: 15,
      borderRadius: 5,
    },
    cardTitle: { fontSize: 18, color: isDarkMode ? "#fff" : "#000" },
    cardText: { fontSize: 16, color: isDarkMode ? "#ccc" : "#333" },
    shareButton: {
      backgroundColor: isDarkMode ? "#03DAC6" : "#28A745",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    shareButtonText: { color: isDarkMode ? "#000" : "#fff", textAlign: "center" },
  });

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  const callDesculpa = async () => {
    if (motivacional.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres");
      return;
    }

    setIsLoading(true);
    setMotivacional("");
    setResposta("");

    try {
      const result = await geradorMotivacional(motivacional);
      setResposta(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    if (!resposta) return;

    try {
      await Share.share({
        message: `Olha só a motivação que eu gerei: "${resposta}"`,
      });
    } catch (error) {
      alert("Erro ao compartilhar: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Motivação Estudo</Text>
      <Text style={styles.subtitulo}>Sua máquina de motivações</Text>
      <TextInput
        onChangeText={setMotivacional}
        value={motivacional}
        style={styles.input}
        placeholder="Digite o evento que você quer evitar ..."
        placeholderTextColor={isDarkMode ? "#888" : "#ccc"}
      />
      <TouchableOpacity style={styles.button} onPress={callDesculpa}>
        <Text style={styles.buttonText}>
          {isLoading ? "Carregando..." : "Gerar motivações infalíveis!"}
        </Text>
      </TouchableOpacity>
      {resposta && (
        <MotiView
          style={styles.card}
          from={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
        >
          <Text style={styles.cardTitle}>Sua motivação está pronta:</Text>
          <Text style={styles.cardText}>{resposta}</Text>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Compartilhar</Text>
          </TouchableOpacity>
        </MotiView>
      )}
    </View>
  );
}
