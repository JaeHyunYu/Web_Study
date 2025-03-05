import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          "Today's Toons",
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
    );
  }
}
