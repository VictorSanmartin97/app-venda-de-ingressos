import 'package:engenharia_software/screens/evento_screen.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';
import 'package:transparent_image/transparent_image.dart';
import 'package:outline_material_icons/outline_material_icons.dart';
import 'login.dart';

class EventosScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    List<dynamic> nextEvents = [
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
      {'nome': 'Tim Maia', 'dia': '28/07/2020', 'valor': 'R\$ 236,00'},
    ];

    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Color.fromRGBO(15, 15, 15, 1),
        title: Text(
          "Próximo eventos",
          style: TextStyle(color: Colors.white, fontSize: 22),
          textAlign: TextAlign.start,
        ),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
            icon: Icon(
              OMIcons.exitToApp,
              color: Colors.white,
            ),
            onPressed: () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(
                  builder: (context) => Login(),
                )),
          ),
        ],
      ),
      backgroundColor: Color.fromRGBO(15, 15, 15, 1),
      body: Column(
        children: <Widget>[
          Container(
              padding: EdgeInsets.all(25),
              height: MediaQuery.of(context).size.height - 80,
              child: ListView.separated(
                  itemBuilder: (context, index) {
                    return GestureDetector(
                      onTap: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) =>
                                    EventoScreen(nextEvents.elementAt(index))));
                      },
                      child: Container(
                        decoration: Utils.getBorderRadius(),
                        child: Column(
                          children: <Widget>[
                            Stack(
                              children: <Widget>[
                                Container(
                                    padding: EdgeInsets.all(0),
                                    height: 200,
                                    decoration: Utils.getBorderRadius(),
                                    child: FadeInImage.memoryNetwork(
                                      alignment: Alignment.topCenter,
                                      height: 200,
                                      placeholder: kTransparentImage,
                                      image:
                                          'https://admin.eventos365.com.br/upload/event/8761/thumbnail_img.png',
                                    )),
                                Positioned(
                                    top: 15,
                                    left: 15,
                                    child: Container(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 10, vertical: 5),
                                      decoration: Utils.getBorderRadius(
                                          color: Color.fromRGBO(
                                              255, 255, 255, 0.8)),
                                      child: Text(
                                        nextEvents.elementAt(index)['nome'],
                                        style: TextStyle(fontSize: 16),
                                      ),
                                    ))
                              ],
                            ),
                            Container(
                              padding: EdgeInsets.all(15),
                              decoration: Utils.getBorderRadius(),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: <Widget>[
                                  Text(
                                    "Data: " +
                                        nextEvents.elementAt(index)['dia'],
                                    style: TextStyle(
                                        fontWeight: FontWeight.w500,
                                        fontSize: 16),
                                  ),
                                  Text(
                                    "Valor: " +
                                        nextEvents.elementAt(index)['valor'],
                                    style: TextStyle(
                                        fontWeight: FontWeight.w500,
                                        fontSize: 16,
                                        color: Colors.green),
                                  )
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                    );
                  },
                  separatorBuilder: (context, index) {
                    return SizedBox(
                      height: 20,
                    );
                  },
                  itemCount: nextEvents.length)),
        ],
      ),
    );
  }
}
