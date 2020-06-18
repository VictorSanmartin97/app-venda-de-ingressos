import 'package:engenharia_software/util/ApiService.dart';
import 'package:flutter/material.dart';

class MeusIngressos extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: ApiService().get("eventos"),
        builder: (context, AsyncSnapshot<dynamic> snapshot) {
          if (snapshot.connectionState.index == ConnectionState.none.index ||
              snapshot.connectionState.index == ConnectionState.waiting.index) {
            return Center(child: CircularProgressIndicator());
          } else {
            return Scaffold(
                appBar: AppBar(
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
                          height: 50,
                        );
                      },
                      itemBuilder: (context, index) {
                        return Column(
                          children: <Widget>[
                            Image.asset(
                              'assets/frame.png',
                              height: 200,
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                                "Show: ${snapshot.data.elementAt(index)['nome_evento']}", textAlign: TextAlign.center, style:TextStyle(color:Colors.white))
                          ],
                        );
                      }),
                ));
          }
        });
  }
}
