// Multiple components can have a shared point of thruth
class ApplicationState {
  static instance = undefined;

  constructor() {
    this.isLoggedIn = false;
  }

  static getAppState() {
    if (!ApplicationState.instance) {
      ApplicationState.instance = new ApplicationState();
    }
    return ApplicationState.instance;
  }
}

const appState1 = ApplicationState.getAppState();
console.log(appState1.isLoggedIn); // false

const appState2 = ApplicationState.getAppState();
appState1.isLoggedIn = true;
console.log(appState2.isLoggedIn); // true
console.log(appState1.isLoggedIn); // true
