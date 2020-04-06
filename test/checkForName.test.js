const checkForName = require('../src/client/js/nameChecker');

test("checkForName 'input: Found' ", () => {
    expect(checkForName("Picard")).toBe("Welcome, Captain!");
  });

  test("checkForName 'input: Not Found' ", () => {
    expect(checkForName("David")).toBe("I can't find you.");
  });