# ReactNative

- Common

  ## Style

  - border와 같은 몇몇 속성들은 사용불가 / but 우리가 알고있는 98%정도의 css는 사용가능!

  ### Inline Style

  ```jsx
  <View style={ { width: 200, height: 200, backgroundColor: "red" } }>
  </View>
  <View style={ { width: 200, height: 200, backgroundColor: "blue" } }>
  </View>
  ```

  ```jsx
  <Text style={ { fontSize: 45 } }>This is inline style</Text>
  ```

  - 상단과 같이 Component들에 인라인형식으로 style={} 이런식으로 넣어도 상관 없음

  ## Layout

  [Layout](https://www.notion.so/Layout-21ed89e334dd44e8a317a4b133041dfb)

  ```jsx
  <View style={ { flex: 1 } }>
    <View style={ { flex: 1, backgroundColor: "red", flexDirection: "row" } }>
      <View style={ { flex: 1, backgroundColor: "gray" } }></View>
      <View style={ { flex: 1, backgroundColor: "black" } }></View>
    </View>

    <View style={ { flex: 1, backgroundColor: "blue" } }></View>

    <View style={ { flex: 1, backgroundColor: "tomato" } }></View>
  </View>
  ```

  - 이런식으로 flex:1해서 비율로 layout함! 주로! 이런 비율들은 옆에있는 view와 비교되어져서 비율이 계산되어지는거임
  - %나 사이즈를 적을 필요없음! 그냥 비율로 작성해서 layout하면 알아서 나눠짐.

- Expo Go - React_Native 코드가 들어가는 부분을 제외한 나머지 Structure들을 구성해줌으로써 간편하게 코드를 실행할 수 있도록 해줌
  - 주로 Prototype을 생성할때 사용
    Desktop 💻
  ```bash
  npm install --global expo-cli
  ```
  핸드폰 📱
  Install ExpoGO App
- React_Native Components
  ## React_Native Components
  ```jsx
  import { StyleSheet, Text, View } from "react-native";
  ```
  - 이런 StyleSheet, Text와 같은 Component들은 react native 공식 홈페이지에서 더 확인할 수 있음
  - 이전 버전들에는 다양한 component들이 존재했지만, 최신 버전들에선 많이 사라짐
    - 많은 component를 지원하는게 어렵기 때문!
    - 따라서 React_Native는 매우 필수적인 component들만 남겨둠
  ## View
  ```jsx
  <View style={flexDirection: "row"}> </View>
  ```
  - React_Native는 display block grid와 같은 개념X
  - display flex 이용!
  - View Component는 기본적으로 flex 설정
    → 따라서 display:flex이런식으로 설정 안해줘도괜찮음
    → 바로 flexDirection과 같이 설정해주면 됨
    View는 HTML상에서 Container라고 생각하면됨 div대신 사용하는 느낌!
  ## Text
  ```jsx
  <Text>This is Text!</Text>
  ```
  - react native에 있는 모든 텍스트는 text component안에 들어가야함!
  - HTML상의 p tag와 같은 느낌
  ## StatusBar
  ```jsx
  <StatusBar style="auto" />
  ```
  - Status bar는 시계 와이파이, 배터리와 같은 것들을 설정하는 소통하는 역할임
  ## StyleSheet
  ```jsx
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 45,
      color: "red",
    },
  });
  ```
  - StyleSeet.create 는 object를 생성하는 것임!
    상단과 같이 StyleSheet을만들어서 사용해도됨
  ## Dimensions
  ```jsx
  const { height, width: SCREEN_WIDTH } = Dimensions.get("window");
  ```
  - Dimensions는 각 user가 사용하고 있는 기기들의 너비/높이의 사이즈를 가져와줌
  - 왼쪽 코드는 object가져와서 내가 원하는 이름으로 바꿔 (’width를 SCREEN_WIDTH로 사용하겠다’라는 의미)
  ## ScrollView
  ```jsx
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    contentContainerStyle={styles.weather}
  >
    {/* 
  				 ScrollView를 이용할 경우,style prop이 아닌
           container style을 이용해야함
  	       pagingEnabled속성을 쓰면 carousel 쓰는 것처럼 보여짐
          */}
    <View style={styles.day}>
      <Text style={styles.temp}>27</Text>
      <Text style={styles.description}>sunny</Text>
    </View>
    <View style={styles.day}>
      <Text style={styles.temp}>27</Text>
      <Text style={styles.description}>sunny</Text>
    </View>
    <View style={styles.day}>
      <Text style={styles.temp}>27</Text>
      <Text style={styles.description}>sunny</Text>
    </View>
    <View style={styles.day}>
      <Text style={styles.temp}>27</Text>
      <Text style={styles.description}>sunny</Text>
    </View>
  </ScrollView>
  ```
  - ReactNative같은경우 스크롤이 안생김 (브라우저가 아닌 View이기떄문에)
  - 스크롤을 생기게하는 Scroll View를 이용하면 우리가 사용했던 브라우저처럼 스크롤을 할 수 있게되어짐
  ## ActivityIndicator
  [ActivityIndicator](https://www.notion.so/ActivityIndicator-f329dc33f8114ed08bd409775ac79ecb)
  ```jsx
  <ActivityIndicator color="black" size="large" style={ { marginTop: 10 } } />
  ```
  - ActivityIndicator 는 loading을 하는 react native에서 제공하는 Component임
- Other Components
  ## React Native directory
  - URL : [https://reactnative.directory/](https://reactnative.directory/)
  - api/component들은 해당 사이트에 접속하게 되면 여러 component들을 확인할 수 있음!
  - React Native directory는 Git과 같은 open source 커뮤니티임.
  - 커뮤니티(Git과 같은)이기때문에 버그가 발생하면 원작자를 기다리거나 내가 고치는 수 밖에 없음..
  ## Expo Components
  - Expo는 React_Native가 제공하지 않는 다양한 component들이 있음
  - Expo 자체 팀에서 다양한 component들과 API를 제공하기로함!
  ## Icon
  ```jsx
  import { Fontisto } from "@expo/vector-icons";
  ```
  - [https://icons.expo.fyi](https://icons.expo.fyi) 들어가서 아이콘들 확인 가능
  - 사이트 들어가서 fontawesome에서 아이콘 불러오듯 코드 복사 → 붙여넣기 시, icon 사용가능
- Expo API
  - expo에서 사용자의 위치를 받아오는 API임
  ## Location
  ```jsx
  import * as Location from "expo-location";
  ```
  - 상단 코드를 통해 import
  ```jsx
  const { granted } = await Location.requestForegroundPermissionsAsync();
  ```
  - 상단 코드를 통해 먼저 user로부터 권한을 허가 받음
  ```jsx
  const {
    coords: { latitude, longitude },
  } = await Location.getCurrentPositionAsync({ accuracy: 5 });
  ```
  - 상단 코드를 통해 user의 latitude, longitude 받아오기
  ```jsx
  const location = await Location.reverseGeocodeAsync(
    { latitude, longitude },
    { useGoogleMaps: false }
  );
  ```
  - 상단 코드를 통해 받아온 latitude와 longtidue를 도시명으로 바꿔줌
