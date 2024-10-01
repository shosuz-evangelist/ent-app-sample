import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group38.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group39.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.group, styles.groupPosition7]}>
        <Text style={[styles.text, styles.textTypo2]}>レース当日の雰囲気</Text>
      </View>
      <View style={[styles.group1, styles.groupPosition7]}>
        <Text style={[styles.text, styles.textTypo2]}>祝賀の時</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition7]}>
        <Text style={[styles.text, styles.textTypo2]}>
          レース・ファッション
        </Text>
      </View>
      <View style={[styles.group3, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo1]}>
          レーシング・プレイリスト
        </Text>
      </View>
      <View style={[styles.group4, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo1]}>
          チャンピオン・プレーリスト
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition6]}>
        <Text style={[styles.text3, styles.textTypo1]}>レースのスタイル</Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group40.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame10.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group41.png")}
      />
      <View style={styles.group6}>
        <Text style={[styles.raceMania, styles.text11Position]}>
          Race Mania! へようこそ
        </Text>
      </View>
      <View style={[styles.group7, styles.groupPosition5]}>
        <Text style={[styles.text6, styles.textTypo2]}>
          レースイベントを探す
        </Text>
      </View>
      <View style={[styles.group8, styles.groupPosition5]}>
        <Text style={[styles.text6, styles.textTypo2]}>ファンとつながる</Text>
      </View>
      <View style={[styles.group9, styles.groupPosition5]}>
        <Text style={[styles.text6, styles.textTypo2]}>人気のレースビデオ</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.group10}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Text style={[styles.text9, styles.textTypo1]}>
          全てのイベントを見る
        </Text>
      </View>
      <View style={styles.group11}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.text10, styles.textTypo1]}>
          コミュニティに参加しよう
        </Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group42.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group43.png")}
      />
      <View style={[styles.group12, styles.groupPosition3]}>
        <Text style={[styles.text11, styles.textTypo]}>競輪</Text>
      </View>
      <View style={[styles.group13, styles.groupPosition2]}>
        <Text style={[styles.autoRacing, styles.textTypo]}>Auto Racing</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group44.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group43.png")}
      />
      <View style={[styles.group14, styles.groupPosition3]}>
        <Text style={[styles.text11, styles.textTypo]}>競馬</Text>
      </View>
      <View style={[styles.group15, styles.groupPosition2]}>
        <Text style={[styles.autoRacing, styles.textTypo]}>Boat Racing</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group45.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group43.png")}
      />
      <View style={[styles.group16, styles.groupPosition3]}>
        <Text style={[styles.text11, styles.textTypo]}>イベント情報</Text>
      </View>
      <View style={styles.group17}>
        <Text style={[styles.autoRacing, styles.textTypo]}>コミュニティに</Text>
        <Text style={[styles.text15, styles.textTypo]}>参加する</Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group46.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group47.png")}
      />
      <View style={[styles.group18, styles.groupPosition1]}>
        <Text style={[styles.text11, styles.textTypo]}>お気に入り</Text>
      </View>
      <View style={[styles.group19, styles.groupPosition]}>
        <Text style={[styles.autoRacing, styles.textTypo]}>トップレーサー</Text>
      </View>
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group48.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group47.png")}
      />
      <View style={[styles.group20, styles.groupPosition1]}>
        <Text style={[styles.text11, styles.textTypo]}>
          ディスカバー・レース
        </Text>
      </View>
      <View style={[styles.group21, styles.groupPosition]}>
        <Text style={[styles.autoRacing, styles.textTypo]}>
          体験をパーソナライズする
        </Text>
      </View>
      <Image
        style={[styles.groupIcon14, styles.vectorIconLayout]}
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
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout2: {
    right: "82.93%",
    width: "10.67%",
    height: "5.68%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition7: {
    left: "21.33%",
    height: "2.27%",
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition6: {
    height: "1.99%",
    left: "21.33%",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDimgray_100,
    position: "absolute",
  },
  frameIconLayout1: {
    left: "90.4%",
    width: "3.2%",
    height: "1.7%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text11Position: {
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
  },
  groupPosition5: {
    height: "3.27%",
    left: "6.4%",
    position: "absolute",
  },
  groupIconLayout1: {
    bottom: "68.89%",
    top: "15.48%",
    width: "26.93%",
    height: "15.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    bottom: "76.63%",
    top: "20.67%",
    height: "2.7%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition2: {
    bottom: "74.57%",
    width: "17.6%",
    top: "23.44%",
    height: "1.99%",
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "45.6%",
    top: "38.78%",
    width: "41.87%",
    height: "15.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    bottom: "53.2%",
    top: "44.11%",
    height: "2.7%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "51.14%",
    top: "46.88%",
    height: "1.99%",
    position: "absolute",
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
    right: "0%",
    maxWidth: "100%",
    width: "100%",
    top: "0%",
  },
  vectorIcon1: {
    height: "14.2%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.8%",
    left: "0%",
    top: "0%",
  },
  groupIcon: {
    top: "70.03%",
    bottom: "24.29%",
    left: "6.4%",
  },
  groupIcon1: {
    top: "77.98%",
    bottom: "16.34%",
    left: "6.4%",
  },
  text: {
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
  },
  group: {
    width: "33.6%",
    top: "62.36%",
    right: "45.07%",
    bottom: "35.37%",
  },
  group1: {
    width: "14.93%",
    top: "70.31%",
    right: "63.73%",
    bottom: "27.41%",
  },
  group2: {
    width: "37.33%",
    top: "78.27%",
    right: "41.33%",
    bottom: "19.46%",
  },
  text3: {
    left: "0%",
    top: "0%",
  },
  group3: {
    top: "65.34%",
    bottom: "32.67%",
    right: "40.27%",
    width: "38.4%",
  },
  group4: {
    width: "41.6%",
    top: "73.3%",
    right: "37.07%",
    bottom: "24.72%",
  },
  group5: {
    top: "81.25%",
    right: "53.07%",
    bottom: "16.76%",
    width: "25.6%",
  },
  groupIcon2: {
    top: "62.07%",
    bottom: "32.24%",
    left: "6.4%",
  },
  frameIcon: {
    top: "64.06%",
    bottom: "34.23%",
  },
  frameIcon1: {
    width: "4.27%",
    top: "3.98%",
    right: "16%",
    bottom: "93.75%",
    left: "79.73%",
    height: "2.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon3: {
    height: "3.41%",
    width: "6.4%",
    top: "3.41%",
    bottom: "93.18%",
    left: "87.2%",
    right: "6.4%",
  },
  raceMania: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  group6: {
    width: "46.13%",
    top: "3.62%",
    right: "47.47%",
    bottom: "93.68%",
    height: "2.7%",
    left: "6.4%",
    position: "absolute",
  },
  text6: {
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
  },
  group7: {
    width: "53.33%",
    top: "10.51%",
    bottom: "86.22%",
    right: "40.27%",
  },
  group8: {
    width: "42.67%",
    top: "33.81%",
    right: "50.93%",
    bottom: "62.93%",
  },
  group9: {
    width: "48%",
    top: "56.96%",
    bottom: "39.77%",
    right: "45.6%",
  },
  text9: {
    top: "22.41%",
    left: "7.19%",
  },
  group10: {
    height: "4.12%",
    width: "37.07%",
    top: "10.23%",
    right: "3.73%",
    bottom: "85.65%",
    left: "59.2%",
    position: "absolute",
  },
  text10: {
    top: "19.23%",
    left: "6.13%",
  },
  group11: {
    height: "3.69%",
    width: "43.47%",
    top: "33.95%",
    right: "2.67%",
    bottom: "62.36%",
    left: "53.87%",
    position: "absolute",
  },
  frameIcon2: {
    top: "72.02%",
    bottom: "26.28%",
  },
  frameIcon3: {
    top: "79.97%",
    bottom: "18.32%",
  },
  groupIcon4: {
    right: "66.67%",
    left: "6.4%",
  },
  text11: {
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
  },
  group12: {
    right: "75.73%",
    left: "15.73%",
    width: "8.53%",
    bottom: "76.63%",
    top: "20.67%",
  },
  autoRacing: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    left: "0%",
    top: "0%",
  },
  group13: {
    right: "71.2%",
    left: "11.2%",
  },
  groupIcon6: {
    right: "36.53%",
    left: "36.53%",
  },
  group14: {
    left: "45.87%",
    width: "8.53%",
    bottom: "76.63%",
    top: "20.67%",
    right: "45.6%",
  },
  group15: {
    right: "41.07%",
    left: "41.33%",
  },
  groupIcon8: {
    left: "66.67%",
    right: "6.4%",
  },
  group16: {
    right: "5.33%",
    left: "69.07%",
    width: "25.6%",
  },
  text15: {
    top: "53.33%",
    left: "21.43%",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
  },
  group17: {
    height: "4.26%",
    right: "8.27%",
    bottom: "72.3%",
    left: "69.33%",
    width: "22.4%",
    top: "23.44%",
    position: "absolute",
  },
  groupIcon10: {
    right: "51.73%",
    left: "6.4%",
  },
  group18: {
    width: "21.33%",
    right: "61.87%",
    left: "16.8%",
  },
  group19: {
    right: "61.33%",
    left: "16.27%",
    width: "22.4%",
  },
  groupIcon12: {
    left: "51.73%",
    right: "6.4%",
  },
  group20: {
    width: "42.4%",
    right: "6.67%",
    left: "50.93%",
  },
  group21: {
    right: "9.33%",
    left: "52.27%",
    width: "38.4%",
  },
  groupIcon14: {
    height: "7.39%",
    top: "90.34%",
    bottom: "2.27%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
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
  home: {
    flex: 1,
    height: 704,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
