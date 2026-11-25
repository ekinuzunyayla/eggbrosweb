// Language: ?lang=tr|en wins, then the visitor's last choice, then the browser's language. English by default.
(function () {
	var root = document.documentElement;
	var param = new URLSearchParams(location.search).get("lang");
	var saved = null;
	try { saved = localStorage.getItem("lang"); } catch (e) {}
	var browser = (navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
	var lang = param === "tr" || param === "en" ? param : saved || browser;
	function apply(l) {
		root.setAttribute("data-lang", l);
		root.setAttribute("lang", l);
		var t = document.querySelector('meta[name="title-' + l + '"]');
		if (t) document.title = t.content;
	}
	// Legal pages keep one section per language; links like #delete land on the shown language's twin
	// (both carry the same data-anchor; the English one also holds the id, so links work without script).
	function jumpToAnchor() {
		var name = decodeURIComponent(location.hash.slice(1));
		if (!name) return;
		var target = document.querySelector('.doc[lang="' + lang + '"] [data-anchor="' + name + '"]');
		if (target && target.offsetParent !== null) target.scrollIntoView();
	}
	apply(lang);
	document.addEventListener("DOMContentLoaded", function () {
		apply(lang);
		jumpToAnchor();
		window.addEventListener("hashchange", jumpToAnchor);
		var buttons = document.querySelectorAll("[data-lang-toggle]");
		buttons.forEach(function (b) {
			b.addEventListener("click", function () {
				lang = lang === "tr" ? "en" : "tr";
				try { localStorage.setItem("lang", lang); } catch (e) {}
				apply(lang);
			});
		});
	});
})();
