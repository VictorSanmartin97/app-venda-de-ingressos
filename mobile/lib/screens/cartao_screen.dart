import 'package:engenharia_software/util/ApiService.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_credit_card/credit_card_form.dart';
import 'package:flutter_credit_card/credit_card_model.dart';
import 'package:flutter_credit_card/credit_card_widget.dart';
import 'package:toast/toast.dart';

class CartaoScreen extends StatefulWidget {
  dynamic evento;

  CartaoScreen(this.evento);
  @override
  _CartaoScreenState createState() => _CartaoScreenState();
}

class _CartaoScreenState extends State<CartaoScreen> {
  String cardNumber = '';

  String expiryDate = '';

  String cardHolderName = '';

  String cvvCode = '';

  bool isCvvFocused = false;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      resizeToAvoidBottomInset: true,
      body: SingleChildScrollView(
          child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 5),
              child: Column(
                children: <Widget>[
                  SizedBox(
                    height: 20,
                  ),
                  CreditCardWidget(
                    cardNumber: cardNumber,
                    expiryDate: expiryDate,
                    cardHolderName: cardHolderName,
                    cvvCode: cvvCode,
                    showBackView: isCvvFocused,
                    height: 175,
                    textStyle: TextStyle(color: Colors.yellowAccent),
                    width: MediaQuery.of(context).size.width,
                    animationDuration: Duration(milliseconds: 1000),
                  ),
                  CreditCardForm(
                    themeColor: Colors.black,
                    textColor: Colors.black,
                    onCreditCardModelChange: (CreditCardModel data) {
                      setState(() {
                        cardNumber = data.cardNumber;
                        expiryDate = data.expiryDate;
                        cardHolderName = data.cardHolderName;
                        cvvCode = data.cvvCode;
                        isCvvFocused = data.isCvvFocused;
                      });
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                      padding: EdgeInsets.symmetric(horizontal: 15),
                      child: Container(
                          padding: EdgeInsets.symmetric(horizontal: 40),
                          width: double.infinity,
                          decoration: Utils.getBorderRadius(
                              color: Theme.of(context).primaryColor),
                          child: FlatButton(
                            onPressed: () async {
                              if (cardNumber != '' &&
                                  expiryDate != '' &&
                                  cardHolderName != '' &&
                                  cvvCode != '') {
                                var result =
                                    await ApiService().post("ingresso", {
                                  'id_evento' : widget.evento['id'],
                                  'nome_ingresso': widget.evento['nome'],
                                  'valor_ingresso': 20,
                                  'setor_ingresso': 'Pista',
                                  'quantidade': '5',
                                  'data_iniciovendas': '20/08/2020',
                                  'data_fimvendas': '21/08/2020'
                                });

                                Toast.show(
                                    "Compra Realizada com sucesso", context,
                                    backgroundColor: Colors.green,
                                    duration: Toast.LENGTH_LONG,
                                    gravity: Toast.BOTTOM);
                                await Future.delayed(Duration(seconds: 3));

                                Navigator.pop(context);
                                Navigator.pop(context);
                              }
                            },
                            child: Text("Adicionar Cartão",
                                style: TextStyle(
                                    fontSize: 16, color: Colors.white)),
                          ))),
                  SizedBox(
                    height: 20,
                  ),
                ],
              ))),
    ));
  }
}
