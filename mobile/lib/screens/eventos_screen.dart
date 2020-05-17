import 'package:engenharia_software/screens/evento_screen.dart';
import 'package:flutter/material.dart';

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
      appBar: null,
      backgroundColor: Color.fromRGBO(15, 15, 15, 1),
      body: Column(
        children: <Widget>[
          SizedBox(
            height: 45,
          ),
          Text(
            "Próximo eventos",
            style: TextStyle(color: Colors.white, fontSize: 28),
            textAlign: TextAlign.start,
          ),
          Container(
              padding: EdgeInsets.all(15),
              height: MediaQuery.of(context).size.height - 80,
              child: ListView.separated(
                  itemBuilder: (context, index) {
                    return GestureDetector(
                      onTap: () {
                        Navigator.push(context, MaterialPageRoute(
                          builder: (context)=>EventoScreen(nextEvents.elementAt(index))
                        ));
                      },
                      child: Container(
                          decoration: getBorderRadius(),
                          child: Column(
                            children: <Widget>[
                              Stack(
                                children: <Widget>[
                                  Container(
                                      decoration: getBorderRadius(),
                                      child: Image.network(
                                          'https://admin.eventos365.com.br/upload/event/8761/thumbnail_img.png')),
                                  Positioned(
                                      top: 15,
                                      left: 15,
                                      child: Container(
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 10, vertical: 5),
                                        decoration: getBorderRadius(
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
                                decoration: getBorderRadius(),
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

  BoxDecoration getBorderRadius({Color color = Colors.white}) {
    return new BoxDecoration(
        color: color,
        borderRadius: new BorderRadius.all(const Radius.circular(5.0)));
  }
}
