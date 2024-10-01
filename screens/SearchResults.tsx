import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SearchResults = () => {
  return (
    <View style={styles.searchResults}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group28.png")}
      />
      <View style={[styles.group, styles.groupPosition11]}>
        <Text style={[styles.text, styles.textPosition]}>オートレース</Text>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group29.png")}
      />
      <View style={[styles.group1, styles.groupPosition10]}>
        <Text style={[styles.text1, styles.textTypo]}>9.1</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition7]}>
        <Text style={[styles.text2, styles.textTypo]}>
          ファンやレーサーと繋がる
        </Text>
      </View>
      <View style={[styles.group3, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo]}>現在オープン中</Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group30.png")}
      />
      <View style={[styles.group4, styles.groupPosition5]}>
        <Text style={[styles.text2, styles.textTypo]}>420 fans online</Text>
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group29.png")}
      />
      <View style={styles.group5}>
        <Text style={[styles.text4, styles.textPosition]}>
          お近くのレースイベント
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition10]}>
        <Text style={[styles.text1, styles.textTypo]}>8.6</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition4]}>
        <Text style={[styles.text6, styles.textPosition]}>
          スーパー・レーシング
        </Text>
      </View>
      <View style={[styles.group8, styles.groupPosition6]}>
        <Text style={[styles.text2, styles.textTypo]}>ハワイアン料理</Text>
      </View>
      <View style={[styles.group8, styles.groupPosition6]}>
        <Text style={[styles.text2, styles.textTypo]}>ハワイアン料理</Text>
      </View>
      <View style={[styles.group10, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo]}>現在オープン中</Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group31.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group30.png")}
      />
      <View style={[styles.group11, styles.groupPosition5]}>
        <Text style={[styles.text2, styles.textTypo]}>811 fans online</Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group29.png")}
      />
      <View style={[styles.group12, styles.groupPosition10]}>
        <Text style={[styles.text1, styles.textTypo]}>8.2</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.group13, styles.groupPosition3]}>
        <Text style={[styles.text6, styles.textPosition]}>
          レース・ベッティング
        </Text>
      </View>
      <View style={[styles.group14, styles.groupPosition7]}>
        <Text style={[styles.text2, styles.textTypo]}>賭けをする</Text>
      </View>
      <View style={[styles.group15, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo]}>現在オープン中</Text>
      </View>
      <Image
        style={[styles.groupIcon7, styles.groupPosition3]}
        contentFit="cover"
        source={require("../assets/group32.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group33.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.vectorIconLayout]}
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
      <Image
        style={styles.frameIcon5}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
      <View style={[styles.group16, styles.groupPosition2]}>
        <Text style={[styles.text6, styles.textPosition]}>
          RaceMania コミュニティ
        </Text>
      </View>
      <View style={[styles.group17, styles.groupPosition11]}>
        <Text style={[styles.text, styles.textPosition]}>Filters</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group34.png")}
      />
      <View style={[styles.group18, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textPosition]}>競輪</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group35.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group36.png")}
      />
      <View style={[styles.group19, styles.groupPosition1]}>
        <Text style={[styles.text, styles.textPosition]}>競馬</Text>
      </View>
      <Image
        style={[styles.groupIcon13, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group30.png")}
      />
      <View style={[styles.group20, styles.groupPosition5]}>
        <Text style={[styles.text2, styles.textTypo]}>908 fans online</Text>
      </View>
      <Image
        style={[styles.groupIcon14, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group37.png")}
      />
      <View style={[styles.group21, styles.groupPosition1]}>
        <Text style={[styles.text6, styles.textPosition]}>
          Race Mania コミュニティ
        </Text>
      </View>
      <View style={[styles.group22, styles.groupPosition7]}>
        <Text style={[styles.text2, styles.textTypo]}>
          ファンやレーサーと繋がる
        </Text>
      </View>
      <View style={[styles.group23, styles.groupPosition]}>
        <Text style={[styles.text3, styles.textTypo]}>現在オープン中</Text>
      </View>
      <Image
        style={[styles.groupIcon15, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group29.png")}
      />
      <View style={[styles.group24, styles.groupPosition10]}>
        <Text style={[styles.text1, styles.textTypo]}>9.0</Text>
      </View>
      <View style={[styles.group25, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textPosition]}>競艇</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition11: {
    bottom: "86.79%",
    top: "11.22%",
    height: "1.99%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconLayout2: {
    left: "81.87%",
    right: "9.6%",
    width: "8.53%",
    height: "4.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition10: {
    left: "83.47%",
    right: "11.73%",
    width: "4.8%",
    height: "2.27%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition7: {
    left: "37.33%",
    height: "2.27%",
    position: "absolute",
  },
  groupPosition6: {
    right: "36.53%",
    width: "26.13%",
    left: "37.33%",
    height: "2.27%",
  },
  groupIconLayout1: {
    right: "5.33%",
    width: "89.33%",
    left: "5.33%",
    height: "17.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition5: {
    right: "39.73%",
    width: "22.93%",
    left: "37.33%",
    height: "2.27%",
    position: "absolute",
  },
  groupPosition4: {
    top: "42.19%",
    position: "absolute",
  },
  groupIconLayout: {
    left: "9.6%",
    right: "66.93%",
    width: "23.47%",
    height: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition3: {
    top: "62.07%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "85.37%",
    top: "10.09%",
    height: "4.55%",
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
  groupPosition2: {
    bottom: "74.86%",
    top: "22.16%",
    height: "2.98%",
    left: "37.33%",
  },
  groupLayout1: {
    width: "6.4%",
    bottom: "86.79%",
    top: "11.22%",
    height: "1.99%",
  },
  groupPosition1: {
    right: "10.93%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "65.34%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    left: "0%",
    width: "100%",
    top: "0%",
  },
  groupIcon: {
    bottom: "82.95%",
    height: "17.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_600,
  },
  group: {
    width: "19.2%",
    left: "56%",
    right: "24.8%",
  },
  frameIcon: {
    height: "3.41%",
    top: "3.41%",
    right: "88.27%",
    bottom: "93.18%",
    left: "5.33%",
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1: {
    bottom: "63.35%",
    top: "32.1%",
  },
  text1: {
    color: Color.colorGray_600,
  },
  group1: {
    top: "33.1%",
    bottom: "64.63%",
  },
  text2: {
    color: Color.colorGray_200,
  },
  group2: {
    top: "25.99%",
    bottom: "71.73%",
    right: "17.87%",
    width: "44.8%",
    left: "37.33%",
  },
  text3: {
    color: Color.colorDimgray_100,
  },
  group3: {
    bottom: "65.63%",
    top: "32.1%",
    position: "absolute",
  },
  groupIcon2: {
    top: "39.91%",
    bottom: "43.04%",
  },
  group4: {
    top: "49.15%",
    bottom: "48.58%",
  },
  groupIcon3: {
    top: "52.13%",
    bottom: "43.32%",
  },
  text4: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray,
  },
  group5: {
    height: "3.98%",
    width: "70.13%",
    top: "2.98%",
    right: "12.8%",
    bottom: "93.04%",
    left: "17.07%",
    position: "absolute",
  },
  group6: {
    top: "53.13%",
    bottom: "44.6%",
  },
  text6: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_400,
  },
  group7: {
    width: "48%",
    right: "14.67%",
    bottom: "54.83%",
    height: "2.98%",
    left: "37.33%",
  },
  group8: {
    top: "46.02%",
    bottom: "51.7%",
    position: "absolute",
  },
  group10: {
    top: "52.27%",
    bottom: "45.45%",
    position: "absolute",
  },
  groupIcon4: {
    bottom: "45.31%",
    top: "42.19%",
    position: "absolute",
  },
  groupIcon5: {
    top: "59.8%",
    bottom: "23.15%",
  },
  group11: {
    top: "69.03%",
    bottom: "28.69%",
  },
  groupIcon6: {
    top: "72.02%",
    bottom: "23.44%",
  },
  group12: {
    top: "73.01%",
    bottom: "24.72%",
  },
  vectorIcon1: {
    height: "14.2%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.8%",
    top: "0%",
  },
  group13: {
    width: "47.73%",
    right: "14.93%",
    bottom: "34.94%",
    height: "2.98%",
    left: "37.33%",
  },
  group14: {
    width: "18.67%",
    top: "65.91%",
    right: "44%",
    bottom: "31.82%",
  },
  group15: {
    top: "72.16%",
    bottom: "25.57%",
    position: "absolute",
  },
  groupIcon7: {
    bottom: "25.43%",
    left: "9.6%",
    right: "66.93%",
    width: "23.47%",
    height: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon8: {
    width: "21.6%",
    right: "72.27%",
    left: "6.13%",
  },
  groupIcon9: {
    height: "7.39%",
    top: "90.34%",
    bottom: "2.27%",
    right: "0%",
    maxWidth: "100%",
    left: "0%",
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
  frameIcon5: {
    width: "4.27%",
    right: "87.47%",
    bottom: "86.51%",
    left: "8.27%",
    height: "2.27%",
    top: "11.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group16: {
    width: "50.67%",
    right: "12%",
    position: "absolute",
  },
  group17: {
    width: "8%",
    right: "76.27%",
    left: "15.73%",
  },
  groupIcon10: {
    width: "21.87%",
    right: "48.27%",
    left: "29.87%",
  },
  group18: {
    right: "55.73%",
    left: "37.87%",
    position: "absolute",
  },
  groupIcon11: {
    width: "21.33%",
    left: "53.87%",
    right: "24.8%",
  },
  groupIcon12: {
    width: "17.07%",
    right: "5.6%",
    left: "77.33%",
  },
  group19: {
    left: "82.67%",
    width: "6.4%",
    bottom: "86.79%",
    top: "11.22%",
    height: "1.99%",
  },
  groupIcon13: {
    top: "19.89%",
    bottom: "63.07%",
  },
  group20: {
    top: "29.12%",
    bottom: "68.61%",
  },
  groupIcon14: {
    top: "22.16%",
    bottom: "65.34%",
    left: "9.6%",
    right: "66.93%",
    width: "23.47%",
    height: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  group21: {
    width: "51.73%",
    bottom: "74.86%",
    top: "22.16%",
    height: "2.98%",
    left: "37.33%",
  },
  group22: {
    top: "26.14%",
    bottom: "71.59%",
    right: "17.87%",
    width: "44.8%",
    left: "37.33%",
  },
  group23: {
    top: "32.39%",
    right: "36.53%",
    width: "26.13%",
    left: "37.33%",
    height: "2.27%",
  },
  groupIcon15: {
    top: "32.24%",
    bottom: "63.21%",
  },
  group24: {
    top: "33.24%",
    bottom: "64.49%",
  },
  group25: {
    right: "31.73%",
    left: "61.87%",
    position: "absolute",
  },
  searchResults: {
    flex: 1,
    height: 704,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchResults;
