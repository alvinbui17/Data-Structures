/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function (version1, version2) {
//   let v1 = 0;
//   let v2 = 0;

//   let i = 0;

//   while (i < version1.length || i < version2.length) {
//     if (version1[i] !== undefined) {
//       if (version1[i] !== "0" || version1[i] !== ".") {
//         console.log("ver[i]", version1[i], "v1", v1);
//         v1 = v1 * 10 + parseInt(version1[i]);
//       }
//     }

//     if (version2[i] !== undefined) {
//       if (version2[i] !== "0" || version2[i] !== ".") {
//         console.log("ver[i]", version2[i], "v2", v2);
//         v2 = v2 * 10 + parseInt(version2[i]);
//       }
//     }
//     i++;
//   }
// };
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  var v1Array = version1.split(".");
  var v2Array = version2.split(".");

  console.log(v1Array, v2Array);
  var length = Math.max(v1Array.length, v2Array.length);

  for (var i = 0; i < length; i++) {
    var num1 = parseInt(v1Array[i]) ? parseInt(v1Array[i]) : 0; // if out of index and num is NaN then assign 0
    var num2 = parseInt(v2Array[i]) ? parseInt(v2Array[i]) : 0;

    console.log(num1, num2);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

let version1 = "1.0",
  version2 = "1.0.0";

console.log(compareVersion(version1, version2));
