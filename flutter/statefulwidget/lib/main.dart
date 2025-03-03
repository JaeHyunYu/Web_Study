import 'package:flutter/material.dart';
import 'widgets/button.dart';
import 'widgets/card.dart';

class Player {
  String? name;
  Player();
}

void main() {
  var jh = Player();
  runApp(App());
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  List<int> numbers = [];
  bool show = true;
  void onclicked() {
    setState(() {
      numbers.add(numbers.length);
    });
  }

  void toggleTitle() {
    setState(() {
      show = !show;
    });
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      theme: ThemeData(
        textTheme: TextTheme(
          titleLarge: TextStyle(
            color: Colors.red,
          ),
        ),
      ),
      home: Scaffold(
        backgroundColor: const Color(0xFFF4EDDB),
        body: Center(
          child: Column(
            mainAxisAlignment:
                MainAxisAlignment.center,
            children: [
              show ? MyTitle() : Text('nothing'),
              IconButton(
                onPressed: toggleTitle,
                icon: Icon(Icons.remove_red_eye),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class MyTitle extends StatefulWidget {
  const MyTitle({super.key});

  @override
  State<MyTitle> createState() => _MyTitleState();
}

class _MyTitleState extends State<MyTitle> {
  int count = 0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    print('inistate');
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      'Title',
      style: TextStyle(
        fontSize: 30,
        color:
            Theme.of(
              context,
            ).textTheme.titleLarge!.color,
      ),
    );
  }
}
