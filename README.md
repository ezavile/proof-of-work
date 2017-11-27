# proof-of-work

### Getting started

#### Install
```
npm install
```

#### Run
```
node index
```

### Inputs

Input Name | Datatype | Example        | Description
---------- | -------- | -------------- | --------
message    | String   | Hello, world!  | The message to do the proof of work on
difficulty | Integer  | 3 (recommended) | The difficulty (number of zeros that the resulting hash must have)

### Outputs

Output Name | Datatype | Example
----------- | -------- | -------
PoW hash    | String [hex] | 0004b5ec0e58569b916cd0e55b1253e2da19e8cf4d291108f8146c0ad5bd3810
nonce      | Number   | 4174
Time spent  | Number [seconds] | 0.022134

## Example

```bash
$ message to hash: Hello, world!
$ difficulty (3 recommended): 3
Finished after: 33.453ms
PoW Hash: 0004b5ec0e58569b916cd0e55b1253e2da19e8cf4d291108f8146c0ad5bd3810
Nonce used: 4174
```
