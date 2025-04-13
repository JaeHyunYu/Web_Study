import 'package:flutter/material.dart';
import 'package:real_toonapp/models/webtoon_detail_model.dart';
import 'package:real_toonapp/models/webtoon_episode_model.dart';
import 'package:real_toonapp/services/api_service.dart';
import 'package:real_toonapp/widgets/episode_widget.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:url_launcher/url_launcher_string.dart';

class DetailScreen extends StatefulWidget {
  final String title, thumb, id;
  const DetailScreen({
    super.key,
    required this.title,
    required this.thumb,
    required this.id,
  });

  @override
  State<DetailScreen> createState() =>
      _DetailScreenState();
}

class _DetailScreenState
    extends State<DetailScreen> {
  late Future<WebtoonDetailModel> webtoon;
  late Future<List<WebtoonEpisodeModel>> episodes;
  late SharedPreferences prefs;
  bool isLiked = false;

  Future initPrefs() async {
    prefs = await SharedPreferences.getInstance();
    final likedToons = prefs.getStringList(
      'likedToons',
    );

    //likedToons가 존재하면 현재 사용자가 보고있는 웹툰id가 해당 리스트안에 있는지를 체크
    if (likedToons != null) {
      if (likedToons.contains(widget.id) ==
          true) {
        setState(() {
          isLiked = true;
          //ui를 refresh해줘야함
          /*1. 어차피 initState() -> build() 순서로 진행되고, initPrefs()가 initState() 안에 포함되어 있으니, "initState() -> initPrefs() -> build()" 순서로 진행될거라 생각했습니다.

2. 하지만 생각해보니 initPrefs()는 async 함수이므로 데이터를 가져오는 데 시간이 걸려서, 실제로는 "initState() -> build() -> initPrefs()" 순서로 진행되는 것 같네요. 그래서 disc에서 isLiked 정보를 가져오기 전에 build를 다 해버려서, 이전에 눌렀던 좋아요 표시가 안 되는 것 같아요.

3. 그래서 "initState() -> build() -> initPrefs() -> build()" 순서로, 마지막에 build 함수를 한번더 호출하기 위해서 setState() 함수가 필요한 것입니다.

async 함수는 항상 헷갈리네요 */
        });
      }
    } else {
      await prefs.setStringList('likedToons', []);
    }
  }

  onHeartTab() async {
    final likedToons = prefs.getStringList(
      'likedToons',
    );
    if (likedToons != null) {
      if (isLiked) {
        likedToons.remove(widget.id);
      } else {
        likedToons.add(widget.id);
      }
      await prefs.setStringList(
        'likedToons',
        likedToons,
      );
      setState(() {
        isLiked = !isLiked;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    webtoon = ApiService.getToonById(widget.id);
    episodes = ApiService.getLatestEpisodesById(
      widget.id,
    );
    initPrefs();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(
            onPressed: onHeartTab,
            icon: Icon(
              isLiked
                  ? Icons.favorite_outlined
                  : Icons
                      .favorite_outline_outlined,
            ),
          ),
        ],
        centerTitle: true,
        title: Text(
          widget.title,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w400,
          ),
        ),
        backgroundColor: Colors.white,
        foregroundColor: Colors.green,
        surfaceTintColor: Colors.white,
        shadowColor: Colors.black,
        elevation:
            1, // app바 하단 음영색 surfaceTintColor, shadowColor 둘다 설정해줘야함
      ),
      body: Padding(
        padding: const EdgeInsets.all(50),
        child: Column(
          children: [
            Row(
              mainAxisAlignment:
                  MainAxisAlignment.center,
              children: [
                Hero(
                  tag: widget.id,
                  child: Container(
                    width: 250,
                    clipBehavior: Clip.hardEdge,
                    decoration: BoxDecoration(
                      borderRadius:
                          BorderRadius.circular(
                            15,
                          ),
                      boxShadow: [
                        BoxShadow(
                          blurRadius: 15,
                          offset: Offset(10, 10),
                          color: Colors.black
                              .withAlpha(150),
                        ),
                      ],
                    ),

                    child: Image.network(
                      widget.thumb,
                      headers: const {
                        'User-Agent':
                            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                        'Referer':
                            'https://comic.naver.com',
                      },
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 25),
            FutureBuilder(
              future: webtoon,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Column(
                    crossAxisAlignment:
                        CrossAxisAlignment.start,
                    children: [
                      Text(
                        snapshot.data!.about,
                        style: TextStyle(
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 15),
                      Text(
                        '${snapshot.data!.genre} / ${snapshot.data!.age}',
                        style: TextStyle(
                          fontSize: 16,
                        ),
                      ),
                    ],
                  );
                }
                return Text("...");
              },
            ),
            const SizedBox(height: 25),
            FutureBuilder(
              future: episodes,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Expanded(
                    child: SingleChildScrollView(
                      child: Column(
                        children: [
                          for (var episode
                              in snapshot.data!)
                            Episode(
                              episode: episode,
                              webtoonId:
                                  widget.id,
                            ),
                        ],
                      ),
                    ),
                  );
                }
                return Container();
              },
            ),
          ],
        ),
      ),
    );
  }
}
