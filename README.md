# This project will be the answer for an interview question

## Command line interface
The program must run from the command line with the following arguments
```
CalculateOrder Path_to_catalog Product1 Quantity_P1 <Product2 Quantity_P2> ...
```
## How to use
Install the dependencies
```
npm install
```
## Node Version: 10.6.0

Install the package
```
npm i -g
```

Execut in commandline
```
 CalculateOrder Catalog.txt P4 6 P10 5 P12 1
```

## Example
Given the input `Catalog.txt` file
```
P4,10,250.00
P10,5,175.00
P12,5,1000.00
```

```
$ CalculateOrder Catalog.txt P4 6 P10 5 P12 1
Total: 4151,25
```
