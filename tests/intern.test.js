const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getName", () => {
    it("should return a name of the Intern", () => {

        const result = new Intern().getName();

      expect(result).toEqual(new Intern().name);
    });
  });

  describe("getId", () => {
    it("should return the id of the Intern", () => {

      const result = new Intern().getId();

      expect(result).toEqual(new Intern().id);
    });

  });

  describe("getEmail", () => {
    it("should return the email of the Intern", () => {

        const result = new Intern().getEmail();
  
        expect(result).toEqual(new Intern().email);
    });

  });

  describe("getRole", () => {

    it("should return 'Intern'", () => {

        const result = new Intern().getRole();
  
        expect(result).toEqual("Intern");
    });
  });

  describe("getSchool", () => {

    it("should return School", () => {

      const result = new Intern().getSchool();
  
        expect(result).toEqual(new Intern().school);

    });

  });

});
