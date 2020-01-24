/* eslint-disable */
class Car {
    constructor(
        id,
        IP,
        port,
        initialX,
        initialY,
        destinyX,
        destinyY,
        messages
    ) {
        this.id = id;
        this.IP = IP;
        this.port = port;
        this.initialX = initialX;
        this.initialY = initialY;
        this.destinyX = destinyX;
        this.destinyY = destinyY;
        this.messages = messages; 
    }
}

export default Car;