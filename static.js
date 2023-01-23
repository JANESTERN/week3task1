class Engine{
    static engineA = "This is Engine A";
    static engineB(){
        return "The Engine is a core part in a car";
    }
    static {
        console.log("Engines are important");
    }
}
console.log(Engine.engineA);
console.log(Engine.engineB());