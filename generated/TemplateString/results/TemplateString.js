class TestClass {
  testMethod() {
    const str_val = "str";
    const num = 1337;
    const b = true;
    const result = `before ${str_val}, num: ${num}, true: ${b} after`;
    console.log(result);
    console.log(`before ${str_val}, num: ${num}, true: ${b} after`);
    
    const result2 = "before " + str_val + ", num: " + num + ", true: " + b + " after";
    console.log(result2);
  }
}

new TestClass().testMethod();