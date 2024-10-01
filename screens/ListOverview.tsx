import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ListOverview = () => {
  return (
    <View style={styles.listOverview}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={styles.group}>
        <Text style={styles.ai}>AI によるあなたへのお薦め</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <View style={[styles.group1, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textPosition]}>第13レース結果</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition5]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          Race Mania News
        </Text>
      </View>
      <View style={[styles.group3, styles.groupLayout]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          残り12分8秒
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group58.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <View style={[styles.group4, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textPosition]}>
          Podcast:レーシング・インサイト
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition4]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          競輪ハイライト
        </Text>
      </View>
      <View style={[styles.group6, styles.groupLayout1]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          レース終了
        </Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupPosition4]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group59.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group60.png")}
      />
      <View style={[styles.group7, styles.groupPosition3]}>
        <Text style={[styles.text, styles.textPosition]}>沙羅と瞑想する</Text>
      </View>
      <View style={[styles.group8, styles.groupPosition2]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          心を澄ませる
        </Text>
      </View>
      <View style={[styles.group9, styles.groupPosition2]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          残り18分23秒
        </Text>
      </View>
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <Image
        style={[styles.groupIcon13, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group61.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <Image
        style={[styles.groupIcon15, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group62.png")}
      />
      <View style={[styles.group10, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textPosition]}>
          独占レーサーインタビュー
        </Text>
      </View>
      <View style={[styles.group11, styles.groupPosition1]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          レース専門ケーブルテレビ
        </Text>
      </View>
      <View style={[styles.group12, styles.groupPosition2]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          残り20分10秒
        </Text>
      </View>
      <Image
        style={[styles.groupIcon16, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon17, styles.groupPosition1]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <Image
        style={[styles.groupIcon18, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group63.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon19, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <View style={[styles.group13, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textPosition]}>
          アプリデザインの秘訣
        </Text>
      </View>
      <View style={[styles.group14, styles.groupPosition]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          Race Mania デザイン
        </Text>
      </View>
      <View style={[styles.group15, styles.groupLayout]}>
        <Text style={[styles.raceManiaNews, styles.textPosition]}>
          残り31分9秒
        </Text>
      </View>
      <Image
        style={styles.groupIcon20}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon21, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <Image
        style={styles.groupIcon22}
        contentFit="cover"
        source={require("../assets/group64.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame15.png")}
      />
      <Image
        style={[styles.groupIcon23, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group65.png")}
      />
      <Image
        style={[styles.groupIcon24, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group65.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame16.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame17.png")}
      />
      <Image
        style={[styles.groupIcon25, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.frameIcon8, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon9, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon10, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon11, styles.frameIconLayout]}
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
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout2: {
    width: "89.33%",
    height: "13.64%",
    right: "5.33%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    left: "8.53%",
    right: "72.27%",
    width: "19.2%",
    height: "10.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition6: {
    height: "2.7%",
    left: "30.93%",
    position: "absolute",
  },
  textPosition: {
    color: Color.colorGray_600,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition5: {
    top: "17.61%",
    position: "absolute",
  },
  groupLayout: {
    width: "17.6%",
    height: "1.99%",
    position: "absolute",
  },
  groupIconPosition2: {
    bottom: "78.13%",
    top: "21.31%",
    height: "0.57%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    left: "85.07%",
    right: "8.53%",
    width: "6.4%",
    height: "3.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIconLayout2: {
    left: "87.2%",
    right: "10.13%",
    width: "2.67%",
    height: "1.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition4: {
    top: "33.52%",
    position: "absolute",
  },
  groupLayout1: {
    height: "1.99%",
    left: "30.93%",
  },
  groupIconPosition3: {
    right: "21.33%",
    width: "47.73%",
  },
  groupPosition3: {
    right: "39.2%",
    width: "29.87%",
  },
  groupPosition2: {
    right: "49.87%",
    height: "1.99%",
    left: "30.93%",
    width: "19.2%",
    position: "absolute",
  },
  groupIconPosition1: {
    bottom: "46.31%",
    top: "53.13%",
    height: "0.57%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    top: "65.34%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "30.4%",
    top: "69.03%",
    height: "0.57%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    top: "81.25%",
    position: "absolute",
  },
  frameIconLayout1: {
    left: "12.8%",
    right: "76.53%",
    height: "5.68%",
    width: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "4.55%",
    top: "92.61%",
    width: "5.33%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  ai: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "3.98%",
    width: "78.13%",
    top: "4.55%",
    right: "16.53%",
    bottom: "91.48%",
    left: "5.33%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "14.2%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.8%",
    left: "0%",
    maxWidth: "100%",
    top: "0%",
  },
  groupIcon: {
    top: "12.5%",
    bottom: "73.86%",
    right: "5.33%",
  },
  groupIcon1: {
    top: "14.2%",
    bottom: "75.57%",
  },
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorGray_600,
  },
  group1: {
    width: "30.4%",
    top: "14.28%",
    right: "38.67%",
    bottom: "83.03%",
    left: "30.93%",
  },
  raceManiaNews: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  group2: {
    width: "22.67%",
    right: "46.4%",
    bottom: "80.4%",
    height: "1.99%",
    left: "30.93%",
  },
  group3: {
    top: "22.16%",
    right: "51.47%",
    bottom: "75.85%",
    left: "30.93%",
  },
  groupIcon2: {
    right: "21.33%",
    width: "47.73%",
  },
  groupIcon3: {
    bottom: "78.98%",
    top: "17.61%",
    position: "absolute",
  },
  frameIcon: {
    top: "18.61%",
    bottom: "79.97%",
  },
  groupIcon4: {
    width: "40.53%",
    right: "28.53%",
  },
  groupIcon5: {
    top: "28.41%",
    bottom: "57.95%",
    right: "5.33%",
  },
  group4: {
    width: "63.73%",
    top: "30.18%",
    bottom: "67.12%",
    left: "30.93%",
    right: "5.33%",
  },
  group5: {
    width: "22.4%",
    right: "46.67%",
    bottom: "64.49%",
    height: "1.99%",
    left: "30.93%",
  },
  group6: {
    width: "16%",
    top: "38.07%",
    right: "53.07%",
    bottom: "59.94%",
    position: "absolute",
  },
  groupIcon6: {
    top: "37.22%",
    bottom: "62.22%",
    height: "0.57%",
    right: "21.33%",
    width: "47.73%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon7: {
    bottom: "63.07%",
    left: "85.07%",
    right: "8.53%",
    width: "6.4%",
    height: "3.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIcon1: {
    top: "34.52%",
    bottom: "64.06%",
  },
  groupIcon9: {
    top: "44.32%",
    bottom: "42.05%",
    right: "5.33%",
  },
  groupIcon10: {
    top: "46.02%",
    bottom: "43.75%",
  },
  group7: {
    top: "46.09%",
    bottom: "51.21%",
    left: "30.93%",
    height: "2.7%",
    position: "absolute",
  },
  group8: {
    bottom: "48.58%",
    top: "49.43%",
  },
  group9: {
    top: "53.98%",
    bottom: "44.03%",
  },
  groupIcon11: {
    right: "21.33%",
    width: "47.73%",
  },
  groupIcon12: {
    bottom: "47.16%",
    top: "49.43%",
    position: "absolute",
  },
  groupIcon13: {
    right: "39.2%",
    width: "29.87%",
  },
  frameIcon2: {
    top: "50.43%",
    bottom: "48.15%",
  },
  groupIcon14: {
    top: "60.23%",
    bottom: "26.14%",
    right: "5.33%",
  },
  groupIcon15: {
    top: "61.93%",
    bottom: "27.84%",
  },
  group10: {
    width: "51.2%",
    top: "62%",
    right: "17.87%",
    bottom: "35.3%",
    left: "30.93%",
  },
  group11: {
    width: "38.13%",
    right: "30.93%",
    bottom: "32.67%",
    height: "1.99%",
    left: "30.93%",
  },
  group12: {
    top: "69.89%",
    bottom: "28.13%",
  },
  groupIcon16: {
    right: "21.33%",
    width: "47.73%",
  },
  groupIcon17: {
    bottom: "31.25%",
    left: "85.07%",
    right: "8.53%",
    width: "6.4%",
    height: "3.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon18: {
    width: "43.73%",
    right: "25.33%",
  },
  frameIcon3: {
    top: "66.34%",
    bottom: "32.24%",
  },
  groupIcon19: {
    top: "76.14%",
    bottom: "10.23%",
    right: "5.33%",
  },
  group13: {
    width: "42.67%",
    top: "77.91%",
    right: "26.4%",
    bottom: "19.39%",
    left: "30.93%",
  },
  group14: {
    width: "28.27%",
    right: "40.8%",
    bottom: "16.76%",
    height: "1.99%",
    left: "30.93%",
  },
  group15: {
    top: "85.8%",
    right: "50.93%",
    bottom: "12.22%",
    left: "31.47%",
  },
  groupIcon20: {
    bottom: "14.49%",
    top: "84.94%",
    right: "21.33%",
    width: "47.73%",
    height: "0.57%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon21: {
    bottom: "15.34%",
    left: "85.07%",
    right: "8.53%",
    width: "6.4%",
    height: "3.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon22: {
    right: "58.4%",
    width: "10.67%",
    bottom: "14.49%",
    top: "84.94%",
    height: "0.57%",
    left: "30.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon4: {
    top: "82.24%",
    bottom: "16.34%",
  },
  frameIcon5: {
    height: "3.13%",
    width: "5.87%",
    top: "5.26%",
    bottom: "91.62%",
    left: "88.8%",
    right: "5.33%",
  },
  groupIcon23: {
    top: "77.84%",
    bottom: "11.93%",
  },
  groupIcon24: {
    top: "30.11%",
    bottom: "59.66%",
  },
  frameIcon6: {
    top: "32.39%",
    bottom: "61.93%",
  },
  frameIcon7: {
    top: "80.11%",
    bottom: "14.2%",
  },
  groupIcon25: {
    height: "7.39%",
    top: "90.34%",
    bottom: "2.27%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  frameIcon8: {
    right: "85.87%",
    left: "8.8%",
  },
  frameIcon9: {
    right: "34.93%",
    left: "59.73%",
  },
  frameIcon10: {
    right: "60.53%",
    left: "34.13%",
  },
  frameIcon11: {
    right: "9.07%",
    left: "85.6%",
  },
  listOverview: {
    flex: 1,
    height: 704,
    overflow: "hidden",
    width: "100%",
  },
});

export default ListOverview;
