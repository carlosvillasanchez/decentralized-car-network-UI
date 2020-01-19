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
        messagesTier1,
        messagesTier2,
        messagesTier3
    ) {
        this.id = id;
        this.IP = IP;
        this.port = port;
        this.initialX = initialX;
        this.initialY = initialY;
        this.destinyX = destinyX;
        this.destinyY = destinyY;
        this.messagesTier1 = messagesTier1;
        this.messagesTier2 = messagesTier2;
        this.messagesTier3 = messagesTier3;
    }
}

export default Car;