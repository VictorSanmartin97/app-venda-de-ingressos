import 'package:engenharia_software/screens/eventos_screen.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';

class Login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          backgroundColor: Color.fromRGBO(15, 15, 15, 1),
          body: Container(
            padding: EdgeInsets.all(30),
            child: Center(
                child: Column(
              mainAxisSize: MainAxisSize.max,
              children: <Widget>[
                Text(
                  "Compre seu Ingresso",
                  style: TextStyle(fontSize: 28, color: Colors.white),
                  textAlign: TextAlign.center,
                ),
                SizedBox(
                  height: 30,
                ),
                TextField(
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                      hintText: "CPF",
                      isDense: true,
                      fillColor: Color.fromRGBO(235, 235, 235, 1),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(5)),
                        borderSide: BorderSide(
                            color: Color.fromRGBO(235, 235, 235, 1),
                            width: 1.0),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(5)),
                        borderSide: BorderSide(
                            color: Color.fromRGBO(235, 235, 235, 1),
                            width: 1.0),
                      ),
                      filled: true,
                      border: OutlineInputBorder(
                          gapPadding: 1,
                          borderRadius: BorderRadius.all(Radius.circular(5)))),
                ),
                SizedBox(
                  height: 30,
                ),
                Container(
                    width: double.infinity,
                    decoration: Utils.getBorderRadius(
                        color: Color.fromRGBO(60, 29, 124, 1)),
                    child: FlatButton(
                      padding: EdgeInsets.all(5),
                      onPressed: () => Navigator.of(context).pushReplacement(
                          MaterialPageRoute(
                              builder: (context) => EventosScreen())),
                      child: Text("ENTRAR",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              fontSize: 24,
                              color: Colors.white,
                              fontWeight: FontWeight.bold)),
                    ))
              ],
            )),
          )),
    );
  }
}
