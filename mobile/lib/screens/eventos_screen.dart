import 'package:engenharia_software/screens/evento_screen.dart';
import 'package:engenharia_software/screens/meus_ingressos.dart';
import 'package:engenharia_software/util/ApiService.dart';
import 'package:engenharia_software/util/Utils.dart';
import 'package:flutter/material.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
import 'package:transparent_image/transparent_image.dart';
import 'package:outline_material_icons/outline_material_icons.dart';
import 'login.dart';

class EventosScreen extends StatelessWidget {
  List<dynamic> nextEvents = [
    {
      'nome': 'Tim Maia',
      'dia': '28/07/2020',
      'valor': 'R\$ 236,00',
      'url':
          'https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/23380384_1744018342307293_6946139308632143091_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=GCJhGMYv8wQAX-Vx0JI&_nc_ht=scontent.fpfb1-1.fna&oh=7894e88aac91060224896dc939f104e8&oe=5F129CA2'
    },
    {
      'nome': 'Tim Maia',
      'dia': '28/07/2020',
      'valor': 'R\$ 236,00',
      'url':
          'https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/22894330_1727852533923874_4998799622482225082_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=UU5aX2W2bcMAX_IDdcq&_nc_ht=scontent.fpfb1-1.fna&oh=c59eca2accfe4f0afbe52261148761f8&oe=5F110D47'
    },
    {
      'nome': 'Tim Maia',
      'dia': '28/07/2020',
      'valor': 'R\$ 236,00',
      'url':
          'https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/12106857_995094203866381_8284497927723513183_n.jpg?_nc_cat=106&_nc_sid=ba80b0&_nc_ohc=-mgKRl24U4gAX9AHlZn&_nc_ht=scontent.fpfb1-1.fna&oh=86e560336d7b892abd1084cf5b5aff2c&oe=5F122991'
    },
    {
      'nome': 'Tim Maia',
      'dia': '28/07/2020',
      'valor': 'R\$ 236,00',
      'url':
          'https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/10407620_941855915856877_6173767395939562187_n.jpg?_nc_cat=110&_nc_sid=ba80b0&_nc_ohc=MTs85gYVaKwAX_e0Xut&_nc_ht=scontent.fpfb1-1.fna&oh=36e51026890307574ed17d3f266c7dca&oe=5F126005'
    },
    {
      'nome': 'Tim Maia',
      'dia': '28/07/2020',
      'valor': 'R\$ 236,00',
      'url':
          'https://scontent.fpfb1-1.fna.fbcdn.net/v/t1.0-9/11667407_939686432740492_8513928119157416309_n.jpg?_nc_cat=108&_nc_sid=ba80b0&_nc_ohc=gRRaXsrApLEAX8LuzGV&_nc_ht=scontent.fpfb1-1.fna&oh=d3e80d6d79f60278630fea8697f26e07&oe=5F0FBB3E'
    },
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Color.fromRGBO(15, 15, 15, 1),
          
          title: Text(
            "Próximo eventos",
            style: TextStyle(color: Colors.white, fontSize: 22),
            textAlign: TextAlign.start,
          ),
          leading: IconButton(icon: Icon(OMIcons.receipt, color: Colors.white,), onPressed: (){
            Navigator.push(context, MaterialPageRoute(builder: (context)=>MeusIngressos()));
          },),
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
        body: FutureBuilder(
          future: getEventos(),
          builder: (context, AsyncSnapshot<dynamic> snapshot) {
            if (!snapshot.hasData) {
              return Center(child: CircularProgressIndicator());
            } else {
              return Column(
                children: <Widget>[
                  Container(
                      padding: EdgeInsets.all(10),
                      height: MediaQuery.of(context).size.height - 80,
                      child: ListView.separated(
                          itemBuilder: (context, index) {
                            return GestureDetector(
                              onTap: () {
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => EventoScreen({
                                              'url': nextEvents.elementAt(index)['url'],
                                              'nome': snapshot.data.elementAt(
                                                  index)['nome_evento'],
                                              'dia': snapshot.data
                                                  .elementAt(
                                                      index)['hora_inicio']
                                                  .toString()
                                                  .split('T')
                                                  .elementAt(0),
                                              'valor': nextEvents
                                                  .elementAt(index)['valor'],
                                              'descricao': snapshot.data
                                                  .elementAt(
                                                      index)['descricao_evento']
                                            })));
                              },
                              child: Container(
                                decoration: Utils.getBorderRadius(),
                                child: Column(
                                  children: <Widget>[
                                    Stack(
                                      children: <Widget>[
                                        Container(
                                            padding: EdgeInsets.all(0),
                                            decoration: Utils.getBorderRadius(),
                                            child: FadeInImage.memoryNetwork(
                                              alignment: Alignment.topCenter,
                                              placeholder: kTransparentImage,
                                              image: nextEvents
                                                  .elementAt(index)['url'],
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
                                                snapshot.data.elementAt(
                                                    index)['nome_evento'],
                                                style: TextStyle(fontSize: 16),
                                              ),
                                            ))
                                      ],
                                    ),
                                    Container(
                                      padding: EdgeInsets.only(
                                          left: 15,
                                          right: 15,
                                          bottom: 15,
                                          top: 10),
                                      decoration: Utils.getBorderRadius(),
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: <Widget>[
                                          Text(
                                            "Data: " +
                                                snapshot.data
                                                    .elementAt(
                                                        index)['hora_inicio']
                                                    .toString()
                                                    .split('T')
                                                    .elementAt(0),
                                            style: TextStyle(
                                                fontWeight: FontWeight.w500,
                                                fontSize: 16),
                                          ),
                                          Text(
                                            "Valor: " +
                                                nextEvents
                                                    .elementAt(index)['valor'],
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
              );
            }
          },
        ));
  }

  Future<dynamic> getEventos() async {
    dynamic result = await ApiService().get("eventos");

    return result;
  }
}
