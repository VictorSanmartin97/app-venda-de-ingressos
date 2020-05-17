import 'package:dio/dio.dart';
import 'package:engenharia_software/screens/eventos_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: EventosScreen(),
    );
  }

  Future<void> getHttp() async {
    try {
      Response response = await Dio().get("http://10.0.0.101:3333/cliente");
      print(response);
    } catch (e) {
      print(e);
    }
  }
}
