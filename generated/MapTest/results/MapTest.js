class MapTestClass {
  mapTest() {
    const map_obj = {
      x: 5
    };
    //let containsX = "x" in mapObj;
    //delete mapObj["x"];
    map_obj["x"] = 3;
    return map_obj["x"];
  }
}

new TestClass().testMethod();