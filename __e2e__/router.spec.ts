import test from "@playwright/test";

test.describe("Router tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Counters test", () => {
    test("Main page", ({ page }) => {
      test.expect(page.getByRole("link", { name: "Tasks" })).toBeVisible();
    });

    test("Counters page", async ({ page }) => {
      await page.getByRole("link", { name: "Counters" }).click();
      await test.expect(page.getByTestId("counters")).toHaveText("Counter: 0");
      await page.getByRole("button", { name: "Increment" }).click();
      await test.expect(page.getByTestId("counters")).toHaveText("Counter: 1");
    });
  });

  test.describe("Tasks test", () => {
    // TODO create tests for tasks page (with local storage)
  });
});
