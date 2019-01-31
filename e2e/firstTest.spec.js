describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have all elements visible", async () => {
    await expect(element(by.id("title"))).toBeVisible();
    await expect(element(by.id("input"))).toBeVisible();
    await expect(element(by.id("button"))).toBeVisible();
  });

  it("should check for a palindrome", async () => {
    await element(by.id("input")).tap();
    await element(by.id("input")).typeText("Hello World");
    await element(by.id("button")).tap();
    if (device.getPlatform() === "ios") {
      await element(by.type("_UIAlertControllerActionView")).tap();
    }
  });
});
