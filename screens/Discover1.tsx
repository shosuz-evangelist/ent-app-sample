import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Discover1 = () => {
  return (
    <View style={styles.discover}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.group, styles.groupPosition5]}>
        <Text style={[styles.text, styles.textTypo3]}>
          ディスカバー・レース
        </Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupPosition5]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupPosition5]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <View style={[styles.group1, styles.groupPosition4]}>
        <Text style={[styles.bettingOdds, styles.textTypo2]}>Betting Odds</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition4]}>
        <Text style={[styles.text1, styles.textTypo2]}>結果</Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group4.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <View style={[styles.group3, styles.groupPosition3]}>
        <Text style={[styles.text2, styles.textTypo1]}>ライブ</Text>
        <Text style={[styles.text3, styles.textTypo1]}>イベント</Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group6.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <View style={[styles.group4, styles.groupPosition3]}>
        <Text style={[styles.text4, styles.textTypo2]}>音楽</Text>
        <Text style={[styles.text5, styles.textTypo2]}>イベント</Text>
      </View>
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group8.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <View style={[styles.group5, styles.groupPosition1]}>
        <Text style={[styles.text6, styles.textTypo3]}>コミュニティ</Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group9.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <View style={[styles.group6, styles.groupPosition2]}>
        <Text style={[styles.text7, styles.textTypo]}>選手と</Text>
        <Text style={[styles.text8, styles.textTypo]}>つながる</Text>
      </View>
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group10.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <View style={[styles.group7, styles.groupPosition]}>
        <Text style={[styles.text9, styles.textTypo2]}>ファン</Text>
        <Text style={[styles.text5, styles.textTypo2]}>コミュニティ</Text>
      </View>
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <View style={[styles.group8, styles.groupPosition]}>
        <Text style={[styles.bettingOdds, styles.textTypo2]}>パーソナ</Text>
        <Text style={[styles.text12, styles.textTypo2]}>ライズ</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout3: {
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition5: {
    left: "6.4%",
    position: "absolute",
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition4: {
    left: "9.87%",
    position: "absolute",
  },
  textTypo2: {
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupIconLayout2: {
    bottom: "55.24%",
    top: "29.18%",
    width: "41.87%",
    height: "15.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    bottom: "57.93%",
    top: "35.13%",
    width: "21.33%",
    height: "6.94%",
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupIconPosition1: {
    left: "52%",
    right: "6.13%",
  },
  groupIconPosition: {
    left: "51.73%",
    right: "6.4%",
  },
  groupIconLayout1: {
    bottom: "37.39%",
    top: "47.03%",
    width: "41.87%",
    height: "15.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    left: "11.47%",
    right: "56.8%",
    width: "31.73%",
  },
  groupPosition2: {
    top: "52.97%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "19.55%",
    top: "64.87%",
    width: "41.87%",
    height: "15.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "22.24%",
    top: "70.82%",
    height: "6.94%",
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "4.53%",
    top: "92.63%",
    width: "5.33%",
    height: "2.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    width: "100%",
    top: "0%",
  },
  frameIcon: {
    height: "2.27%",
    width: "4.27%",
    top: "3.97%",
    bottom: "93.77%",
    left: "79.73%",
    right: "16%",
  },
  groupIcon: {
    height: "3.4%",
    width: "6.4%",
    top: "3.4%",
    bottom: "93.2%",
    left: "87.2%",
    position: "absolute",
    right: "6.4%",
  },
  text: {
    color: Color.colorDimgray_100,
  },
  group: {
    width: "52.8%",
    top: "3.68%",
    right: "40.8%",
    bottom: "93.06%",
    height: "3.26%",
  },
  groupIcon1: {
    height: "17%",
    width: "87.2%",
    top: "10.48%",
    bottom: "72.52%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon3: {
    height: "5.67%",
    width: "10.67%",
    top: "20.68%",
    right: "10.4%",
    bottom: "73.65%",
    left: "78.93%",
  },
  bettingOdds: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
    left: "0%",
    top: "0%",
  },
  group1: {
    width: "31.2%",
    top: "16.86%",
    right: "58.93%",
    bottom: "79.89%",
    height: "3.26%",
  },
  text1: {
    fontSize: FontSize.size_5xl,
    left: "0%",
    top: "0%",
  },
  group2: {
    height: "3.97%",
    width: "12.8%",
    top: "20.61%",
    right: "77.33%",
    bottom: "75.42%",
  },
  groupIcon4: {
    right: "51.73%",
    left: "6.4%",
  },
  text2: {
    left: "12.5%",
    top: "0%",
  },
  text3: {
    top: "53.06%",
    left: "0%",
  },
  group3: {
    right: "61.87%",
    left: "16.8%",
  },
  groupIcon6: {
    bottom: "55.24%",
    top: "29.18%",
    width: "41.87%",
    height: "15.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon7: {
    bottom: "55.24%",
    top: "29.18%",
    width: "41.87%",
    height: "15.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    left: "23.75%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
    top: "0%",
  },
  text5: {
    top: "53.06%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
    left: "0%",
  },
  group4: {
    left: "62.67%",
    right: "16%",
  },
  groupIcon8: {
    right: "51.73%",
    left: "6.4%",
  },
  text6: {
    color: Color.colorGray_300,
  },
  group5: {
    bottom: "43.77%",
    top: "52.97%",
    position: "absolute",
    height: "3.26%",
  },
  groupIcon10: {
    left: "52%",
    right: "6.13%",
  },
  text7: {
    left: "12.5%",
    top: "0%",
  },
  text8: {
    top: "53.06%",
    left: "0%",
  },
  group6: {
    right: "16.27%",
    bottom: "40.08%",
    left: "62.4%",
    width: "21.33%",
    height: "6.94%",
    top: "52.97%",
  },
  groupIcon12: {
    right: "51.73%",
    left: "6.4%",
  },
  text9: {
    left: "25.21%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
    top: "0%",
  },
  group7: {
    left: "11.47%",
    right: "56.8%",
    width: "31.73%",
  },
  groupIcon14: {
    left: "51.73%",
    right: "6.4%",
  },
  text12: {
    top: "53.06%",
    left: "12.5%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
  },
  group8: {
    right: "16.53%",
    left: "62.13%",
    width: "21.33%",
  },
  vectorIcon1: {
    height: "14.16%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.84%",
    left: "0%",
    top: "0%",
  },
  groupIcon16: {
    height: "7.37%",
    top: "90.37%",
    bottom: "2.27%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    width: "100%",
  },
  frameIcon1: {
    right: "85.87%",
    left: "8.8%",
  },
  frameIcon2: {
    right: "34.93%",
    left: "59.73%",
  },
  frameIcon3: {
    right: "60.53%",
    left: "34.13%",
  },
  frameIcon4: {
    right: "9.07%",
    left: "85.6%",
  },
  discover: {
    flex: 1,
    height: 706,
    overflow: "hidden",
    width: "100%",
  },
});

export default Discover1;
