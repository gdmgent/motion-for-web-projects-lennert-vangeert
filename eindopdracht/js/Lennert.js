function lennertvg(fase) {
  console.log("lennertvg.js: fase = " + fase);
  let section = document.getElementById("lennertvg");

  if (!section.init) {
    section.init = true;
    //eigen animatie schrijven
    console.log("lennertvg.js: init");
    section.tl
      .add("deel1")
      .to(
        "#lennertvg .box",
        {
          backgroundColor: "white",
          left: "40vw",
          top: "calc(50vh - 10vw)",
          width: "20vw",
          height: "20vw",
        },
        "deel1"
      )
      .to(
        "#lennertvg .box",
        {
          backgroundColor: "#add8e6",
          left: "40vw",
          top: "calc(50vh - 10vw)",
          width: "20vw",
          height: "20vw",
        },
        "deel1"
      )
      .to(
        "#lennertvg .box",
        {
          width: "100vw",
          height: "100vh",
          left: "0",
          top: "0",
        },
        "deel1"
      )
      .to(
        ".cloud-1",
        {
          x: "25vw",
        },
        "deel1"
        )
        .to(
          ".part1",
          {
            x: "-5vw",
          },
          "deel1"
        )
      .add("deel2")
      .to(
        ".cloud-2",
        {
          x: "-25vw",
        },
        "deel2"
      )
      .to(
        ".cloud-3",
        {
          x: "4vw",
        },
        "deel3"
      )
      .to(
        ".wright",
        {
          x: "-39vw",
        },
        "deel2"
      )
      .to(
        ".part2",
        {
          x: "30vw",
        },
        "deel3"
      )
      .to(
        ".plane1",
        {
          x: "45vw",
          rotation: "0",
          delay: ".5",
        },
        "deel2"
      )
      .to(
        ".plane1",
        {
          y: "40vw",
          delay: ".5",
        },
        "deel2"
      )
      .to(
        ".plane1",
        {
          opacity: "0",
          delay: ".5",
        },
        "deel2"
      )

      .to(
        ".plane2",
        {
          x: "-120vw",
        },
        "deel2"
      )
      .to(
        ".plane3",
        {
          x: "120vw",
        },
        "deel2"
      )
      .add("deel3")
      .to(
        "#lennertvg .box .bg",
        {
          opacity: "1",
        },
        "deel3"
      )
      // .to(
      //   "#lennertvg .box",
      //   {
      //     backgroundColor: "black",
      //   },
      // )
      .to(
        ".part3",
        {
          x: "-50vw",
        },
        "deel3"
      )
      .to(
        "#lennertvg .big-rocket",
        {
          y: "-150vh",
        },
        "deel3"
      )
      .to(
        "#lennertvg .mars",
        {
          x: "-150vw",
          y: "18vh",
          rotation: "180deg",
        },
        "deel3"
      )
      .to(
        ".part4",
        {
          x: "20vw",
        },
        "deel4"
      )
      .to(
        ".satelite",
        {
          x: "120vw",
          y: "20vh",
        },
      )
      .add("deel4")
      .to("#lennertvg .moon", {
        x: "500vw",
        // delay: "1",
      }, "deel4")
      .to(
        "#lennertvg .rocket1",
        {
          opacity: 1,
          x: "20vw",
          y: "15vh",
          rotation: "-42",
          // delay: "1",
        },
        "deel4"
        )
        .to(
          ".part5",
          {
            x: "-45vw",
          },
          "deel4"
        )
        .add("deel5")
        .to("#lennertvg .moon", {
          opacity: "0",
        }, "deel5")
        .to("#lennertvg .box img", {
          opacity: "0",
        }, "deel5")
        



      .to("#lennertvg .box", {
        backgroundColor: "white",
        left: "40vw",
        top: "calc(50vh - 10vw)",
        width: "20vw",
        height: "20vw",
      }, "deel5")
      ;
  }
}
