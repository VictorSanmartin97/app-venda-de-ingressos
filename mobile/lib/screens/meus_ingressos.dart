import 'package:engenharia_software/util/ApiService.dart';
import 'package:flutter/material.dart';

class MeusIngressos extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: ApiService().get("ingressos"),
        builder: (context, AsyncSnapshot<dynamic> snapshot) {
          if (snapshot.connectionState.index == ConnectionState.none.index ||
              snapshot.connectionState.index == ConnectionState.waiting.index) {
            return Center(child: CircularProgressIndicator());
          } else {
            return Scaffold(
                appBar: AppBar(
                  iconTheme: IconThemeData(color: Colors.white),
                  elevation: 0,
                  backgroundColor: Color.fromRGBO(15, 15, 15, 1),
                  title: Text(
                    "Meus Ingressos",
                    style: TextStyle(color: Colors.white, fontSize: 22),
                    textAlign: TextAlign.start,
                  ),
                  centerTitle: true,
                ),
                backgroundColor: Color.fromRGBO(15, 15, 15, 1),
                body: Container(
                  padding: EdgeInsets.all(10),
                  height: MediaQuery.of(context).size.height - 80,
                  child: ListView.separated(
                      itemCount: snapshot.data.length,
                      separatorBuilder: (context, index) {
                        return SizedBox(
                          height: 35,
                        );
                      },
                      itemBuilder: (context, index) {
                        return Column(
                          children: <Widget>[
                            Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                Text(
                                    "${snapshot.data.elementAt(index)['nome_ingresso']} - ${snapshot.data.elementAt(index)['setor_ingresso']}",
                                    textAlign: TextAlign.center,
                                    maxLines: 3,
                                    softWrap: true,
                                    style: TextStyle(
                                        color: Colors.white, fontSize: 18)),
                                SizedBox(
                                  width: 10,
                                ),
                                Text(
                                    "Valor R\$: ${snapshot.data.elementAt(index)['valor_ingresso']}",
                                    style: TextStyle(
                                        color: Colors.green, fontSize: 18))
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Image.asset(
                              'assets/frame.png',
                              height: 200,
                            ),
                          ],
                        );
                      }),
                ));
          }
        });
  }
}
