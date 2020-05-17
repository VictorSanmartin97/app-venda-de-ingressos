import 'package:flutter/material.dart';

class EventoScreen extends StatelessWidget {
  dynamic evento;
  EventoScreen(this.evento);
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(evento['nome']),
      ),
    ));
  }
}
