function basic() {
    return `basic`;
  }
//Q1
 const basic1 = () => {return `basic`}
 
 

  function withParams(protocol, web, tld) {
    return 'withParams'
  }
//Q1.1
 const withParams1 = (protocol, web, tld) => {return 'withParams'}

 ////////////////////
//Q2

 function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }


  const checker1 = zName => {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }

console.log(checker1("Ahmed")("Available")(5000))