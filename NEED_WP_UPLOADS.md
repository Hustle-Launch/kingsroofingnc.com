# Need a WordPress uploads dump?

**Yes — for the job-photo gallery. Not for the product shots.**

Wayback still has the color picker, carport, and pole-truss images. Those are already in `public/images/`. Live `kingsroofingnc.com` is Cloudflare **526**, so we cannot pull `wp-content/uploads` from origin.

Dump `wp-content/uploads/` from the old host (or a backup) and drop the gallery files below into `public/images/` if you want the job photos back.

## Already restored from Wayback (do not re-dump)

Color pickers, panel diagrams, carports, pole truss, about slide, logos that were already local:

- `timberline-*.jpeg` and `timberline-large-*.jpeg`
- `bestbuymetal-picker-*.jpeg` (swatches)
- `tuff-rib-profile.gif`, `tuff-rib-metal-roofing-panel.gif`
- `r-panel-profile_0.gif`, `r-panel-panel-large.png`
- `5v-crimp-panel-profile.gif`, `5v-crimp-panel-metal-roofing.png`
- `corrugated-profile.jpeg`, `corrugated-roof-panel-large.png`
- `regular-carport-1024x576.jpeg`
- `boxed-eave-carport-1024x576.jpeg`
- `vertical-carport-1024x576.jpeg`
- `Pole-Truss-Enclosed-Kit-1024x576.jpeg`
- `metal-trusses-800x600.jpg`
- `slide4.jpeg`
- `Voted-Best.png`, `Only-Corwn.png`

## Still missing — job / gallery photos

Exact paths on the old WP origin (`https://www.kingsroofingnc.com/wp-content/uploads/`):

- `001.jpg` through `023.jpg` and their `-300x225.jpg` thumbs
- `007.jpeg`
- `20140228_113008_0.jpg` (+ `-300x225.jpg`)
- `20140228_153312_0.jpg` (+ `-300x225.jpg`)
- `20140403_154457_0.jpg` (+ `-300x225.jpg`)
- `ashville-roofing-contractors.jpeg` (typo filename on WP; Next already has `asheville-roofing-contractors.jpeg`)
- `bellevue-metal-roof_13.jpg` (+ `-300x225.jpg`)
- `bestbuymetal-picker-large-*.jpeg` (18 large metal swatches)
- `comercial5_0.jpg` (+ `-300x225.jpg`)
- `concordkitchenremodel.jpg` (+ `-300x199.jpg`)
- `copper-gutters1.jpg` (+ `-300x225.jpg`)
- `dsc01744.jpg` through `dsc01754.jpg` (+ `-300x225.jpg`)
- `file1-1.jpg` (+ `-300x200.jpg`)
- `file_0.jpg` (+ `-300x203.jpg`)
- `footermap-2.png`
- `GS2zPeYLo68_HiAKs8G-5OyFIOszZqaQw.jpeg`
- `img_0002.jpg` through `img_0030.jpg`
- `img_0055.jpg` through `img_0057.jpg`
- `img_0966.jpg`
- `img_3384_0.jpg`, `img_3387_0.jpg`
- `img_4450_0.jpg` through `img_4454_0.jpg`
- `img_8880.jpg`
- `kings_haywood_construction_pictures_047.jpg`
- `kings_haywood_construction_pictures_047_0.jpg`
- `kings_haywood_construction_pictures_050.jpg`
- `kings_haywood_construction_pictures_173.jpg`
- `kingshaywood-banner-large.jpeg`
- `regular-carport.jpeg` (full-size, 946561 bytes on Wayback)
- `Pole-Truss-Enclosed-Kit.jpeg` (full-size)
- `sany0010.jpg`

Wayback captured most of the `-300x225` thumbs on `20240814142054`. Full-size originals for several of those 403'd later (`001.jpg`, `017.jpg`, `dsc01752.jpg`, `img_0009.jpg`, `img_0012.jpg`, `img_4450_0.jpg`, `img_4454_0.jpg`, `sany0010.jpg`).
