import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.group, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>サインアップ</Text>
      </View>
      <View style={[styles.group1, styles.groupPosition1]}>
        <Text style={[styles.raceMania, styles.textFlexBox]}>Race Mania!</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition1]}>
        <Text style={[styles.text1, styles.textFlexBox]}>
          パーソナライズのための
        </Text>
        <Text style={[styles.text2, styles.textFlexBox]}>
          アカウントを作成します。
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.group3}>
        <Text style={[styles.text3, styles.textTypo]}>すでにアカウントを</Text>
        <Text style={[styles.text4, styles.textTypo]}>お持ちですか？</Text>
      </View>
      <View style={styles.group4}>
        <Text style={[styles.text5, styles.textTypo]}>ログイン</Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.group5, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>
          メールアドレスを入力してください
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Text style={[styles.text5, styles.textTypo]}>Email *</Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.group7, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>
          パスワードを入力してください
        </Text>
      </View>
      <View style={[styles.group8, styles.groupPosition]}>
        <Text style={[styles.text5, styles.textTypo]}>Password *</Text>
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition2: {
    left: "5.33%",
    right: "5.33%",
    width: "89.33%",
    height: "6.8%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    position: "absolute",
  },
  groupPosition1: {
    left: "24.8%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: "6.4%",
    height: "2.27%",
    position: "absolute",
  },
  frameIconLayout: {
    left: "86.13%",
    right: "9.6%",
    width: "4.27%",
    height: "2.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    top: "28.13%",
    left: "35.67%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  group: {
    top: "79.32%",
    bottom: "13.88%",
  },
  raceMania: {
    fontSize: 34,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  group1: {
    height: "5.67%",
    width: "50.13%",
    top: "36.12%",
    right: "25.07%",
    bottom: "58.22%",
  },
  text1: {
    left: "4.19%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "0%",
  },
  text2: {
    top: "55.81%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: "0%",
  },
  group2: {
    height: "6.09%",
    width: "50.93%",
    top: "43.98%",
    right: "24.27%",
    bottom: "49.93%",
  },
  vectorIcon2: {
    height: "14.16%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.84%",
    left: "0%",
    top: "0%",
  },
  text3: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
  },
  text4: {
    top: "57.89%",
    left: "11.02%",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_sm,
  },
  group3: {
    height: "5.38%",
    width: "33.87%",
    right: "38.67%",
    bottom: "6.37%",
    left: "27.47%",
    top: "88.24%",
    position: "absolute",
  },
  text5: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  group4: {
    width: "14.93%",
    right: "17.6%",
    bottom: "9.49%",
    left: "67.47%",
    height: "2.27%",
    top: "88.24%",
    position: "absolute",
  },
  text6: {
    top: "31.25%",
    left: "2.39%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
  },
  group5: {
    top: "55.38%",
    bottom: "37.82%",
  },
  group6: {
    width: "12%",
    top: "51.98%",
    right: "81.6%",
    bottom: "45.75%",
  },
  frameIcon: {
    top: "57.65%",
    bottom: "40.08%",
  },
  group7: {
    top: "67.99%",
    bottom: "25.21%",
  },
  group8: {
    width: "19.2%",
    top: "64.59%",
    right: "74.4%",
    bottom: "33.14%",
  },
  frameIcon1: {
    top: "70.25%",
    bottom: "27.48%",
  },
  groupIcon: {
    height: "17%",
    width: "32%",
    top: "10.2%",
    right: "33.6%",
    bottom: "72.8%",
    left: "34.4%",
  },
  signup: {
    flex: 1,
    height: 706,
    overflow: "hidden",
    width: "100%",
  },
});

export default Signup;
