window.onload = function () {
    
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
  
  appendTo($_0) {
     // Target The Menu
      let $_1 = document.getElementById($_0);
     // Create Button Element
      let $_2 = document.createElement("a");
      
      // Setting Button Attributes
      $_2.setAttribute("class", "menu-btn");
      $_2.textContent = this.btntxt;
      
      $_1.appendChild($_2);
  }
}


let t_health = new Button("Healthy", 49, () => {
    
}, 0);


t_health.appendTo("btn-ctr");

}
