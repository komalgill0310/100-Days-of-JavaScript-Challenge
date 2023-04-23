// Breakdown:
// 1. Create a variable called numOfItemsMatched = 0
// 2. Use a for loop to loop over the items array
// ===> 1. for each item, deconstruct the item
// =========> [type, color, name] = [item[0],item[1],item[2]]
// =======> 1. Switch(ruleKey)
// ============> 1. ruleKey is type
// =================> type === ruleValue
// =================> numOfItemsMatched++
// ============> 2. ruleKey is color
// =================> color === ruleValue
// =================> numOfItemsMatched++
// ============> 3. ruleKey is name
// =================> name === ruleValue
// =================> numOfItemsMatched++
// 3. return numOfItemsMatched

var countMatches = function (items, ruleKey, ruleValue) {
  let numOfItemsMatched = 0;
  for (const item of items) {
    const [type, color, name] = [item[0], item[1], item[2]];
    switch (ruleKey) {
      case "type":
        if (type === ruleValue) {
          numOfItemsMatched++;
        }
        break;
      case "color":
        if (color === ruleValue) {
          numOfItemsMatched++;
        }
        break;
      case "name":
        if (name === ruleValue) {
          numOfItemsMatched++;
        }
        break;
      default:
        break;
    }
  }
  return numOfItemsMatched;
};

// Problem link: https://leetcode.com/problems/count-items-matching-a-rule/
