import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
      <View style={styles.group}>
        <Text style={styles.text}>検索</Text>
      </View>
      <View style={[styles.group1, styles.groupPosition9]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Text style={styles.text1}>ース、レーサー、イベントを検索する</Text>
      </View>
      <Image
        style={[styles.frameIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame12.png")}
      />
      <View style={[styles.group2, styles.group2Position]}>
        <Text style={styles.text2}>最近の検索</Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.group2Position]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group49.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group50.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.group2Position]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group52.png")}
      />
      <View style={styles.group3}>
        <Text style={[styles.text3, styles.textTypo1]}>すべての検索</Text>
        <Text style={[styles.text4, styles.textTypo1]}>結果をクリア</Text>
      </View>
      <View style={[styles.group4, styles.groupPosition8]}>
        <Text style={[styles.text5, styles.textTypo]}>競輪に関する動画</Text>
      </View>
      <View style={[styles.group5, styles.groupPosition8]}>
        <Text style={[styles.text5, styles.textTypo]}>
          オートレースに関する
        </Text>
        <Text style={[styles.text7, styles.textTypo]}>動画</Text>
      </View>
      <View style={[styles.group6, styles.groupPosition7]}>
        <Text style={[styles.text8, styles.textTypo2]}>1982</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition7]}>
        <Text style={[styles.text8, styles.textTypo2]}>2001</Text>
      </View>
      <View style={[styles.group8, styles.groupLayout]}>
        <Text style={styles.text2}>AI によるあなたへのお勧め</Text>
      </View>
      <View style={[styles.group9, styles.groupPosition6]}>
        <Text style={[styles.text5, styles.textTypo]}>競馬に関する動画</Text>
      </View>
      <View style={[styles.group10, styles.groupPosition6]}>
        <Text style={[styles.text5, styles.textTypo]}>
          ボートレースに関する動画
        </Text>
      </View>
      <View style={[styles.group11, styles.groupPosition3]}>
        <Text style={[styles.text12, styles.textTypo2]}>4.9</Text>
      </View>
      <View style={[styles.group12, styles.groupPosition2]}>
        <Text style={[styles.text12, styles.textTypo2]}>4.8</Text>
      </View>
      <View style={[styles.group13, styles.groupPosition1]}>
        <Text style={[styles.text8, styles.textTypo2]}>1994</Text>
      </View>
      <View style={[styles.group14, styles.groupPosition1]}>
        <Text style={[styles.text8, styles.textTypo2]}>2006</Text>
      </View>
      <View style={[styles.group15, styles.groupPosition]}>
        <Text style={[styles.text8, styles.textTypo2]}>(160 ratings)</Text>
      </View>
      <View style={[styles.group16, styles.groupPosition]}>
        <Text style={[styles.text8, styles.textTypo2]}>(160 ratings)</Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupPosition9]}
        contentFit="cover"
        source={require("../assets/group53.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition9: {
    right: "5.33%",
    width: "89.33%",
    left: "5.33%",
    position: "absolute",
  },
  group2Position: {
    right: "73.33%",
    position: "absolute",
  },
  groupIconLayout1: {
    bottom: "51.27%",
    top: "33.99%",
    width: "43.73%",
    height: "14.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    right: "75.47%",
    height: "10.2%",
    width: "19.2%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition8: {
    top: "49.86%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorGray_500,
    left: "0%",
    position: "absolute",
  },
  groupPosition7: {
    bottom: "40.79%",
    top: "57.22%",
    width: "6.4%",
    height: "1.98%",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: "2.69%",
    left: "5.33%",
  },
  groupPosition6: {
    left: "26.67%",
    height: "2.27%",
    position: "absolute",
  },
  groupPosition3: {
    left: "31.47%",
    right: "64.27%",
    width: "4.27%",
    height: "1.98%",
    position: "absolute",
  },
  groupPosition2: {
    bottom: "10.76%",
    top: "87.25%",
  },
  groupPosition1: {
    right: "66.93%",
    left: "26.67%",
    width: "6.4%",
    height: "1.98%",
    position: "absolute",
  },
  groupPosition: {
    left: "36.8%",
    right: "46.93%",
    width: "16.27%",
    height: "1.98%",
    position: "absolute",
  },
  frameIconLayout1: {
    left: "26.93%",
    right: "69.87%",
    width: "3.2%",
    height: "1.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  frameIcon: {
    top: "3.97%",
    right: "89.33%",
    bottom: "93.2%",
    left: "5.33%",
    width: "5.33%",
    height: "2.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: 32,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorGray_500,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "5.38%",
    width: "17.07%",
    top: "9.49%",
    right: "77.6%",
    bottom: "85.13%",
    left: "5.33%",
    position: "absolute",
  },
  text1: {
    top: "26.14%",
    left: "2.39%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  group1: {
    height: "6.23%",
    top: "17.56%",
    bottom: "76.2%",
  },
  frameIcon1: {
    height: "2.55%",
    width: "4.8%",
    top: "19.41%",
    right: "85.6%",
    bottom: "78.05%",
    left: "9.6%",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group2: {
    width: "21.33%",
    top: "28.26%",
    bottom: "69.05%",
    height: "2.69%",
    left: "5.33%",
  },
  vectorIcon2: {
    height: "14.16%",
    width: "26.67%",
    bottom: "85.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
  },
  groupIcon: {
    right: "50.93%",
    left: "5.33%",
  },
  groupIcon1: {
    top: "65.44%",
    bottom: "24.36%",
  },
  groupIcon2: {
    top: "80.31%",
    bottom: "9.49%",
  },
  groupIcon3: {
    right: "5.07%",
    left: "51.2%",
  },
  text3: {
    left: "1.39%",
    top: "0%",
  },
  text4: {
    top: "53.33%",
    left: "0%",
  },
  group3: {
    height: "4.25%",
    top: "28.61%",
    bottom: "67.14%",
    left: "75.47%",
    width: "19.2%",
    right: "5.33%",
    position: "absolute",
  },
  text5: {
    top: "0%",
  },
  group4: {
    right: "64.8%",
    bottom: "47.88%",
    width: "29.87%",
    height: "2.27%",
    top: "49.86%",
    left: "5.33%",
  },
  text7: {
    top: "52.94%",
  },
  group5: {
    height: "4.82%",
    width: "37.33%",
    right: "11.47%",
    bottom: "45.33%",
    left: "51.2%",
  },
  text8: {
    color: Color.colorDimgray_200,
  },
  group6: {
    right: "42.4%",
    left: "51.2%",
  },
  group7: {
    right: "88.27%",
    left: "5.33%",
  },
  group8: {
    width: "52%",
    top: "59.7%",
    right: "42.67%",
    bottom: "37.61%",
    position: "absolute",
  },
  group9: {
    top: "67%",
    right: "43.47%",
    bottom: "30.74%",
    width: "29.87%",
  },
  group10: {
    width: "44.8%",
    top: "81.3%",
    right: "28.53%",
    bottom: "16.43%",
  },
  text12: {
    color: Color.colorGray_500,
    fontSize: FontSize.size_xs,
  },
  group11: {
    bottom: "25.64%",
    top: "72.38%",
  },
  group12: {
    left: "31.47%",
    right: "64.27%",
    width: "4.27%",
    height: "1.98%",
    position: "absolute",
  },
  group13: {
    top: "69.55%",
    bottom: "28.47%",
  },
  group14: {
    top: "84.42%",
    bottom: "13.6%",
  },
  group15: {
    bottom: "25.64%",
    top: "72.38%",
  },
  group16: {
    bottom: "10.76%",
    top: "87.25%",
  },
  frameIcon2: {
    top: "72.52%",
    bottom: "25.78%",
  },
  frameIcon3: {
    top: "87.39%",
    bottom: "10.91%",
  },
  groupIcon4: {
    height: "0.14%",
    top: "77.9%",
    bottom: "21.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon5: {
    height: "7.37%",
    top: "90.37%",
    bottom: "2.27%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  frameIcon4: {
    right: "85.87%",
    left: "8.8%",
  },
  frameIcon5: {
    right: "34.93%",
    left: "59.73%",
  },
  frameIcon6: {
    right: "60.53%",
    left: "34.13%",
  },
  frameIcon7: {
    right: "9.07%",
    left: "85.6%",
  },
  search: {
    flex: 1,
    height: 706,
    overflow: "hidden",
    width: "100%",
  },
});

export default Search;
