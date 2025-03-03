import 'package:flutter/material.dart';

class card extends StatelessWidget {
  const card({
    super.key,
    required this.name,
    required this.code,
    required this.amount,
    required this.icon,
    required this.isreverted,
    required this.option,
  });

  final String name, code, amount;
  final IconData icon;
  final bool isreverted;
  final int option;
  final blackColor = const Color(0xFF1F2123);

  @override
  Widget build(BuildContext context) {
    double val = option * -20;
    return Transform.translate(
      offset: Offset(0, val),
      child: Container(
        clipBehavior: Clip.hardEdge,
        decoration: BoxDecoration(
          color:
              isreverted
                  ? Colors.white
                  : blackColor,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Padding(
          padding: EdgeInsets.all(25),
          child: Row(
            mainAxisAlignment:
                MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment:
                    CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: TextStyle(
                      color:
                          isreverted
                              ? blackColor
                              : Colors.white,
                      fontSize: 32,
                      fontWeight: FontWeight.w300,
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    children: [
                      Text(
                        amount,
                        style: TextStyle(
                          color:
                              isreverted
                                  ? blackColor
                                  : Colors.white,
                          fontSize: 20,
                        ),
                      ),
                      SizedBox(width: 5),
                      Text(
                        code,
                        style: TextStyle(
                          color:
                              isreverted
                                  ? blackColor
                                  : Colors.white
                                      .withAlpha(
                                        120,
                                      ),
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              Transform.scale(
                scale: 2,
                child: Transform.translate(
                  offset: Offset(-5, 12),
                  child: Icon(
                    icon,
                    color:
                        isreverted
                            ? blackColor
                            : Colors.white,
                    size: 88,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
