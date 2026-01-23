// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Sorry :( This page is NOT finished yet! I&#39;ll try to update it asap.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-misc",
          title: "Misc",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "news-i-have-completed-my-research-internship-at-nyu-shanghai",
          title: 'I have completed my research internship at NYU Shanghai!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-01.html";
            },},{id: "news-i-received-the-china-national-scholarship-for-the-second-time-recognizing-top-0-2-nationwide-academic-performance-and-leadership",
          title: 'I received the China National Scholarship for the second time, recognizing top 0.2%...',
          description: "",
          section: "News",},{id: "news-i-have-completed-my-b-eng-degree-at-sun-yat-sen-university",
          title: 'I have completed my B.Eng. degree at Sun Yat-sen University. 🎓',
          description: "",
          section: "News",},{id: "news-i-will-begin-my-graduate-studies-in-cse-at-gerogia-tech-this-fall-go-jackets",
          title: 'I will begin my graduate studies in CSE at Gerogia Tech this fall....',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
