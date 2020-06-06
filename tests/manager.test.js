const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should return a name of the Manager", () => {

        const result = new Manager().getName();

      expect(result).toEqual(new Manager().name);
    });
  });

  describe("getId", () => {
    it("should return the id of the Manager", () => {

      const result = new Manager().getId();

      expect(result).toEqual(new Manager().id);
    });

  });

  describe("getEmail", () => {
    it("should return the email of the Manager", () => {

        const result = new Manager().getEmail();
  
        expect(result).toEqual(new Manager().email);
    });

  });

  describe("getRole", () => {

    it("should return 'Manager'", () => {

        const result = new Manager().getRole();
  
        expect(result).toEqual("Manager");
    });
  });

});
