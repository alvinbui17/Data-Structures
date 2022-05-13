function subarraySum(arr, target) {
  let prefix = {};
  prefix[0] = 0;

  let cur_sum = 0;

  for (let [i, n] of arr.entries()) {
    cur_sum += n;

    let diff = cur_sum - target;

    if (prefix[diff]) {
      return [i, prefix[diff]];
    }

    if (prefix[cur_sum]) prefix[cur_sum]++;
    else prefix[cur_sum] = 1;
  }
  return res;
}
