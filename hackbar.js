class Button {
  constructor(Text, Key, Callback, Interval) {
    try {
      if(typeof Text === "string") {
        this.btntxt = Text;
      } else { throw 1; }
      if(typeof Key === "number") {
        this.key = Key;
      } else { throw 2; }
      if(typeof Callback === "function") {
        this.callback = Callback;
      } else { throw 3; }
      if(typeof Interval === "number") {
        this.interval = Interval;
      } else { throw 4; }
    } 
    catch(e) {
      console.error(e)
    }
      finally {
        // Buttons code here.
      }
  }
}
