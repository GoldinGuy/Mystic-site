const TEMPLATE = $(function() {
	let article_grid = $("#article-grid");

	$.getJSON("https://mystic-api-test.herokuapp.com/articles", function(items) {
		let promises = items.map(item => {
			return new Promise(resolve => {
				if (item.image_url) {
					let new_item = `
<a class="card" href="${item.url}">
  <div class="image art-height">
    <img src="${item.image_url}" />
  </div >
  <div class="content">
    <div class="header">${item.title}</div>
  </div>
  <div class="extra content">
    <span class="right floated">
      ${moment.duration(moment(item.date).diff(new moment())).humanize()} ago
      </span>
    <span>
      ${item.site_name}
    </span>
  </div>
</div >`;
					resolve($(new_item));
				} else {
					$.getJSON("https://api.scryfall.com/cards/random").then(card => {
						let new_item = `
<a class="card" href="${item.url}">
  <div class="image art-height">
    <img src="${card.image_uris.art_crop} " />
  </div >
  <div class="content">
    <div class="header">${item.title}</div>
  </div>
  <div class="extra content">
    <span class="right floated">
      ${moment.duration(moment(item.date).diff(new moment())).humanize()} ago
      </span>
    <span>
      ${item.site_name}
    </span>
  </div>
</div >`;
						resolve($(new_item));
					});
				}
			});
		});

		Promise.all(promises).then(cards => article_grid.append(...cards));
	});
});

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

// function alt_img_url() {
// $.getJSON("https://api.scryfall.com/cards/random"),
// 	function(items) {
// 		for (item of items) {
// 			let art_crop = "${item.image_uris.art_crop}";
// 			return art_crop;
// 		}
// 	};
// }

/* <img src="${item.image_url ? item.image_url : alt_img_url()} " /> */

// item.img = card.art_crop;
// if (item.image_url != null || item.image_url == '') {
//   var url = item.image_url;
//   return url;
// } else {
//   this.noImageCycleCounter++;
//   if (this.noImageCycleCounter > this.noImageCycleMax) {
//     this.noImageCycleCounter = 1;
//   }
//   var urlA = this.imageBaseURL + 'grid/grid' + this.noImageCycleCounter + '.JPG';
//   item.image_url = urlA;
//   return urlA;

// var noImageCycleCounter = Math.floor(Math.random() * (94 - 1)) + 1;
// var urlA = this.imageBaseURL + "/grid/grid" + noImageCycleCounter + ".JPG";
// item.image_url = urlA;
// item.image_url = item.image_uris.art_crop;
// return urlA;

// const TEMPLATE = $(function() {
// 	let article_grid = $("#article-grid");

// 	$.getJSON("https://mystic-api-test.herokuapp.com/articles", function(items) {
// 		for (item of items) {
// 			let new_item = `
// <a class="card" href="${item.url}">
//   <div class="image art-height">
//     <img src="${item.image_url}" />
//   </div>
//   <div class="content">
//     <div class="header">${item.title}</div>
//   </div>
//   <div class="extra content">
//       <span class="right floated">
//       ${moment.duration(moment(item.date).diff(new moment())).humanize()} ago
//       </span>
//       <span>
//        ${item.site_name}
//       </span>
//     </div>
// </div>`;
// 			article_grid.append($(new_item));
// 		}
// 	});
// });
