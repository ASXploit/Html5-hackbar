window.onload = function () {
    
class Button {
  constructor(Text, Key, Callback, Toggle=false, Interval=500) {
    try {
      if(typeof Text === "string") { // Done
        this.btntxt = Text;
      } else { throw 1; }
      if(typeof Key === "number") {
        this.key = Key;
      } else { throw 2; }
      if(typeof Callback === "function") {
        this.callback = Callback;
      } else { throw 3; }
      if(typeof Toggle === "boolean") {
          this.toggle = Toggle;
      } else { throw 4; }
      if(typeof Interval === "number") {
        this.interval = Interval;
      } else { throw 5; }
    } 
    catch(e) {
      console.error(e)
    }
      finally {
        // Buttons code here.
        
        // Goals.. Enable Disable Hack, React to Keytouches, Change css class on touch/click.
        // Create global array if not created already too hold
        //     "Keys" So we can throw an error if 2 buttons have the same key set
        
        var enabled=false; // If our hack is enabled (For toggles)
        
        // Generate ID
        this.id="h-bar" + Math.floor(Math.random() * 20000);
        
        // Check if our ID Matches any others on our hackbar. If so , Regenerate.
        for(let i=0;i<document.getElementById("btn-ctr").childNodes.length;i++) {
            if(this.id === document.getElementById("btn-ctr").childNodes[i].id) {
                this.id="h-bar" + Math.floor(Math.random() * 20000);
            } // If-con End
            
            
            console.log(document.getElementById("btn-ctr").childNodes[i].id);
        } // For-loop end
        
        // Check if global array is declared
        if(window.gKeys != undefined || window.gKeys != null) {
            for(let i=0;i<window.gKeys.length;i++) {
                if(this.key === window.gKeys[i]) {
                    console.error(`A Button key is a Duplicate`)
                }
            }
            window.gKeys.push[this.key]
        }
      } // Finally End
  } // constructor end
  
  
  
  appendTo($_0) {
     // Target The Menu
      let $_1 = document.getElementById($_0);
     // Create Button Element
      let $_2 = document.createElement("a");
      
      // Setting Button Attributes
      $_2.setAttribute("class", "menu-btn");
      $_2.setAttribute("id", this.id);
      $_2.textContent = this.btntxt;
      
      // Add Button to our Hackbar
      $_1.appendChild($_2);
  }
}

// Create an instance of our button.
let t_health = new Button("Toggle Health", 49, () => {
    console.log("Health is running!");
}, 0);
t_health.appendTo("btn-ctr");

let t_ammo = new Button("Toggle Ammo", 50, () => {
    console.log("Ammo is running!");
}, 0);
t_ammo.appendTo("btn-ctr");

//console.log(document.getElementById("btn-ctr").childNodes[3].text);
}




