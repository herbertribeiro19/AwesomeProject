import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

export default function Card({ name }) {
  const urlImage = "../../assets/visa_logo.png";
  const imageChip = "../../assets/img_chip.png";
  return (
    <View>
      <TouchableOpacity>
        <LinearGradient
          colors={["#11998e", "#11998a", "#53cfab", "#78ffd6"]}
          style={styles.boxCard}
        >
          <View style={styles.nomeFlex}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>07/30</Text>
            <Text style={styles.number}>4001 9898 1067 2078</Text>
          </View>
          <View style={styles.flagFlex}>
            <Image style={styles.imageChip} source={require(imageChip)} />
            <Image style={styles.imageLogo} source={require(urlImage)} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxCard: {
    marginTop: -30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    flexDirection: "column-reverse",
  },
  nomeFlex: { marginBottom: 20, marginTop: 10, marginLeft: 30 },

  flagFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 30,
  },
  imageChip: {
    width: 46,
    height: 36,
    marginBottom: 30,
    marginTop: 18,
    marginRight: 30,
    borderRadius: 6,
  },
  imageLogo: {
    width: 50,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    marginRight: 30,
  },

  name: {
    fontSize: 22,
    fontWeight: "600",
  },

  date: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 2,
    marginTop: 2,
  },

  number: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 2,
    marginTop: 2,
  },
});
