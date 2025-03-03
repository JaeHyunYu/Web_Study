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

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Color(0xFF181818),
        body: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.symmetric(
              horizontal: 20,
            ),
            child: Column(
              crossAxisAlignment:
                  CrossAxisAlignment.start,
              children: [
                SizedBox(height: 80),
                Row(
                  mainAxisAlignment:
                      MainAxisAlignment.end,
                  children: [
                    Column(
                      crossAxisAlignment:
                          CrossAxisAlignment.end,
                      children: [
                        Text(
                          'Hey, JH',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 38,
                            fontWeight:
                                FontWeight.w600,
                          ),
                        ),
                        Text(
                          'Welcome back',
                          style: TextStyle(
                            color: Colors.white
                                .withAlpha(125),
                            fontSize: 18,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                SizedBox(height: 70),
                Text(
                  'Total Balance',
                  style: TextStyle(
                    fontSize: 22,
                    color: Colors.white.withAlpha(
                      200,
                    ),
                  ),
                ),
                SizedBox(height: 5),
                Text(
                  '\$5 194 482',
                  style: TextStyle(
                    fontSize: 45,
                    fontWeight: FontWeight.w600,
                    color: Colors.white.withAlpha(
                      200,
                    ),
                  ),
                ),
                SizedBox(height: 30),
                Row(
                  mainAxisAlignment:
                      MainAxisAlignment
                          .spaceBetween,
                  children: [
                    Button(
                      text: 'Transfer',
                      bgColor: Color(0xFFF1B33B),
                      textColor: Colors.black,
                    ),
                    Button(
                      text: 'Request',
                      bgColor: Color(0xFF1F2123),
                      textColor: Colors.white,
                    ),
                  ],
                ),
                SizedBox(height: 100),
                Row(
                  crossAxisAlignment:
                      CrossAxisAlignment.end,
                  mainAxisAlignment:
                      MainAxisAlignment
                          .spaceBetween,
                  children: [
                    Text(
                      'Wallets',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 36,
                        fontWeight:
                            FontWeight.w300,
                      ),
                    ),
                    Text(
                      'View All',
                      style: TextStyle(
                        color: Colors.white
                            .withAlpha(120),
                        fontSize: 18,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                card(
                  name: 'euro',
                  code: 'EUR',
                  amount: '6 428',
                  icon: Icons.euro_symbol_rounded,
                  isreverted: false,
                  option: 0,
                ),
                Transform.translate(
                  offset: Offset(0, -20),
                  child: card(
                    name: 'Bitcoin',
                    code: 'Dollar',
                    amount: '6 428',
                    icon: Icons.currency_bitcoin,
                    isreverted: true,
                    option: 1,
                  ),
                ),
                Transform.translate(
                  offset: Offset(0, -40),
                  child: card(
                    name: 'Dollar',
                    code: 'USD',
                    amount: '6 428',
                    icon:
                        Icons
                            .attach_money_outlined,
                    isreverted: false,
                    option: 2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
