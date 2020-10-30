import { images } from "./images";

const {
  product1,
  product2,
  product5,
  product4,
  product7,
  product6,
  product3,
  product8,
  look,
  product9,
  product10,
  product12,
  product11,
  one,
  two,
  three,
  four,
  five,
  breakfast,
  breakfast2,
  breakfast3,
  portfolio,
  clock,
  star,
  like,
  diamond,
  arc,
  phone,
  joy,
  plane,
  magicwand,
  bucket,
} = images;

export const store = {
  app: {
    productImg: [
      {
        id: 0,
        style: product1,
        src: look,
      },
      {
        id: 1,
        style: product2,
        src: look,
      },
      {
        id: 2,
        style: product5,
        src: look,
      },
      {
        id: 3,
        style: product4,
        src: look,
      },
      {
        id: 4,
        style: product7,
        src: look,
      },
      {
        id: 5,
        style: product6,
        src: look,
      },
      {
        id: 6,
        style: product3,
        src: look,
      },
      {
        id: 7,
        style: product8,
        src: look,
      },
    ],

    brandsImg: [
      {
        id: 0,
        src: one,
        alt: "not found",
      },
      {
        id: 1,
        src: two,
        alt: "not found",
      },
      {
        id: 2,
        src: three,
        alt: "not found",
      },
      {
        id: 3,
        src: four,
        alt: "not found",
      },
      {
        id: 4,
        src: five,
        alt: "not found",
      },
    ],

    content: [
      {
        id: 0,
        description:
          "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.",
        author: "Michael Hopkins",
      },
      {
        id: 1,
        description:
          "It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.Outstanding job and exceeded all expectations.",
        author: "Paddy Considine",
      },
      {
        id: 2,
        description:
          "Exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.Outstanding job.",
        author: "Matt smith",
      },
    ],

    servicesItem: [
      {
        id: 0,
        src: diamond,
        title: "ui / ux design",
        description: "Be set fourth land god darkness make it wherein own",
      },
      {
        id: 1,
        src: arc,
        title: "web development",
        description: "A she'd them bring void moving third she'd kind fill",
      },
      {
        id: 2,
        src: phone,
        title: "app / mobile",
        description: "Dominion man second spirit he, earth they're creeping",
      },
      {
        id: 3,
        src: joy,
        title: "game design",
        description: "Morning his saying moveth it multiply appear life be",
      },
      {
        id: 4,
        src: plane,
        title: "SEO / marketing",
        description: "Give won't after land fill creeping meat you, may",
      },
      {
        id: 5,
        src: star,
        title: "photography",
        description: "Creepeth one seas cattle grass give moving saw give",
      },
      {
        id: 6,
        src: magicwand,
        title: "graphic design",
        description: "Open, great whales air rule for, fourth life whales",
      },
      {
        id: 7,
        src: bucket,
        title: "illustrations",
        description: "Whales likeness hath, man kind for them air two won't",
      },
    ],

    skillsList: [
      {
        name: "UI/UX Design",
        progress: 75,
        type: "design",
        id: 0,
      },
      {
        name: "Web development",
        progress: 90,
        type: "web",
        id: 1,
      },
      {
        name: "Marketing",
        progress: 65,
        type: "marketing",
        id: 2,
      },
    ],
  },

  home: {
    productImg: [
      {
        id: 0,
        style: product1,
        src: look,
      },
      {
        id: 1,
        style: product2,
        src: look,
      },
      {
        id: 2,
        style: product5,
        src: look,
      },
      {
        id: 3,
        style: product4,
        src: look,
      },
      {
        id: 4,
        style: product7,
        src: look,
      },
      {
        id: 5,
        style: product6,
        src: look,
      },
      {
        id: 6,
        style: product3,
        src: look,
      },
      {
        id: 7,
        style: product8,
        src: look,
      },
      {
        id: 8,
        style: product9,
        src: look,
      },
      {
        id: 9,
        style: product10,
        src: look,
      },
      {
        id: 10,
        style: product12,
        src: look,
      },
      {
        id: 11,
        style: product11,
        src: look,
      },
    ],
  },

  contact: {
    infoLeft: [
      {
        id: 0,
        title: "Contact Info:",
        description:
          "To give give beginning divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subdue. Life days creature upon first heaven gathering dry. ",
        address: "10111 Santa Monica Boulevard, LA",
        phone: "+44 987 065 908",
        email: "info@Example.com",
      },
    ],
  },

  footer: {
    footerMenu: [
      {
        id: 0,
        list: [
          {
            id: 0,
            url: "#",
            name: "Projects",
          },
          {
            id: 1,
            url: "#",
            name: "About",
          },
          {
            id: 2,
            url: "#",
            name: "Services",
          },
          {
            id: 3,
            url: "#",
            name: "Carreer",
          },
        ],
      },
      {
        id: 1,
        list: [
          {
            id: 0,
            url: "#",
            name: "News",
          },
          {
            id: 1,
            url: "#",
            name: "Events",
          },
          {
            id: 2,
            url: "#",
            name: "Contact",
          },
          {
            id: 3,
            url: "#",
            name: "Legals",
          },
        ],
      },
      {
        id: 2,
        list: [
          {
            id: 0,
            url: "#",
            name: "Facebook",
          },
          {
            id: 1,
            url: "#",
            name: "Twitter",
          },
          {
            id: 2,
            url: "#",
            name: "Instagram",
          },
          {
            id: 3,
            url: "#",
            name: "Dribbble",
          },
        ],
      },
    ],
  },

  header: {
    listItems: [
      {
        id: 0,
        name: "home",
        url: "home",
      },
      {
        id: 1,
        name: "about",
        url: "about",
      },
      {
        id: 2,
        name: "services",
        url: "services",
      },
      {
        id: 3,
        name: "contact",
        url: "contact",
      },
    ],
  },

  services: {
    info: [
      {
        id: 0,
        background: breakfast,
        title: "Light Breakfast",
        description: [
          "Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Light his can't a creeping. Be, bring blessed night. Sixth the male. Upon their multiply. Kind beast. Him tree upon.",
          "Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.",
        ],
        client: "Emma Morris",
        date: "25.06.2019",
        share: "Facebook, Twitter, Pinterest",
      },
      {
        id: 1,
        background: breakfast2,
        title: "Light Breakfast",
        description: [
          "Light his can't a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon.",
          "Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.",
        ],
        client: "Olivia Wilde",
        date: "30.06.2019",
        share: "Twitter, Facebook, Pinterest",
      },
      {
        id: 2,
        background: breakfast3,
        title: "Light Breakfast",
        description: [
          "Be, bring blessed night. Light his can't a creeping. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon. ",
          "Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.",
        ],
        client: "Katie Holmes",
        date: "02.07.2019",
        share: "Facebook, Twitter, Pinterest",
      },
    ],
  },

  progess: {
    progressItem: [
      {
        id: 0,
        src: portfolio,
        number: 548,
        title: "projects completed",
      },
      {
        id: 1,
        src: clock,
        number: 1465,
        title: "WORKING HOURS",
      },
      {
        id: 2,
        src: star,
        number: 612,
        title: "POSITIVE FEEDBACKS",
      },
      {
        id: 3,
        src: like,
        number: 735,
        title: "HAPPY CLIENTS",
      },
    ],
  },
};
