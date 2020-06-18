import 'package:engenharia_software/screens/eventos_screen.dart';
import 'package:engenharia_software/util/ApiService.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool loading = false;
  @override
  Widget build(BuildContext context) {
    final _loginController = TextEditingController();
    final _senhaController = TextEditingController();

    return SafeArea(
      child: Scaffold(
          backgroundColor: Colors.white,
          resizeToAvoidBottomInset: false,
          body: SingleChildScrollView(
              child: Align(
                  alignment: Alignment.center,
                  child: Container(
                    padding: EdgeInsets.all(30),
                    color: Colors.white,
                    child: Center(
                        child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: <Widget>[
                        Image.asset("assets/logo-preto.png"),
                        SizedBox(
                          height: 30,
                        ),
                        TextField(
                          controller: _loginController,
                          keyboardType: TextInputType.text,
                          decoration: InputDecoration(
                              hintText: "Login",
                              isDense: true,
                              fillColor: Color.fromRGBO(235, 235, 235, 1),
                              enabledBorder: OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(5)),
                                borderSide: BorderSide(
                                    color: Color.fromRGBO(235, 235, 235, 1),
                                    width: 1.0),
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(5)),
                                borderSide: BorderSide(
                                    color: Color.fromRGBO(235, 235, 235, 1),
                                    width: 1.0),
                              ),
                              filled: true,
                              border: OutlineInputBorder(
                                  gapPadding: 1,
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(5)))),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        TextField(
                          controller: _senhaController,
                          keyboardType: TextInputType.text,
                          obscureText: true,
                          decoration: InputDecoration(
                              hintText: "Senha",
                              isDense: true,
                              fillColor: Color.fromRGBO(235, 235, 235, 1),
                              enabledBorder: OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(5)),
                                borderSide: BorderSide(
                                    color: Color.fromRGBO(235, 235, 235, 1),
                                    width: 1.0),
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(5)),
                                borderSide: BorderSide(
                                    color: Color.fromRGBO(235, 235, 235, 1),
                                    width: 1.0),
                              ),
                              filled: true,
                              border: OutlineInputBorder(
                                  gapPadding: 1,
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(5)))),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        loading
                            ? CircularProgressIndicator()
                            : Container(
                                width: double.infinity,
                                decoration: Utils.getBorderRadius(
                                    color: Theme.of(context).primaryColor),
                                child: FlatButton(
                                  padding: EdgeInsets.all(5),
                                  onPressed: () async {
                                    if (_loginController.text != '' &&
                                        _senhaController.text != '') {
                                      setState(() {
                                        loading = true;
                                      });

                                      dynamic result = await new ApiService()
                                          .post("login", {
                                        'login': _loginController.text,
                                        'senha': _senhaController.text
                                      });


                                      setState(() {
                                        loading = false;
                                      });

                                      if (result['accessToken'] != null) {
                                        Navigator.of(context).pushReplacement(
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    EventosScreen()));
                                      }
                                    }
                                  },
                                  child: Text("ENTRAR",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                          fontSize: 24,
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold)),
                                ))
                      ],
                    )),
                  )))),
    );
  }
}
