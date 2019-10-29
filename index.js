// (function($) {
// 	"use strict";

// 	//1.Hide Loading Box (Preloader)
// 	function handlePreloader() {
// 		if ($(".preloader").length) {
// 			$(".preloader")
// 				.delay(200)
// 				.fadeOut(500);
// 		}
// 	}

// 	//6.Scroll to a Specific Div
// 	if ($(".scroll-to-target").length) {
// 		$(".scroll-to-target").click("click", function() {
// 			var target = $(this).attr("data-target");
// 			// animate
// 			$("html, body").animate(
// 				{
// 					scrollTop: $(target).offset().top
// 				},
// 				1000
// 			);
// 		});
// 	}

// 	// FancyBox Video
// 	$("[data-fancybox]").fancybox({
// 		youtube: {
// 			controls: 0,
// 			showinfo: 0
// 		},
// 		vimeo: {
// 			color: "f00"
// 		}
// 	});

// 	/* ========================When document is loaded, do===================== */
// 	$(window).on("load", function() {
// 		// add your functions
// 		(function($) {
// 			handlePreloader();
// 			datepicker();
// 		})(jQuery);
// 	});
// })(window.jQuery);

const TEMPLATE2 = $(function() {
	let article_grid = $("#article-grid");
	$.getJSON("https://mystic-api-test.herokuapp.com/articles", function(items) {
		$.getJSON(
			"https://mystic-api-test.herokuapp.com/random_art?count=51",
			function(random_imgs) {
				for (let i = 0; i < items.length; i++) {
					let new_item = `
      <a class="card" href="${items[i].url}">
        <div class="image art-height">
          <img src="${random_imgs[i]}" />
        </div>
        <div class="content">
          <div class="header">${items[i].title}</div>
          <div class="description">${
						items[i].description ? items[i].description : " "
					}</div>
        </div>
        <div class="extra content">
          <span class="right floated">
            ${moment
							.duration(moment(items[i].date).diff(new moment()))
							.humanize()} ago
            </span>
          <span>
            ${items[i].site_name}
          </span>
        </div>
      </div>`;
					article_grid.append($(new_item));
				}
			}
		);
	});
});

const TEMPLATE3 = $(function() {
	let video_grid = $("#video-grid");
	$.getJSON("https://mystic-api-test.herokuapp.com/videos", function(items) {
		let new_video = `<div class="container">
       <div class="row no-gutters">
          <div class="col-md-6 col-xs-12 col-lg-4"><div class="ui special cards">
  <div class="card">
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui inverted button">Add Friend</div>
          </div>
        </div>
      </div>
      <img src="${items.items[0].snippet.thumbnails.high.url}">
    </div>
    <div class="content">
      <a class="header">${items.items[0].snippet.title}</a>
      <div class="meta">
        <span class="date">${moment
					.duration(
						moment(items.items[0].snippet.publishedAt).diff(new moment())
					)
					.humanize()} ago</span>
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class=""></i>
       ${items.items[0].snippet.channelTitle}
      </a>
    </div>
    
  </div>
  
  </div>
  </div>
  
  `;
		video_grid.append($(new_video));
	});
});

// const TEMPLATE3 = $(function() {
// 	let video_grid = $("#video-grid");
// 	$.getJSON("https://mystic-api-test.herokuapp.com/videos", function(items) {
// 		let new_video = `<div class="container">
//         <div class="row no-gutters">
//             <div class="col-md-6 col-xs-12 col-lg-4">
//                 <div class="featured-slider mr-md-3 mr-lg-3">
//                     <div class="item" style="background-image:url(${
// 											items.items[0].snippet.thumbnails.high.url
// 										})">
//                         <div class="post-content">
//                             <a href="${"https://www.youtube.com/embed/" +
// 															items.items[0].snippet
// 																.resourceId}" class="post-cat bg-primary">${
// 			items.items[0].snippet.channelTitle
// 		}</a>
//                             <h2 class="slider-post-title">
//                                 <a href="single-post.html">${
// 																	items.items[0].snippet.title
// 																}</a>
//                             </h2>
//                             <div class="post-meta mt-2">
//                                 <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${moment
// 																	.duration(
// 																		moment(
// 																			items.items[0].snippet.publishedAt
// 																		).diff(new moment())
// 																	)
// 																	.humanize()} ago</span>
//                                 <span class="post-author">

//                                     <a href="author.html">By Pleasant Kenobi</a>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-6 col-xs-12 col-lg-4">
//                  <div class="featured-slider mr-lg-3">
//                     <div class="item" style="background-image:url(${
// 											items.items[1].snippet.thumbnails.high.url
// 										})">
//                         <div class="post-content">
//                             <a href="${
// 															items.items[1].url
// 														}" class="post-cat bg-danger">${
// 			items.items[1].snippet.channelTitle
// 		}</a>
//                             <h2 class="slider-post-title">
//                                 <a href="single-post.html">${
// 																	items.items[1].snippet.title
// 																}</a>
//                             </h2>
//                             <div class="post-meta mt-2">
//                                 <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${moment
// 																	.duration(
// 																		moment(
// 																			items.items[1].snippet.publishedAt
// 																		).diff(new moment())
// 																	)
// 																	.humanize()}</span>
//                                 <span class="post-author">
//                                     <a href="author.html">By SaffronOlive</a>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-12 col-xs-12 col-sm-12 col-lg-4">
//                 <div class="row mt-3 mt-lg-0">
//                     <div class="col-lg-12 col-xs-12 col-sm-6 col-md-6">
//                         <div class="post-featured-style" style="background-image:url(${
// 													items.items[2].snippet.thumbnails.high.url
// 												})">
//                             <div class="post-content">
//                                 <a href="${
// 																	items.items[2].url
// 																}" class="post-cat bg-success">${
// 			items.items[2].snippet.channelTitle
// 		}</a>
//                                 <h2 class="post-title">
//                                     <a href="single-post.html">${
// 																			items.items[2].snippet.title
// 																		}</a>
//                                 </h2>
//                                 <div class="post-meta mt-2">
//                                     <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${moment
// 																			.duration(
// 																				moment(
// 																					items.items[2].snippet.publishedAt
// 																				).diff(new moment())
// 																			)
// 																			.humanize()}</span>
//                                     <span class="post-author">
//                                         <a href="author.html">By Luis Scott Vargass</a>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-12 col-xs-12 col-sm-6 col-md-6">
//                         <div class="post-featured-style" style="background-image:url(${
// 													items.items[3].snippet.thumbnails.high.url
// 												})">
//                             <div class="post-content">
//                                 <a href="${
// 																	items.items[3].url
// 																}" class="post-cat bg-info">${
// 			items.items[3].snippet.channelTitle
// 		}</a>
//                                 <h2 class="post-title">
//                                     <a href="single-post.html">${
// 																			items.items[3].snippet.title
// 																		}</a>
//                                 </h2>
//                                 <div class="post-meta mt-2">
//                                     <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${moment
// 																			.duration(
// 																				moment(
// 																					items.items[3].snippet.publishedAt
// 																				).diff(new moment())
// 																			)
// 																			.humanize()}</span>
//                                     <span class="post-author">
//                                         <a href="author.html">By Paulo Ditor Dalmo Darosa</a>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>  `;
// 		video_grid.append($(new_video));
// 	});
// });

// <div class="col-md-12 col-xs-12 col-sm-12 col-lg-4">
//     <div class="row mt-3 mt-lg-0">
//       <div class="col-lg-12 col-xs-12 col-sm-6 col-md-6">
//         <div class="post-featured-style" style="background-image:url(images/news/news-02.jpg)">
//           <div class="post-content">
//             <a href="#" class="post-cat bg-success">Channel Fireball</a>
//             <h2 class="post-title">
//               <a href="single-post.html">Vintage Cube with LSV</a>
//             </h2>
//             <div class="post-meta mt-2">
//               <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>19 hours ago</span>
//               <span class="post-author">
//                 <a href="author.html">By Luis Scott Vargass</a>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="col-lg-12 col-xs-12 col-sm-6 col-md-6">
//         <div class="post-featured-style" style="background-image:url(images/news/news-04.jpg)">
//           <div class="post-content">
//             <a href="#" class="post-cat bg-info">Star City Games</a>
//             <h2 class="post-title">
//               <a href="single-post.html">Commander 2019 Deck Reviews</a>
//             </h2>
//             <div class="post-meta mt-2">
//               <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>19 hours ago</span>
//               <span class="post-author">
//                 <a href="author.html">By Paulo Ditor Dalmo Darosa</a>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

// const TEMPLATE2 = $(function () {
//   let article_grid = $("#article-grid");
//   $.getJSON("https://mystic-api-test.herokuapp.com/articles", function (items) {
//     $.getJSON(
//       "https://mystic-api-test.herokuapp.com/random_art?count=51",
//       function (random_imgs) {
//         for (let i = 0; i < items.length; i++) {
//           let new_item = `
//       <a class="card" href="${items[i].url}">
//         <div class="image art-height">
//           <img src="${
//             items[i].image_url ? items[i].image_url : random_imgs[i]
//             }" />
//         </div>
//         <div class="content">
//           <div class="header">${items[i].title}</div>
//           <div class="description">${items[i].description}</div>
//         </div>
//         <div class="extra content">
//           <span class="right floated">
//             ${moment
//               .duration(moment(items[i].date).diff(new moment()))
//               .humanize()} ago
//             </span>
//           <span>
//             ${items[i].site_name}
//           </span>
//         </div>
//       </div>`;
//           article_grid.append($(new_item));
//         }
//       }
//     );
//   });
// });

// let ap = document.getElementById("app");

// let state = { items: [], page: 0 };

// function updateArticles() {
// 	m.request({
// 		method: "GET",
// 		url: `https://mystic-api-test.herokuapp.com/articles?page=${state.page}`
// 	}).then(function(new_items) {
// 		// prettier-ignore
// 		state.items = new_items.map(i =>
//         m("a", {class: "card", href: i.url}, [
//           m("div", { class: "image" }, m("img", { src: i.image_url? i.image_url : random_imgs(i)})),
//           m("div", {class: "content"},
//             m("div", {class: "header"}, i.title),
//             m("div", {class: "description" }, i.description)
//           ),
//           m("div", {class: "extra content"},
//             m("span", {class: "right floated"},
//               moment.duration(moment(i.date).diff(new moment())).humanize() +
//                 " ago"
//             ),
//             m("span", "" + i.site_name)
//           )
//         ])
//       );
// 	});
// }

// var Articles = {
// 	oninit: updateArticles,
// 	view: function() {
// 		// prettier-ignore
// 		return [
//       m("div", { class: "ui link three cards" }, state.items),
//        m("div", { class: "ui section divider" }),
//       m("div", {class: "ui center aligned container"}, [
//         m("button", {
//           class: "ui button",
//           onclick: function() {
//             state.page = Math.max(state.page - 1, 0);
//             updateArticles();
//           }
//         }, "Prev"),
//         m("button", {
//           class: "ui button",
//           onclick: () => {
//             state.page = 0;
//             updateArticles();
//           }
//         }, `Page ${state.page + 1}`),
//         m("button", {
//           class: "ui button",
//           onclick: function() {
//             state.page++;
//             updateArticles();
//           }
//         }, "Next")
//       ]),

//     ];
// 	}
// };

// m.mount(app, Articles);

// function random_imgs(i) {
// 	m.request({
// 		method: "GET",
// 		url: "https://mystic-api-test.herokuapp.com/random_art?count=51"
// 	}).then(function(new_items) {
// 		// for (let i = 0; i < new_items.length; i++) {
// 		// 	return new_items[i];
// 		// }
// 		return new_items[0];
// 		// return new_items[i];
// 	});
// }

// $.getJSON(
// 			"https://mystic-api-test.herokuapp.com/random_art?count=51",
// 			function(random_imgs) {
// 				for (let i = 0; i < items.length; i++) {
// 					let new_item = `
//         <a class="card" href="${items[i].url}">
//           <div class="image art-height">
//             <img src="${
// 							items[i].image_url ? items[i].image_url : random_imgs[i]
// 						}" />
//           </div>
//            <div class="content">
// //             <div class="header">${items[i].title}</div>
// //           </div>
// //           <div class="extra content">
// //             <span class="right floated">
// //               ${moment
// 								.duration(moment(items[i].date).diff(new moment()))
// 								.humanize()} ago
//               </span>
//             <span>
//               ${items[i].site_name}
//             </span>
//           </div>
//         </div >`;
// 					article_grid.push($(new_item));
// 					console.log([i]);
// 				}
// 			}
// 		);
