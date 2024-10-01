import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.raceMania, styles.textPosition]}>Race Mania</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group14.png")}
      />
      <View style={styles.group1}>
        <Text style={[styles.text, styles.textPosition]}>
          レースイベントに賭ける！
        </Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    width: "100%",
  },
  raceMania: {
    fontSize: 48,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  group: {
    height: "7.87%",
    width: "67.47%",
    top: "49.23%",
    right: "16.27%",
    bottom: "42.91%",
    left: "16.27%",
    position: "absolute",
  },
  groupIcon: {
    height: "6.74%",
    width: "12.53%",
    top: "73.46%",
    right: "43.73%",
    bottom: "19.8%",
    left: "43.73%",
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoRegular,
  },
  group1: {
    height: "3.93%",
    width: "76.53%",
    top: "57.87%",
    right: "10.93%",
    bottom: "38.2%",
    left: "12.53%",
    position: "absolute",
  },
  groupIcon1: {
    height: "28.09%",
    width: "53.33%",
    top: "16.71%",
    right: "23.2%",
    bottom: "55.2%",
    left: "23.47%",
  },
  welcome: {
    flex: 1,
    height: 712,
    overflow: "hidden",
    width: "100%",
  },
});

export default Welcome;
