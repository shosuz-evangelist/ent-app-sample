import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { TextInput } from "react-native"; // TextInputをインポート
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined; // Homeルートを追加
  // 他のルート名とパラメータの型をここに追加
};

type navigationProp = StackNavigationProp<RootStackParamList>;

const Signup = () => {
  const navigation = useNavigation<navigationProp>();

  // 入力を管理するためのstateを作成
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // サインアップ処理
  const handleSignup = async () => {
    try {
      // APIにPOSTリクエストを送信
      const response = await fetch(
        "https://ent-userapp.demo.frontend.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password1: password,
            password2: password,
          }),
        }
      );

      // レスポンスが成功であればホーム画面に遷移
      if (response.ok) {
        const userData = await response.json();
        console.log(
          `User signed up successfully: ID=${userData[0].id}, Username=${userData[0].username}, Email=${userData[0].email}`
        );
        navigation.navigate("Home");
      } else {
        const errorData = await response.json();
        console.error("Signup failed: ", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // 直接ホーム画面に遷移
    navigation.navigate("Home");
  };

  // サインイン処理
  const handleSignin = async () => {
    // APIにPOSTリクエストを送信
    const response = await fetch(
      "https://ent-userapp.demo.frontend.com/api/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username_or_email: username,
          password: password,
        }),
      }
    );
    if (response.ok) {
      const userData = await response.json(); // レスポンスをJSONとして解析
      console.log(
        `User signed in successfully: ID=${userData[0].id}, Username=${userData[0].username}, Email=${userData[0].email}`
      ); // ユーザー情報をログに出力
      navigation.navigate("Home");
    } else {
      console.error("Signin failed");
    }

    // 直接ホーム画面に遷移
    navigation.navigate("Home");
  };

  return (
    <View style={styles.signup}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/su-vector.png")}
      />
      <View style={[styles.group, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/su-vector1.png")}
        />
        <TouchableOpacity
          style={[
            styles.signupButton, // 新しいスタイルを適用
          ]}
          onPress={() => {
            // ここで認証処理を行い、EmailとPasswordを渡す
            // authenticate(email, password);

            // 認証処理が完了したらHomeスクリーンに遷移
            navigation.navigate("Home");
          }}
        >
          <Text
            style={[
              styles.text8,
              styles.textFlexBox,
              styles.textTypo,
              styles.buttonText,
              { color: "#000000" },
            ]}
          >
            サインアップ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.group2, styles.groupPosition1]}>
        <Text
          style={[
            styles.text9,
            styles.textFlexBox,
            { left: 0, color: "#000000" },
          ]}
        >
          パーソナライズのための
        </Text>
        <Text style={[styles.text10, styles.textFlexBox, { color: "#000000" }]}>
          アカウントを作成します。
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/su-vector2.png")}
      />
      <View style={styles.group3}>
        <Text style={[styles.text11, styles.textTypo]}>すでにアカウントを</Text>
        <Text style={[styles.text12, styles.textTypo]}>お持ちですか？</Text>
      </View>
      <View style={styles.group4}>
        <TouchableOpacity
          style={styles.button} // ボタンスタイルを適用
          onPress={handleSignin} // ボタンが押されたときにサインイン処理を実行
        >
          <Text style={[styles.text13, styles.textTypo, styles.buttonText]}>
            ログイン
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/su-vector2.png")}
      />
      <View style={[styles.group5, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/su-vector3.png")}
        />
        <TextInput
          style={[styles.text14, styles.textTypo]}
          placeholder="メールアドレスを入力してください"
          onChangeText={(text) => setEmail(text)} // 入力が変更されたときにemailを更新
        />
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Text style={[styles.text13, styles.textTypo]}>Email *</Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/su-frame.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/su-vector2.png")}
      />
      <View style={[styles.group7, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/su-vector3.png")}
        />
        <TextInput
          style={[styles.text14, styles.textTypo]}
          placeholder="パスワードを入力してください"
          secureTextEntry // パスワードを隠す
          onChangeText={(text) => setPassword(text)} // 入力が変更されたときにpasswordを更新
        />
      </View>
      <View style={[styles.group8, styles.groupPosition]}>
        <Text style={[styles.text13, styles.textTypo]}>Password *</Text>
      </View>
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/su-frame1.png")}
      />
      <Image
        style={[
          styles.groupIcon,
          styles.iconLayout,
          { top: 30, left: 50, width: 300, height: 300 },
        ]}
        contentFit="cover"
        source={require("../assets/su-group.png")}
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
    position: "absolute",
  },
  groupPosition1: {
    left: "24.8%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    // position: "absolute", // 削除
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
  vectorIcon1: {
    height: "116.67%",
    width: "102.39%",
    top: "-4.17%",
    right: "-1.19%",
    bottom: "-12.5%",
    left: "-1.19%",
  },
  text8: {
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
  text9: {
    left: "4.19%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "0%",
  },
  text10: {
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
  text11: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
  },
  text12: {
    top: "57.89%",
    left: "11.02%",
    fontFamily: FontFamily.robotoRegular,
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
  text13: {
    color: "#FFFFFF", // 明確な色に変更
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    // left: "0%", // 削除
    // top: "0%", // 削除
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
  vectorIcon4: {
    height: "133.33%",
    width: "104.78%",
    top: "-12.5%",
    right: "-2.39%",
    bottom: "-20.83%",
    left: "-2.39%",
  },
  text14: {
    top: "31.25%",
    left: "2.39%",
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
  frameIcon2: {
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
  frameIcon3: {
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
    marginTop: 55,
    flex: 1,
    height: 706,
    overflow: "hidden",
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0000FF", // 背景色を青に変更
    padding: 10,
    position: "absolute",
    bottom: -35,
    width: "180%", // 幅を50%に変更
    left: "15%", // 左から25%の位置に配置
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF", // テキストの色を白に変更
  },
  signupButton: {
    backgroundColor: "#0000FF", // 背景色を青に変更
    marginTop: 30, // ボタンを上に50ピクセル移動
  },
});

export default Signup;
