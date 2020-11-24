import 'package:flutter/material.dart';

void main() {
  // in this we have widgets inside widgets we form a widget tree in flutter
  /*
  runApp(
    MaterialApp(
      home: Center(
        child: Text("Hello World"),
      ),
    ),
  );*/
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('I am Rich Bitch'),
          backgroundColor: Colors.blueAccent,
        ),
      backgroundColor: Colors.blueGrey,
      body: Center(
        child:Image(
       //fetching images from url image: NetworkImage('https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg'),
       //fetching image from asset
       image:AssetImage('images/diamond.png'),
      ),
      ),
      ),
    ),
  );
}
