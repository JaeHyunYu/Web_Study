import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:real_toonapp/models/webtoon_detail_model.dart';
import 'package:real_toonapp/models/webtoon_episode_model.dart';
import 'package:real_toonapp/models/webtoon_model.dart';
//as 사용함으로써 좀더 직관적으로 이해할 수 있도록 사용

class ApiService {
  static const baseUrl =
      "https://webtoon-crawler.nomadcoders.workers.dev";

  static const today = "today";

  static Future<List<WebtoonModel>>
  getTodaysToons() async {
    List<WebtoonModel> webtoonInstances = [];
    final url = Uri.parse('$baseUrl/$today');
    final response = await http.get(url);
    //변환타입은 Future
    //Future 미래의 받을 값의 type을 알려줌

    if (response.statusCode == 200) {
      final List<dynamic> webtoons = jsonDecode(
        response.body,
      );
      for (var webtoon in webtoons) {
        final toon = WebtoonModel.fromJson(
          webtoon,
        );
        webtoonInstances.add(toon);
      }
      return webtoonInstances;
    }
    throw Error;
  }

  static Future<WebtoonDetailModel> getToonById(
    String id,
  ) async {
    final url = Uri.parse("$baseUrl/$id");
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final webtoon = jsonDecode(response.body);
      return WebtoonDetailModel.fromJson(webtoon);
    }
    throw Error;
  }

  static Future<List<WebtoonEpisodeModel>>
  getLatestEpisodesById(String id) async {
    List<WebtoonEpisodeModel> episodesInstances =
        [];
    final url = Uri.parse(
      "$baseUrl/$id/episodes",
    );
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final episodes = jsonDecode(response.body);
      for (var episode in episodes) {
        episodesInstances.add(
          WebtoonEpisodeModel.fromJson(episode),
        );
      }
      return episodesInstances;
    }
    throw Error;
  }
}
