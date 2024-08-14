(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    9182: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects",
        function () {
          return i(6277);
        },
      ]);
    },
    2854: function (e, t, i) {
      "use strict";
      var a = i(5893);
      i(7294);
      var n = i(3245);
      let s = {
          initial: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: { delay: 0.5, staggerChildren: 0.08 },
          },
        },
        r = {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 1 } },
        };
      t.Z = (e) => {
        let { text: t, className: i = "" } = e;
        return (0, a.jsx)("div", {
          className:
            "w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0  ",
          children: (0, a.jsx)(n.E.h1, {
            className:
              "inline-block w-full text-dark font-bold capitalize text-8xl  dark:text-light\n      ".concat(
                i
              ),
            variants: s,
            initial: "initial",
            animate: "animate",
            children: t
              .split("")
              .map((e, t) =>
                (0, a.jsxs)(
                  n.E.span,
                  {
                    className: "inline-block",
                    variants: r,
                    children: [e, "\xa0"],
                  },
                  e + "-" + t
                )
              ),
          }),
        });
      };
    },
    6277: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return y;
          },
        });
      var a = i(5893),
        n = i(2854),
        s = i(8176),
        r = i(497),
        l = i(9008),
        o = i.n(l),
        c = i(5675),
        d = i.n(c),
        m = i(1664),
        g = i.n(m);
      i(7294);
      var h = {
          src: "/_next/static/media/My project (1).72ca0f3b.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAiklEQVR42mMAAiYgZuBwNJQzFFW/v1MuYD4QMwABIwMUsAAxAz8DQ054es7/isrJnxha5okBMYNL4zRGBgYhGWYgZtBhYDCVn7TiP8Op6z80rmwRB2IG6WP7mRgY+CSZgZhBVVTUic0v7L/i3NltQAy3Gs7QNbcyVWBgWATEDP+BmMGciZHBnIkBADYRIWGy7MBmAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        u = {
          src: "/_next/static/media/My project (2).6d1ed4ef.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAhklEQVR42mMQDk5hZAACnfxWvqyi0vlFrT11DMggwTuWBUQHuMc3Ty7P/F/WOeE/Q3KtNkjMJq2UiSHEzhuswM3ItaKmvOB/Vtfk/wx2YZEgMRmfOKCcvgsTAwiIekm6JSX/90hI+sug6a8LEuJzCITIpdS3g92hbuefL2sf6AJi89oFg8UAKLQiqxwyIioAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        x = {
          src: "/_next/static/media/My project (3).c300ebfb.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmUlEQVR42mMAgaZAe/Pe7va+svCgdAYWBs2qnJDWTB8/GyBmAIOWwvCuKV3VD/qnznWobK7431OT/r8iIc4LiBnAoLoow9SYgcFo2Yye1tmTu/5X5KYuOLliLicQMzBU1KUzAzFDbW1mTV9ZWlp/cVY+EDP0FBayAjEDQ2xTJSMQM+QUp1lmt0/kae+fC8IMs+fMZ5w9Zz4DAMpPPYef8gizAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        p = {
          src: "/_next/static/media/My project (6).e6307004.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42mMAgQWdtQoL2ir3bFgwrXflzAnNiye0b5xaXyYPxAxgMLWm0GVxR83/pf2tDzbOnbRtxYyJpzrL8zWBGKKgJj9bc3pn0555XQ1Lty2dM335koXbervb1IAYomDX3D6ZTXMnbl87oXXWmskd07YvmXW0MCJQCYghCqbVlyjOaK48srC/Y+Pcvo4dM/o6LiXGRmslxkYzAABqREiUWlTytQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        A = i(3245);
      let f = (0, A.E)(d()),
        b = (e) => {
          let { type: t, title: i, summary: n, img: r, link: l, github: o } = e;
          return (0, a.jsxs)("article", {
            className:
              "w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-3xl xs:p-4 ",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light  rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] ",
              }),
              (0, a.jsx)(g(), {
                href: l,
                target: "_blank",
                className:
                  "w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full",
                children: (0, a.jsx)(f, {
                  src: r,
                  alt: i,
                  className: "w-full h-auto",
                  whileHover: { scale: 1.05 },
                  transition: { duration: 0.2 },
                  priority: !0,
                  sizes:
                    "(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-primary font-medium text-xl dark:text-primaryDark xs:text-base lg:text-lg",
                    children: t,
                  }),
                  (0, a.jsx)(g(), {
                    href: l,
                    target: "_blank",
                    className: "hover:underline underline-offset-2",
                    children: (0, a.jsx)("h2", {
                      className:
                        "my-2 w-full text-left font-bold dark:text-light sm:text-sm",
                      style: { fontSize: "1.5rem" },
                      children: i,
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "my-2 font-medium text-dark dark:text-light sm:text-sm",
                    children: n,
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-2 flex items-center",
                    children: [
                      (0, a.jsxs)(g(), {
                        href: o,
                        target: "_blank",
                        className: "w-10",
                        children: [(0, a.jsx)(s.ET, {}), " "],
                      }),
                      (0, a.jsx)(g(), {
                        href: l,
                        target: "_blank",
                        className:
                          "ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark  sm:px-4 sm:text-base ",
                        children: "Visit Project ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        v = (e) => {
          let { title: t, type: i, img: n, link: r, github: l } = e;
          return (0, a.jsxs)("article", {
            className:
              "w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light xs:p-4",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] rounded-br-3xl",
              }),
              (0, a.jsx)(g(), {
                href: r,
                target: "_blank",
                className: "w-full cursor-pointer overflow-hidden rounded-lg",
                children: (0, a.jsx)(f, {
                  src: n,
                  alt: t,
                  className: "w-full h-auto",
                  whileHover: { scale: 1.05 },
                  transition: { duration: 0.2 },
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full flex flex-col items-start justify-between mt-4",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base",
                    children: i,
                  }),
                  (0, a.jsx)(g(), {
                    href: r,
                    target: "_blank",
                    className: "hover:underline underline-offset-2",
                    children: (0, a.jsx)("h2", {
                      className: "my-2 w-full text-left font-bold lg:text-2xl",
                      style: { fontSize: "1.25rem" },
                      children: t,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-full mt-2 flex items-center justify-between",
                    children: [
                      (0, a.jsx)(g(), {
                        href: r,
                        target: "_blank",
                        className:
                          "text-lg font-semibold underline md:text-base",
                        children: "Visit",
                      }),
                      (0, a.jsxs)(g(), {
                        href: l,
                        target: "_blank",
                        className: "w-8 md:w-6",
                        children: [(0, a.jsx)(s.ET, {}), " "],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var y = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(o(), {
              children: [
                (0, a.jsx)("title", {
                  children: "Renox Omache | Projects Page",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content: "Software Engineer",
                }),
              ],
            }),
            (0, a.jsx)("main", {
              className:
                "font-normal w-full mb-16 flex flex-col items-center justify-center dark:text-light",
              children: (0, a.jsxs)(r.Z, {
                className: "pt-12 font-normal items-center",
                children: [
                  (0, a.jsxs)("div", {
                    className: "text-container",
                    children: [
                      (0, a.jsx)(n.Z, {
                        text: "Imagination",
                        className:
                          "!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl",
                      }),
                      (0, a.jsx)(n.Z, {
                        text: "==",
                        className:
                          "!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl",
                      }),
                      (0, a.jsx)(n.Z, {
                        text: "Innovative projects!",
                        className:
                          "!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl",
                      }),
                      (0, a.jsx)("br", {}),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-span-12",
                        children: (0, a.jsx)(b, {
                          title: "AI Authenticator - Uniface",
                          img: h,
                          summary:
                            "Uniface is a groundbreaking facial recognition authentication solution that harnesses AI-driven deep learning algorithms and advanced computer  vision techniques, including Convolutional Neural Networks (CNNs) and feature extraction. Designed for seamless integration across various industries,  it offers low-latency processing, adaptability, and resistance against adversarial attacks. Its modular and extensible nature allows customization to  meet unique enterprise needs, while liveness detection mechanisms counteract spoofing attempts. By implementing Uniface, organizations can strengthen  security, optimize access management, and enhance user experience, positioning themselves as leaders in the digital transformation era.",
                          link: "https://github.com/Kevincxv/UniFace-AI-Authenticator/tree/main/UniFace",
                          github:
                            "https://github.com/Kevincxv/UniFace-AI-Authenticator/tree/main/UniFace",
                          type: "Featured Project",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-span-6 sm:col-span-12",
                        children: (0, a.jsx)(v, {
                          title: "AI Text to Image - Imagin AI",
                          img: u,
                          summary:
                            "The ImaginAI project is an avant-garde AI-driven endeavor that specializes in the generation of high-fidelity images based on textual prompts,  employing cutting-edge deep learning techniques and advanced generative adversarial networks (GANs). Utilizing a combination of transformer architectures  and conditioning mechanisms, ImaginAI's neural network efficiently translates complex semantic information from text prompts into intricate visual representations,  while maintaining coherence and context fidelity. The system incorporates state-of-the-art optimization algorithms, ensuring the generated images exhibit  photorealistic attributes and fine-grained details. Furthermore, ImaginAI's robust design enables the handling of diverse content domains, offering extensive  applicability across various industries. This groundbreaking technology paves the way for novel applications in visual storytelling, creative design, advertising, and content generation, empowering businesses to harness the full potential of AI-driven visual synthesis.",
                          link: "https://github.com/Kevincxv/AI-Image-Generator",
                          github:
                            "https://github.com/Kevincxv/AI-Image-Generator",
                          type: "Project",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-span-6 sm:col-span-12",
                        children: (0, a.jsx)(v, {
                          title: "Country Sorter - GeoSorter",
                          img: x,
                          summary:
                            "The GeoSorter project is a sophisticated AI-based endeavor that focuses on the efficient sorting and organization of countries using advanced  search algorithms and data-driven optimization techniques. By employing a combination of heuristics, machine learning models, and graph theory, GeoSorter's  innovative system analyzes a multitude of factors, including geographical proximity, political relationships, and socio-economic indicators, to generate an  optimized sorting sequence. The implementation of parallel computing and distributed processing methodologies further enhances the solution's computational  efficiency, allowing for real-time responsiveness and adaptability to evolving data. With its highly modular and extensible architecture, GeoSorter offers  seamless integration across various industries and applications, such as geopolitical analysis, international trade, logistics, and travel planning, enabling  organizations to harness the full potential of AI-driven geographical data management and optimization. ",
                          link: "https://github.com/Kevincxv/Country-Sorter",
                          github: "https://github.com/Kevincxv/Country-Sorter",
                          type: "Project",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-span-12",
                        children: (0, a.jsx)(b, {
                          title: "Emotion Detecting AI - FaceFlow",
                          img: p,
                          summary:
                            "The FaceFlow project is an innovative AI-driven initiative that specializes in facial recognition and muscle-based analysis, utilizing state-of-the-art  deep learning algorithms and advanced computer vision methodologies. By employing a combination of Convolutional Neural Networks (CNNs) and cutting-edge  electromyography (EMG) signal processing techniques, FaceFlow's robust system accurately discerns individuals based on their unique facial features and muscle  patterns. The integration of multi-modal data fusion and real-time sensor fusion technologies further enhances the solution's precision, allowing for  seamless detection even under diverse environmental conditions and varying facial expressions.",
                          link: "https://github.com/Kevincxv/AI-Emotions-Classifier",
                          github:
                            "https://github.com/Kevincxv/AI-Emotions-Classifier",
                          type: "Featured Project",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 9182));
    }),
      (_N_E = e.O());
  },
]);
