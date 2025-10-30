var checkSubarraySum = function(nums, k) {
	  let sum = 0;
	  let map = new Map();
	  map.set(0, -1);
	  
	  for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		
		if (map.has(sum % k)) {
		  if (i - map.get(sum % k) > 1) return true;
		} else {
		  map.set(sum % k, i);
		}
		
	  }
	  return false;
};

console.log(checkSubarraySum([23,2,4,6,7], 6));
console.log(checkSubarraySum([23,2,6,4,7], 6));
console.log(checkSubarraySum([23,2,6,4,7], 13));



var FreqStack = function() {
  this.freq = new Map();
  this.group = new Map();
  this.maxFreq = 0;
};

FreqStack.prototype.push = function(val) {
  const f = (this.freq.get(val) || 0) + 1;
  this.freq.set(val, f);
  this.maxFreq = Math.max(this.maxFreq, f);

  if (!this.group.has(f)) this.group.set(f, []);
  this.group.get(f).push(val);
};

FreqStack.prototype.pop = function() {
  const val = this.group.get(this.maxFreq).pop();
  this.freq.set(val, this.freq.get(val) - 1);
  
  if (this.group.get(this.maxFreq).length === 0) this.maxFreq--;
  
  return val;
};

let fs = new FreqStack();
fs.push(5);
fs.push(7);
fs.push(5);
fs.push(7);
fs.push(4);
fs.push(5);

console.log(fs.pop());
console.log(fs.pop());
console.log(fs.pop());
console.log(fs.pop());

