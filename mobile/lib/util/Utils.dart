import 'package:flutter/material.dart';

class Utils {
  static BoxDecoration getBorderRadius({Color color = Colors.white}) {
    return new BoxDecoration(
        color: color,
        borderRadius: new BorderRadius.all(const Radius.circular(5.0)));
  }
}
