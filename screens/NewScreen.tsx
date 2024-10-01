import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const NewScreen = () => {
  return (
    <View style={styles.newScreen}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group17.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group18.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group19.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group20.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group21.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group22.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group23.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group24.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group25.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group26.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group27.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.text, styles.textTypo]}>
          レース の 見どころ- 2023 年 8 月 20 日
        </Text>
      </View>
      <View style={styles.group1}>
        <Text style={[styles.text1, styles.textPosition]}>レース ニュース</Text>
      </View>
      <View style={[styles.group2, styles.groupLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>
          残り 時間: 12:08
        </Text>
      </View>
      <View style={[styles.group3, styles.groupLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>時間 1:05:52</Text>
      </View>
      <View style={[styles.group4, styles.groupIconLayout1]}>
        <Text style={[styles.text4, styles.textTypo]}>戻る</Text>
      </View>
      <View style={styles.group5}>
        <Text style={[styles.sp, styles.xTypo]}>sp</Text>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Text style={[styles.c, styles.textTypo]}>C</Text>
      </View>
      <View style={styles.group7}>
        <Text style={[styles.x, styles.xTypo]}>X</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconLayout1: {
    height: "3.19%",
    position: "absolute",
  },
  groupIconLayout: {
    width: "5.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    right: "60.27%",
    position: "absolute",
  },
  groupIconPosition1: {
    bottom: "-1.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    bottom: "16.81%",
    top: "80.72%",
    height: "2.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  textPosition: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: "2.17%",
    position: "absolute",
  },
  xTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
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
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    height: "8.7%",
    width: "15.73%",
    top: "77.68%",
    right: "42.67%",
    bottom: "13.62%",
    left: "41.6%",
    position: "absolute",
  },
  groupIcon1: {
    height: "3.62%",
    width: "7.2%",
    top: "4.49%",
    right: "88%",
    bottom: "91.88%",
    left: "4.8%",
    position: "absolute",
  },
  groupIcon2: {
    width: "6.13%",
    top: "80.29%",
    right: "23.47%",
    bottom: "16.52%",
    left: "70.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon3: {
    right: "34.67%",
    bottom: "-2.03%",
    left: "59.47%",
    top: "98.84%",
    height: "3.19%",
    position: "absolute",
  },
  groupIcon4: {
    top: "80.43%",
    right: "70.67%",
    bottom: "16.38%",
    left: "23.47%",
    height: "3.19%",
    position: "absolute",
  },
  groupIcon5: {
    height: "3.04%",
    bottom: "-1.88%",
    left: "33.87%",
    top: "98.84%",
    width: "5.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon6: {
    height: "2.9%",
    width: "5.33%",
    right: "9.07%",
    left: "85.6%",
    top: "98.84%",
  },
  groupIcon7: {
    height: "2.75%",
    width: "5.07%",
    top: "98.99%",
    right: "86.13%",
    left: "8.8%",
  },
  groupIcon8: {
    width: "4.8%",
    right: "5.6%",
    left: "89.6%",
  },
  groupIcon9: {
    width: "4.27%",
    right: "89.87%",
    left: "5.87%",
  },
  groupIcon10: {
    height: "44.35%",
    width: "93.07%",
    top: "11.3%",
    right: "3.47%",
    bottom: "44.35%",
    left: "3.47%",
    position: "absolute",
  },
  groupIcon11: {
    height: "4.64%",
    width: "29.6%",
    top: "33.33%",
    right: "65.6%",
    bottom: "62.03%",
    left: "4.8%",
    position: "absolute",
  },
  text: {
    fontSize: 23,
    color: "#2b2b2b",
  },
  group: {
    height: "4.06%",
    width: "110.13%",
    top: "62.1%",
    right: "-16.53%",
    bottom: "33.84%",
    left: "6.4%",
    position: "absolute",
  },
  text1: {
    fontSize: 13,
  },
  group1: {
    height: "2.32%",
    width: "25.07%",
    top: "59.06%",
    right: "70.13%",
    bottom: "38.62%",
    left: "4.8%",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.size_xs,
  },
  group2: {
    width: "23.2%",
    top: "73.26%",
    right: "7.73%",
    bottom: "24.57%",
    left: "69.07%",
  },
  group3: {
    width: "17.33%",
    top: "73.33%",
    right: "77.87%",
    bottom: "24.49%",
    left: "4.8%",
  },
  text4: {
    fontSize: FontSize.size_lg,
    color: "#1b1b1b",
  },
  group4: {
    width: "9.6%",
    top: "4.71%",
    right: "44%",
    bottom: "92.1%",
    left: "46.4%",
  },
  sp: {
    fontSize: 25,
  },
  group5: {
    height: "4.35%",
    width: "8.27%",
    top: "90%",
    right: "86.67%",
    bottom: "5.65%",
    left: "5.07%",
    position: "absolute",
  },
  c: {
    fontSize: 38,
    color: "#939393",
  },
  group6: {
    height: "6.67%",
    width: "7.47%",
    top: "90.29%",
    bottom: "3.04%",
    left: "32.27%",
  },
  x: {
    fontSize: 19,
  },
  group7: {
    height: "3.33%",
    width: "3.73%",
    top: "90.22%",
    right: "7.2%",
    bottom: "6.45%",
    left: "89.07%",
    position: "absolute",
  },
  newScreen: {
    flex: 1,
    height: 690,
    overflow: "hidden",
    width: "100%",
  },
});

export default NewScreen;
