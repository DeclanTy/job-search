import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Boba Careers");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Boba Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
