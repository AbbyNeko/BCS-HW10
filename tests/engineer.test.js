const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should return a name of the Engineer", () => {

        const result = new Engineer().getName();

      expect(result).toEqual(new Engineer().name);
    });
  });

  describe("getId", () => {
    it("should return the id of the Engineer", () => {

      const result = new Engineer().getId();

      expect(result).toEqual(new Engineer().id);
    });

  });

  describe("getEmail", () => {
    it("should return the email of the Engineer", () => {

        const result = new Engineer().getEmail();
  
        expect(result).toEqual(new Engineer().email);
    });

  });

  describe("getRole", () => {

    it("should return 'Engineer'", () => {

        const result = new Engineer().getRole();
  
        expect(result).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {

    it("should return Github username", () => {

        const result = new Engineer().getGithub();

        expect(result).toEqual(new Engineer().github);

    });

  });

});
