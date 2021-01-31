import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: 'Shopping List',
    home: MyShoppingList(),
  ));
}

class MyShoppingList extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return ShoppingListState();
  }
}

class ShoppingListState extends State<MyShoppingList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        title: Text('Shopping Cart'),
      ),
      body: Center(
        child: Text('hello'),
      ),
    );
  }
}
