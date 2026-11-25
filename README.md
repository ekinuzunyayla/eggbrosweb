# eggbrosweb

Eggbros Together'ın web sitesi (GitHub Pages, `main` / kök): https://ekinuzunyayla.github.io/eggbrosweb/

- `index.html` – tanıtım sayfası (EN + TR)
- `privacy/` – gizlilik politikası. Bu adres oyunda (`PlatformServices.PRIVACY_POLICY_URL`), Play Console, App Store Connect ve AdMob'da kayıtlı; taşıma. `#delete` Play'in veri silme bağlantısıdır.
- `terms/` – kullanım koşulları
- `assets/` – stil (`site.css`), dil seçimi (`lang.js`: `?lang=tr|en`, sonra tarayıcı dili), fontlar (Luckiest Guy Apache 2.0, Nunito OFL) ve görseller (oyunun kendi görselleri ve ekran görüntüleri)

Her iki dil aynı sayfadadır: metinler `<span lang="en">` / `<span lang="tr">` çiftleridir, betik olmadan İngilizce görünür.
Yerelde bakmak için: `python3 -m http.server 8765` ve http://localhost:8765/
