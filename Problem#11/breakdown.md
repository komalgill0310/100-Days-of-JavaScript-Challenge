Given:

- array of names of superheores and superheroines
- Return an array which excludes superheroines and only has superheores names which ends with "man"

**Breakdown**

_Without Regex_

1. Use array.filter method
   - parameter: array's item
2. Conditions in Filter
   - (item!=any of the given super-heroines's name)&&item.endsWith("man")
3. Filter method will return an array which satisfies the condition
