export default {
  items: [
    // {
    //   title: true,
    //   name: "Public & Participant",
    //   wrapper: {
    //     element: "",
    //     attributes: {}
    //   },
    //   class: "text-center"
    // },
    {
      name: "About Us",
      url: "/About Us",
      icon: "icon-home"
    },
    {
      name: "Activity",
      url: "/Activity",
      icon: "icon-game-controller"
    },
    {
      name: "Gallery",
      url: "/Gallery",
      icon: "icon-picture",
      children: [
        {
          name: "Photo",
          url: "/Gallery/Photo",
          icon: "icon-picture"
        },
        {
          name: "Video Gallery",
          url: "/Gallery/Video",
          icon: "icon-film"
        }
      ]
    },
    // {
    //   name: "Archive",
    //   url: "/Archive",
    //   icon: " icon-notebook",
    //   children: [
    //     {
    //       name: "Handcrafts",
    //       url: "/Archive/Handcrafts",
    //       icon: "icon-puzzle "
    //     },
    //     {
    //       name: "Tools",
    //       url: "/Archive/Tool",
    //       icon: "icon-wrench"
    //     }
    //   ]
    // },

    {
      name: "Kerchang's Scanner",
      url: "/Kerchang Scanner",
      icon: "icon-camera"
    },
    {
      name: "Contact",
      url: "/Contact",
      icon: "icon-people"
    },
    // {
    //   name: "Inquiries",
    //   url: "/Inquiries",
    //   icon: "icon-pencil"
    // },
    // {
    //   name: "Test",
    //   url: "/Test",
    //   icon: "icon-pencil"
    // },
    {
      name: "Facebook",
      url: "https://www.facebook.com/JungleSchoolGombak/",
      icon: "icon-paper-plane",
      class: "mt-auto",
      variant: "Info ",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jungleschoolgombak/?hl=en",
      icon: "icon-paper-plane",
      variant: "Info ",
      attributes: { target: "_blank", rel: "noopener" }
    }
  ]
};
