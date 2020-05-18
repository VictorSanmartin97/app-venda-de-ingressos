import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';

class EventoScreen extends StatelessWidget {
  dynamic evento;
  EventoScreen(this.evento);
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      backgroundColor: Color.fromRGBO(15, 15, 15, 1),
      appBar: AppBar(
        backgroundColor: Color.fromRGBO(15, 15, 15, 1),
        centerTitle: true,
        title: Text(evento['nome']),
      ),
      body: Container(
        padding: EdgeInsets.all(15),
        decoration: Utils.getBorderRadius(color: Color.fromRGBO(15, 15, 15, 1)),
        child: Column(
          children: <Widget>[
            Stack(
              children: <Widget>[
                Container(
                    decoration: Utils.getBorderRadius(),
                    child: Image.network(
                        'https://admin.eventos365.com.br/upload/event/8761/thumbnail_img.png')),
              ],
            ),
            Container(
              padding: EdgeInsets.all(15),
              decoration: Utils.getBorderRadius(),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text(
                    "Data: " + evento['dia'],
                    style: TextStyle(fontWeight: FontWeight.w500, fontSize: 18),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                    "Horário: 20:00",
                    style: TextStyle(
                        fontWeight: FontWeight.w500,
                        fontSize: 18,
                        color: Colors.green),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                      "Jorjão Canta Tim uma viagem por toda a carreira do eterno mestre do soul, dos anos 70 até o fim, das menos conhecidas aos clássicos, sem esquecer a peculiar fase racional. Dentre elas: Acenda o Farol, Descobridor dos Sete Mares, Ela Partiu, Do Leme ao Pontal, Guiné Bissau, Moçambique e Angola, Sossego, Paixão Antiga, Telefone, Lábios de Mel, Um dia eu chego lá, My Little Girl, O que Você Quer Apostar, dentre outras."),
                  SizedBox(height: 30,),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 15, vertical: 10),
                    width: double.infinity,
                    decoration: Utils.getBorderRadius(color: Colors.green[700]),
                    child: Text("Comprar Ingresso", textAlign: TextAlign.center, style: TextStyle(fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold)),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    ));
  }
}
