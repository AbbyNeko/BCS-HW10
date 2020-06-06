const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return a name of the Employee", () => {

        const result = new Employee().getName();

      expect(result).toEqual(new Employee().name);
    });
  });

  describe("getId", () => {
    it("should return the id of the Employee", () => {

      const result = new Employee().getId();

      expect(result).toEqual(new Employee().id);
    });

  });

  describe("getEmail", () => {
    it("should return the email of the Employee", () => {

        const result = new Employee().getEmail();
  
        expect(result).toEqual(new Employee().email);
    });

  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {

        const result = new Employee().getRole();
  
        expect(result).toEqual("Employee");
    });
  });

});
