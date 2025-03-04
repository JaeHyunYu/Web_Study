import 'package:flutter/material.dart';
import 'dart:async';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() =>
      _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  static const twentyfivemin = 1500;
  int totalSeconds = 10;
  bool isRunning = false;
  int totalPomodoros = 0;
  late Timer timer;

  //두번째 인자에는 Timer라는 객체를 인자로 받는 콜백함수를 인자로 받는다는 의미입니다.
  void onTick(Timer timer) {
    if (totalSeconds == 0) {
      setState(() {
        totalSeconds = 10;
        totalPomodoros = totalPomodoros + 1;
        isRunning = false;
      });
      timer.cancel();
    } else {
      setState(() {
        totalSeconds = totalSeconds - 1;
      });
    }
  }

  void onStartPressed() {
    timer = Timer.periodic(
      Duration(seconds: 1),
      onTick,
    );
    setState(() {
      isRunning = !isRunning;
    });
  }

  void onPausedPressed() {
    timer.cancel();
    setState(() {
      isRunning = !isRunning;
    });
  }

  String format(int seconds) {
    var duration = Duration(seconds: seconds);
    print(
      duration
          .toString()
          .split(".")
          .first
          .substring(2, 7),
    );
    //가져오는 값 중에서 원하는 부분만 가져오기 위해서
    return duration
        .toString()
        .split(".")
        .first
        .substring(2, 7);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor:
          Theme.of(
            context,
          ).scaffoldBackgroundColor,
      body: Column(
        children: [
          Flexible(
            flex: 1,
            child: Text(
              format(totalSeconds),
              style: TextStyle(
                color:
                    Theme.of(context).cardColor,
                fontSize: 89,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          Flexible(
            flex: 3,
            child: Center(
              child: IconButton(
                iconSize: 98,
                color:
                    Theme.of(context).cardColor,
                onPressed:
                    isRunning
                        ? onPausedPressed
                        : onStartPressed,
                icon: Icon(
                  isRunning
                      ? Icons
                          .pause_circle_filled_outlined
                      : Icons
                          .play_circle_fill_outlined,
                ),
              ),
            ),
          ),
          Flexible(
            flex: 1,
            child: Row(
              children: [
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius:
                          BorderRadius.circular(
                            50,
                          ),
                      color:
                          Theme.of(
                            context,
                          ).cardColor,
                    ),
                    child: Column(
                      mainAxisAlignment:
                          MainAxisAlignment
                              .center,
                      children: [
                        Text(
                          'Pomodoros',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight:
                                FontWeight.w600,
                            color:
                                Theme.of(context)
                                    .textTheme
                                    .headlineLarge!
                                    .color,
                          ),
                        ),
                        Text(
                          '$totalPomodoros',
                          style: TextStyle(
                            fontSize: 58,
                            fontWeight:
                                FontWeight.w600,
                            color:
                                Theme.of(context)
                                    .textTheme
                                    .headlineLarge!
                                    .color,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
