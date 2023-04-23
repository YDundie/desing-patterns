class UsbCable{
    constructor(){
        this.isPlugged = false;
    }

    plugIn(){
        this.isPlugged = true;
    }

    plugOut(){
        this.isPlugged = false;
    }
}

class UsbPort{
    constructor(){
        this.isAvailable = true;
    }

    plug(usbCable){
        if(this.isAvailable){
            usbCable.plugIn();
            this.isAvailable = false;
        }
    }
}

class MicroUsbCable{
    constructor(){
        this.isPlugged = false;
    }

    plugInMicroUsb(){
        this.isPlugged = true;
    }

    plugOutMicroUsb(){
        this.isPlugged = false;
    }
}

class MicroToUsbAdapter extends UsbCable{
    constructor(microUsbCable){
        super();
        this.microUsbCable = microUsbCable;
        this.microUsbCable.plugInMicroUsb();
    }

 
}

const usbCable = new UsbCable();
const usbPort = new UsbPort();
usbPort.plug(usbCable);

const usbPort2 = new UsbPort();
const microToUsbAdapter = new MicroToUsbAdapter(new MicroUsbCable());
usbPort2.plug(microToUsbAdapter);

