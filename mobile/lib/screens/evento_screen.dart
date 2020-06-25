import 'package:engenharia_software/screens/cartao_screen.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';
import 'package:modal_bottom_sheet/modal_bottom_sheet.dart';
import 'package:toast/toast.dart';

class EventoScreen extends StatelessWidget {
  dynamic evento;
  EventoScreen(this.evento);
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: Color.fromRGBO(15, 15, 15, 1),
            appBar: AppBar(
              iconTheme: IconThemeData(color: Colors.white),
              backgroundColor: Color.fromRGBO(15, 15, 15, 1),
              centerTitle: true,
              elevation: 0,
            ),
            body: Container(
              padding: EdgeInsets.all(15),
              decoration:
                  Utils.getBorderRadius(color: Color.fromRGBO(15, 15, 15, 1)),
              child: SingleChildScrollView(
                child: Column(
                  children: <Widget>[
                    Stack(
                      children: <Widget>[
                        Container(
                            decoration: Utils.getBorderRadius(),
                            child: Image.network(evento['url'])),
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
                            style: TextStyle(
                                fontWeight: FontWeight.w500, fontSize: 18),
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
                          Text(evento['descricao']),
                          SizedBox(
                            height: 30,
                          ),
                          Container(
                            padding: EdgeInsets.symmetric(
                                horizontal: 15, vertical: 7),
                            width: double.infinity,
                            decoration:
                                Utils.getBorderRadius(color: Colors.green[700]),
                            child: FlatButton(
                                onPressed: () => showComprarIngresso(context),
                                child: Text("Comprar Ingresso",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        fontSize: 22,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold))),
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            )));
  }

  void showComprarIngresso(context) {
    showMaterialModalBottomSheet(
      isDismissible: false,
      context: context,
      builder: (context, scrollController) => Container(
        padding: EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              "Quantos ingressos quer comprar?",
              style: TextStyle(fontSize: 20),
              textAlign: TextAlign.center,
            ),
            SizedBox(
              height: 20,
            ),
            ContadorIngresso(),
            SizedBox(
              height: 20,
            ),
            FlatButton(
              padding: EdgeInsets.all(10),
              color: Colors.green[700],
              onPressed: () async {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => CartaoScreen()));
              },
              child: Row(
                mainAxisSize: MainAxisSize.min,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Icon(Icons.credit_card, color: Colors.white),
                  SizedBox(
                    width: 15,
                  ),
                  Text("Comprar", style: TextStyle(color: Colors.white))
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

class ContadorIngresso extends StatefulWidget {
  @override
  _ContadorIngressoState createState() => _ContadorIngressoState();
}

class _ContadorIngressoState extends State<ContadorIngresso> {
  int nIngresso = 0;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          IconButton(
              color: Colors.red,
              icon: Icon(
                Icons.exposure_neg_1,
                color: Colors.red,
              ),
              onPressed: () {
                setState(() {
                  if (nIngresso > 0) {
                    nIngresso--;
                  }
                });
              }),
          SizedBox(
            width: 15,
          ),
          Text("$nIngresso " + (nIngresso > 1 ? 'Ingressos' : 'Ingresso'),
              style: TextStyle(fontSize: 18)),
          SizedBox(
            width: 15,
          ),
          IconButton(
              color: Colors.green,
              icon: Icon(
                Icons.exposure_plus_1,
                color: Colors.green,
              ),
              onPressed: () {
                setState(() {
                  nIngresso++;
                });
              }),
        ],
      ),
    );
  }
}
