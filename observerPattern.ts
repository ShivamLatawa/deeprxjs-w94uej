function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
export function run() {
 
    var clickHandler = function(item) { 
        log.add("fired: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 
    log.show();
}



export class CustomObservable{
  subscriberList: Array<Function>;
  constructor() {
    this.subscriberList = [];
  }

  subscribe(callback: Function){
     this.subscriberList.push(callback);
  }
  
  next(value: any){
    this.subscriberList.forEach((callback: Function) => {
        callback(value);
    });
  }

  unsubscribe(fn) {
    this.subscriberList = this.subscriberList.filter(
            function(subscriber) {
                if (subscriber !== fn) {
                    return subscriber;
                }
            }
        );
  }
  
}