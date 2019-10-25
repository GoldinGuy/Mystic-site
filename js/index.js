let ap = document.getElementById("app");

let state = { items: [], page: 0 };

function updateArticles() {
	m.request({
		method: "GET",
		url: `https://mystic-api-test.herokuapp.com/articles?page=${state.page}`
	}).then(function(new_items) {
		// prettier-ignore
		state.items = new_items.map(i =>
			m("a", { class: "card", href: i.url }, [
				m("div", { class: "image" }, m("img", { src: i.image_url })),
				m("div", { class: "content" },
					m("div", { class: "header" }, i.title),
					m("div", { class: "description" }, i.description)
				),
				m("div", { class: "extra content" },
					m("span", { class: "right floated" },
						moment.duration(moment(i.date).diff(new moment())).humanize() +
						" ago"
					),
					m("span", "From " + i.site_name)
				)
			])
		);
	});
}

var Articles = {
	oninit: updateArticles,
	view: function() {
		// prettier-ignore
		return [
			m("div", { class: "ui center aligned container" }, [
				m("button", {
					class: "ui button",
					onclick: function () {
						state.page = Math.max(state.page - 1, 0);
						updateArticles();
					}
				}, "Prev"),
				m("button", {
					class: "ui button",
					onclick: () => {
						state.page = 0;
						updateArticles();
					}
				}, `Page ${state.page + 1}`),
				m("button", {
					class: "ui button",
					onclick: function () {
						state.page++;
						updateArticles();
					}
				}, "Next")
			]),
			m("div", { class: "ui section divider" }),
			m("div", { class: "ui link three cards" }, state.items)
		];
	}
};

m.mount(app, Articles);

// const TEMPLATE = $(function() {
// 	let article_grid = $("#article-grid");

// 	$.getJSON("https://mystic-api-test.herokuapp.com/articles", function(items) {
// 		$.getJSON(
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
//           <div class="content">
//             <div class="header">${items[i].title}</div>
//           </div>
//           <div class="extra content">
//             <span class="right floated">
//               ${moment
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
// 	});
// });

// const TEMPLATE = $(function() {
// 	let article_grid = $("#article-grid");

// 	$.getJSON("https://mystic-api-test.herokuapp.com/articles", function(items) {
// 		for (item of items) {
// 			let new_item = `
// <a class="card" href="${item.url}">
//   <div class="image art-height">
//     <img src="${item.image_url ? item.image_url : alt_img_url()} " />
//   </div >
//   <div class="content">
//     <div class="header">${item.title}</div>
//   </div>
//   <div class="extra content">
//     <span class="right floated">
//       ${moment.duration(moment(item.date).diff(new moment())).humanize()} ago
//       </span>
//     <span>
//       ${item.site_name}
//     </span>
//   </div>
// </div >`;
// 			article_grid.append($(new_item));
// 		}
// 	});
// });

// function getRandomArt(count) {
// 	return Promise.all(
// 		Array(count)
// 			.fill("https://api.scryfall.com/cards/random")
// 			.map($.getJSON)
// 	).then(data => data.map(c => c.image_uris.art_crop));
// }
