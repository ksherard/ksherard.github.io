/**
 * Created by sherard on 2/23/19.
 */


const test = "teeeest";

returnTime = () => {
  var d = new Date();
  var n = d.getTime();
  console.log("n type", typeof(n));
  return n;
};

console.log("TIME = ", returnTime());
