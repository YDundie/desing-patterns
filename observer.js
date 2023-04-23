class Channels {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  addSubscriber(sub) {
    this.subscribers.push(sub);
  }

  notifySubscribers(event) {
    for (let sub of this.subscribers) {
      sub.sendNotification(this.name, event);
    }
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  sendNotification(channelName, event) {
    console.log(
      `${this.name} received notification from ${channelName} about ${event}`
    );
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  subscribeTo(channel) {
    channel.subscribe(this);
  }
}

const dunder = new Channels("DunderCsGo");

dunder.addSubscriber(new Subscriber("John"));
dunder.addSubscriber(new Subscriber("Luke"));
dunder.addSubscriber(new Subscriber("Mike"));

dunder.notifySubscribers("1V5 Clutch");
