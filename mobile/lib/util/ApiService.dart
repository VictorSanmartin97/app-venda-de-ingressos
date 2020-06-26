import 'package:dio/dio.dart';

class ApiService {
  final _baseUrl = "http://10.0.0.101:3333";

  Future<dynamic> get(endpoint) async {
    try {
      Response response = await Dio().get("$_baseUrl/$endpoint");

      return response.data;
    } catch (e) {
      print(e);
    }
  }
  Future<dynamic> post(endpoint, params) async {
    try {
      Response response = await Dio().post("$_baseUrl/$endpoint", data: params);
      
      return response.data;
    } catch (e) {
      print(e);
    }
  }
}
