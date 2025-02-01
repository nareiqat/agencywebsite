import check from "../assets/svgs/check.svg";
import cross from "../assets/svgs/cross.svg";

export const pricing = {
  title: "Pricing Plans",
  topper: "Pricing",
  description:
    "We offer pricing plans from monthly services to lump sum. Lump sum plans include a down payment before the project is started!",
  plans: [
    {
      planName: "Lump Sum",
      features: [
        { text: "Design and Development", icon: check },
        { text: "$20/mo hosting", icon: check },
        { text: "$50/page after 5", icon: check },
        { text: "$200 for blog", icon: check },
        { text: "Unlimited Edits", icon: cross },
      ],
      price: "$2000",
      additional: "$20/mo hosting",
      cta: {
        text: "Get Started",
        link: "/contact",
      },
    },
    {
      planName: "Monthly",
      features: [
        { text: "Design and Development", icon: check },
        { text: "Hosting Included", icon: check },
        { text: "$50/page after 5", icon: check },
        { text: "Unlimited Edits", icon: check },
        { text: "Unlimited Designs", icon: check },
      ],
      price: "$150",
      additional: "/Month",
      cta: {
        text: "Get Started",
        link: "/contact",
      },
    },
    {
      planName: "Ecommerce",
      features: [
        { text: "Custom Shopify site", icon: check },
        { text: "Mobile Friendly", icon: check },
        { text: "Scalable and fully configured", icon: check },
        { text: "Fully Integrated", icon: check },
        { text: "Editable with CMS", icon: check },
      ],
      price: "Custom",
      additional: "starting $4500",
      cta: {
        text: "Get Started",
        link: "/contact",
      },
    },
  ],
};
