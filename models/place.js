//this is a blueprint, so all the places data looks the same
//we define a blueprint with classes like this:
class Place{
  constructor(title, imageUri, address, location){
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //lat: , lng:
    this.id = new Date().toString() + Math.random().toString();//create a new id with Data and a random number transformed to string
  }
}