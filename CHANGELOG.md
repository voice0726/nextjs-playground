# Changelog

## [1.0.8](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.7...nextjs-14-playground/v1.0.8) (2025-02-24)


### Continuous Integration

* Remove deploy environment for preview ([#136](https://github.com/voice0726/nextjs-playground/issues/136)) ([63ab4dc](https://github.com/voice0726/nextjs-playground/commit/63ab4dca81878db7fc5e2b1887d2f09702fd3bfa))

## [1.0.7](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.6...nextjs-14-playground/v1.0.7) (2025-02-24)


### Reverts

* Revert [#130](https://github.com/voice0726/nextjs-playground/issues/130) ([#131](https://github.com/voice0726/nextjs-playground/issues/131)) ([7086ecb](https://github.com/voice0726/nextjs-playground/commit/7086ecb4638e1cee72dd03fe2fed4a667c7e192d))
* Revert [#132](https://github.com/voice0726/nextjs-playground/issues/132) ([#134](https://github.com/voice0726/nextjs-playground/issues/134)) ([0500759](https://github.com/voice0726/nextjs-playground/commit/050075964799a3e477f50336703ceba5c2bc6982))


### Continuous Integration

* Add environment for release please ([#135](https://github.com/voice0726/nextjs-playground/issues/135)) ([4bc8f53](https://github.com/voice0726/nextjs-playground/commit/4bc8f538b367f573f9ab1f2f999e4294d3072769))
* Fix vercel secrets are not properly passed ([#128](https://github.com/voice0726/nextjs-playground/issues/128)) ([f536cc1](https://github.com/voice0726/nextjs-playground/commit/f536cc11a1608e5afba82c6621b1b4fa1058f2b0))
* Remove duplicated pnpm cache step ([#133](https://github.com/voice0726/nextjs-playground/issues/133)) ([cb32f8e](https://github.com/voice0726/nextjs-playground/commit/cb32f8ebc9bdbfc678dfaa5340d8f701a275c4c0))
* Remove unnecessary environment variable and job output ([#130](https://github.com/voice0726/nextjs-playground/issues/130)) ([a17d2c4](https://github.com/voice0726/nextjs-playground/commit/a17d2c4434a97064693c648d9cc7b10cf086e3c6))
* Rename environments and add environment for deploy production ([#132](https://github.com/voice0726/nextjs-playground/issues/132)) ([511e11e](https://github.com/voice0726/nextjs-playground/commit/511e11e04f96823224f009a45d706224847c2837))

## [1.0.6](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.5...nextjs-14-playground/v1.0.6) (2025-02-24)


### Continuous Integration

* Fix missing step id ([#126](https://github.com/voice0726/nextjs-playground/issues/126)) ([e707d93](https://github.com/voice0726/nextjs-playground/commit/e707d93dcbc3392f759d7b4d38b01ed8050700b7))

## [1.0.5](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.4...nextjs-14-playground/v1.0.5) (2025-02-24)


### Continuous Integration

* Fix missing job output ([#124](https://github.com/voice0726/nextjs-playground/issues/124)) ([2087ecb](https://github.com/voice0726/nextjs-playground/commit/2087ecb22e25fd4fa807074cff3db8cf4d1f4ade))

## [1.0.4](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.3...nextjs-14-playground/v1.0.4) (2025-02-24)


### Continuous Integration

* Add missing needs property ([#120](https://github.com/voice0726/nextjs-playground/issues/120)) ([58a8299](https://github.com/voice0726/nextjs-playground/commit/58a82994ea49195fc165a7205bad478e4496094f))
* Fix deploy action not working for preview ([#122](https://github.com/voice0726/nextjs-playground/issues/122)) ([1bbb259](https://github.com/voice0726/nextjs-playground/commit/1bbb2593fb068aad9da8c82acb3eb32143dc4028))
* Fix deploy to production not working ([#118](https://github.com/voice0726/nextjs-playground/issues/118)) ([8058c7f](https://github.com/voice0726/nextjs-playground/commit/8058c7fdfc45463663ef575fb76d32c3f0df6344))
* Refactor and reoranize github acitons ([#121](https://github.com/voice0726/nextjs-playground/issues/121)) ([335c428](https://github.com/voice0726/nextjs-playground/commit/335c4282eff20ce7132bed9487cc187ceea05590))
* Skip deploy preview when push to release-please branch ([#123](https://github.com/voice0726/nextjs-playground/issues/123)) ([233dd8f](https://github.com/voice0726/nextjs-playground/commit/233dd8f5747e948186c941646fbd93f5ae5bd51b))

## [1.0.3](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.2...nextjs-14-playground/v1.0.3) (2025-02-22)


### Bug Fixes

* **ci:** Fix typo ([#100](https://github.com/voice0726/nextjs-playground/issues/100)) ([fc8a443](https://github.com/voice0726/nextjs-playground/commit/fc8a44313a082a411703c04d4634462ac56a067e))
* **ci:** Wrong scope name ([#101](https://github.com/voice0726/nextjs-playground/issues/101)) ([8a43a69](https://github.com/voice0726/nextjs-playground/commit/8a43a69abc0245cfcc1196215d6af66eb432fbc7))
* Exclude favicon from auth required list and fix redirect path ([#93](https://github.com/voice0726/nextjs-playground/issues/93)) ([a91d00d](https://github.com/voice0726/nextjs-playground/commit/a91d00dda35cbe2bc0b254c171ed7286afd44455))
* Fix vercel scope name ([#97](https://github.com/voice0726/nextjs-playground/issues/97)) ([3656d79](https://github.com/voice0726/nextjs-playground/commit/3656d79f932d0d58b86457423d8b17676b1f8bd9))
* **mock:** Make mock run only when dev and test ([#90](https://github.com/voice0726/nextjs-playground/issues/90)) ([bd872ce](https://github.com/voice0726/nextjs-playground/commit/bd872cea989cd7d58707c39efcb5daf564be29f5))


### Reverts

* "ci: change release target branch ([#95](https://github.com/voice0726/nextjs-playground/issues/95))" ([2c6623b](https://github.com/voice0726/nextjs-playground/commit/2c6623b51681ace98e9d08bd13a039acf808889f))


### Continuous Integration

* Change release target branch ([#95](https://github.com/voice0726/nextjs-playground/issues/95)) ([ae6911a](https://github.com/voice0726/nextjs-playground/commit/ae6911a19570440cf5ebe740601cabf2323e4bdf))
* Do not check public/mockServiceWorker ([#91](https://github.com/voice0726/nextjs-playground/issues/91)) ([d32ea3a](https://github.com/voice0726/nextjs-playground/commit/d32ea3a85f31df675b56d946fb5b94bda882a5c9))
* Narrow down skip condition for preview ([#117](https://github.com/voice0726/nextjs-playground/issues/117)) ([0cda9fc](https://github.com/voice0726/nextjs-playground/commit/0cda9fc01a8fdff161806c03ff80813df8517e0b))
* Prevent deploy to staging from being triggered when release created ([#115](https://github.com/voice0726/nextjs-playground/issues/115)) ([ac56e7a](https://github.com/voice0726/nextjs-playground/commit/ac56e7ae7cc4cb15fb2550c9f45c4ce9d4936485))
* Prevent deploy-preview from being triggered by release-please branch ([#114](https://github.com/voice0726/nextjs-playground/issues/114)) ([0bfd4f1](https://github.com/voice0726/nextjs-playground/commit/0bfd4f17725d0dacc1677c1e0323d2b388067555))
* Refactor deploy workflows ([#110](https://github.com/voice0726/nextjs-playground/issues/110)) ([6384e9a](https://github.com/voice0726/nextjs-playground/commit/6384e9a7628876cba53f072b8e87e11d3ccfb21a))
* Skip deploy preview when files in src are not modified ([#116](https://github.com/voice0726/nextjs-playground/issues/116)) ([f11c0e4](https://github.com/voice0726/nextjs-playground/commit/f11c0e4e6ac2ff54d7413e26231dc923c5a42122))
* Use cache and refactor ([#102](https://github.com/voice0726/nextjs-playground/issues/102)) ([e8f544e](https://github.com/voice0726/nextjs-playground/commit/e8f544ee92dabe51275201035dc575c16f18a1ad))
* Use github action to deploy vercel ([#94](https://github.com/voice0726/nextjs-playground/issues/94)) ([21e77b1](https://github.com/voice0726/nextjs-playground/commit/21e77b17bb8b296b43e8ddf3d9b95481d65140fe))

## [1.0.2](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.1...nextjs-14-playground/v1.0.2) (2025-02-15)


### Reverts

* Revert "ci: add release-please.yml for release please bot ([#85](https://github.com/voice0726/nextjs-playground/issues/85))" ([#86](https://github.com/voice0726/nextjs-playground/issues/86)) ([ce7aacc](https://github.com/voice0726/nextjs-playground/commit/ce7aaccc6771f6fc1f5272e71b192e826e1f7614))
* Revert "ci: fix trigger of auto-approve and lint-pr ([#81](https://github.com/voice0726/nextjs-playground/issues/81))" ([#83](https://github.com/voice0726/nextjs-playground/issues/83)) ([573b0e4](https://github.com/voice0726/nextjs-playground/commit/573b0e4c2ec3a6482a1361af040069832684a0d5))


### Miscellaneous Chores

* **deps:** Update dependency by pnpm update ([#78](https://github.com/voice0726/nextjs-playground/issues/78)) ([353f954](https://github.com/voice0726/nextjs-playground/commit/353f95480238202a8687e80175eaf218cb94840c))


### Continuous Integration

* Add echo command to show detailed results of skip condition ([#88](https://github.com/voice0726/nextjs-playground/issues/88)) ([d61d53a](https://github.com/voice0726/nextjs-playground/commit/d61d53adbf1d1998784b33a25aed29a16e68f67c))
* Add missing checkout steps ([#82](https://github.com/voice0726/nextjs-playground/issues/82)) ([fc27446](https://github.com/voice0726/nextjs-playground/commit/fc27446dc17cbedc1783cb29d370c67e3b3830c8))
* Add release-please.yml for release please bot ([#85](https://github.com/voice0726/nextjs-playground/issues/85)) ([b85fad8](https://github.com/voice0726/nextjs-playground/commit/b85fad883a8cca21e2a9e3207cae904218cc3176))
* Conditionally skip check pr ([#84](https://github.com/voice0726/nextjs-playground/issues/84)) ([3f8d3a9](https://github.com/voice0726/nextjs-playground/commit/3f8d3a9099b91c8259da81ab61e2139ede00116e))
* Fix skip condition ([#89](https://github.com/voice0726/nextjs-playground/issues/89)) ([c98f6b1](https://github.com/voice0726/nextjs-playground/commit/c98f6b1ef21ad2c970cd34f9886f815c9d13d01d))
* Fix trigger of auto-approve and lint-pr ([#81](https://github.com/voice0726/nextjs-playground/issues/81)) ([39443a7](https://github.com/voice0726/nextjs-playground/commit/39443a7834a2bca6b3570a7b8a63af382a0ccd30))
* Replace github_token with app token ([#79](https://github.com/voice0726/nextjs-playground/issues/79)) ([3d6b719](https://github.com/voice0726/nextjs-playground/commit/3d6b719a95f35ff70b578c74c2a9bb2a8b22520f))
* Use app token for release please ([#87](https://github.com/voice0726/nextjs-playground/issues/87)) ([785ee17](https://github.com/voice0726/nextjs-playground/commit/785ee171e21dce5ffbcc33b196734b9598105d43))

## [1.0.1](https://github.com/voice0726/nextjs-playground/compare/nextjs-14-playground/v1.0.0...nextjs-14-playground/v1.0.1) (2025-02-15)


### Continuous Integration

* Fix workflow ([#75](https://github.com/voice0726/nextjs-playground/issues/75)) ([59fad06](https://github.com/voice0726/nextjs-playground/commit/59fad06e6ff00dd79e3bab0086dcde9cfde52d56))
* Refactor github workflows ([#73](https://github.com/voice0726/nextjs-playground/issues/73)) ([f9979ad](https://github.com/voice0726/nextjs-playground/commit/f9979adbcfda22ad69dbd11ecd1246ed891eb573))
* Temporally change trigger due to stuck of auto approve action ([#77](https://github.com/voice0726/nextjs-playground/issues/77)) ([522d96c](https://github.com/voice0726/nextjs-playground/commit/522d96c4f0b4150921bbb505662c29edab3e7b81))

## 1.0.0 (2025-02-15)


### Features

* Add auth by next-auth ([6bed931](https://github.com/voice0726/nextjs-playground/commit/6bed9313dd1c1ea05541f18b8349957da1eda41f))
* Add common components ([64a681b](https://github.com/voice0726/nextjs-playground/commit/64a681bd494fbe4f0d51ae5a040d8b0fe917561e))
* Add eslint and prettier, and apply format ([b0fdc33](https://github.com/voice0726/nextjs-playground/commit/b0fdc33794ea56e827c40a27cbddb240666e2654))
* Add fetching data from server and createTodo api ([ff1904f](https://github.com/voice0726/nextjs-playground/commit/ff1904f06a45e106b7110621631585c19615254f))
* Add husky hooks ([91542b1](https://github.com/voice0726/nextjs-playground/commit/91542b1a388eaf9cbe4a830a0aa5a331183eb716))
* Add partial pre-rendering experiment ([f90d671](https://github.com/voice0726/nextjs-playground/commit/f90d671ef9ff3d7c1641b6f3d0ae17a2b3a843a1))
* Add plop for generating component boilerplate ([7df9d76](https://github.com/voice0726/nextjs-playground/commit/7df9d76fa4db658888bd747e1e2d1f9653f03895))
* Add test api server ([2d64aae](https://github.com/voice0726/nextjs-playground/commit/2d64aae1b3f85358fbdf9d1572975216626f8935))
* Add todo feature ([4219cf0](https://github.com/voice0726/nextjs-playground/commit/4219cf0ffc847813ef4f9e68708eeaa85052230f))
* **biome:** Try biome ([35aa569](https://github.com/voice0726/nextjs-playground/commit/35aa5694f1764016f1879db1d6f764422191c0c9))
* Change from tailwind to restyle ([6a36ec1](https://github.com/voice0726/nextjs-playground/commit/6a36ec197d409d275d20f2c933b281f450f3d84e))
* Change idp from ory to zitadel ([96bc6b8](https://github.com/voice0726/nextjs-playground/commit/96bc6b8c2530391dc9128bb94f35bc7e9623ce28))
* Change idp to idp-playground ([32bc249](https://github.com/voice0726/nextjs-playground/commit/32bc249069bdd2369c2a4d3661421adcebbf3d76))
* **ci:** Update github actions ([#59](https://github.com/voice0726/nextjs-playground/issues/59)) ([7be94fe](https://github.com/voice0726/nextjs-playground/commit/7be94fe9b7c8b1fd4e5ae1dd2b5f459068c1e845))
* Create page skelton ([52e10d2](https://github.com/voice0726/nextjs-playground/commit/52e10d29836275f8e0e68dec5da571b4295319fe))
* **css:** Change from restyle to linaria ([4f9b98c](https://github.com/voice0726/nextjs-playground/commit/4f9b98cc5422908e9f5d9f1f1716de76b5cf1af8))
* **css:** Replace linaria with pandacss ([#57](https://github.com/voice0726/nextjs-playground/issues/57)) ([cd93603](https://github.com/voice0726/nextjs-playground/commit/cd93603924dbcf0b22db385b6288915b1be75402))
* Initial commit ([cc892a8](https://github.com/voice0726/nextjs-playground/commit/cc892a85e43623c6d5beb075e2eda5e892cb452d))
* Install storybook ([1f265fa](https://github.com/voice0726/nextjs-playground/commit/1f265fa418d2a07ce8052121742f8bbf7e6796ae))
* **lint:** Add secretlint ([7f6fb40](https://github.com/voice0726/nextjs-playground/commit/7f6fb40744c8fe72c1748537be23d8058876db37))
* **lint:** Make eslint config flat ([50d1c18](https://github.com/voice0726/nextjs-playground/commit/50d1c1830e2d281e18022bf7b04f4a46b30546dd))
* **lint:** Update eslint related packages ([3b0b84b](https://github.com/voice0726/nextjs-playground/commit/3b0b84bdf01c237ffffabd35f7a90c42b862871e))
* **nav:** Add experimental route type to links in navbar ([651b60a](https://github.com/voice0726/nextjs-playground/commit/651b60a8c1e66076def100bb9779a0e3546bfb15))
* **nextjs:** Upgrade nextjs to rc2 ([e11dbb7](https://github.com/voice0726/nextjs-playground/commit/e11dbb7a7afa9cfef8bc5876300c0b7427a550ae))
* Remove json-server ([bebbf87](https://github.com/voice0726/nextjs-playground/commit/bebbf87d0d09646c7d9b3ad249b39a4e9043468a))
* Remove unnecessary pages and files ([06ec11b](https://github.com/voice0726/nextjs-playground/commit/06ec11b828ee9681a4f821109401bb9322dd39c5))
* Update nextjs to 15 ([8a01a53](https://github.com/voice0726/nextjs-playground/commit/8a01a53b31b4f9152d962f5e598b3f467e60b1e3))


### Bug Fixes

* Add @vitest/coverage-v8 ([67a15fc](https://github.com/voice0726/nextjs-playground/commit/67a15fcb650dbf4dd426d708f05d860da7d8bfe3))
* Add address page to avoid type error of href ([#52](https://github.com/voice0726/nextjs-playground/issues/52)) ([7d5ba3e](https://github.com/voice0726/nextjs-playground/commit/7d5ba3e131cbaaef45cbfd9a9ad719e159b49ac2))
* Add cache ([147487c](https://github.com/voice0726/nextjs-playground/commit/147487c1ff6575ec4bb3b14027df7c6d2d02e401))
* Add dummy env values to pass mustGetenv ([ce8b42b](https://github.com/voice0726/nextjs-playground/commit/ce8b42b0824fbac7a9c33696e1a1e4c1bdbe403c))
* **ci:** Use npm script to run test ([8c097f0](https://github.com/voice0726/nextjs-playground/commit/8c097f06fb1e28a92eef4ddc605aaf561116b0c0))
* **ci:** Use pnpm instead of npm ([3e9ad4f](https://github.com/voice0726/nextjs-playground/commit/3e9ad4fba788cb310401e8b9709c73dc25760dcc))
* **css:** Fix wrong css syntax ([45c3fa9](https://github.com/voice0726/nextjs-playground/commit/45c3fa9442b18c03def74cb57f024a1545a188fa))
* **deps:** Happy-dom vulneravilities ([#13](https://github.com/voice0726/nextjs-playground/issues/13)) ([6f1c06b](https://github.com/voice0726/nextjs-playground/commit/6f1c06b3798dcbcc5259208f20f6df904ffee05c))
* **deps:** Update cross-spawn ([#12](https://github.com/voice0726/nextjs-playground/issues/12)) ([bfcb5c6](https://github.com/voice0726/nextjs-playground/commit/bfcb5c69db11cf898d9a1ded32b54aa3391bf431))
* **deps:** Update dependency @auth/core to v0.37.4 ([#29](https://github.com/voice0726/nextjs-playground/issues/29)) ([fd3a5c0](https://github.com/voice0726/nextjs-playground/commit/fd3a5c07c41e1f1636ec8f32f044a657f4d30335))
* **deps:** Update dependency @tanstack/react-table to v8.20.6 ([#30](https://github.com/voice0726/nextjs-playground/issues/30)) ([60ac576](https://github.com/voice0726/nextjs-playground/commit/60ac5764a9a2d22eeac60d00ce1d3ede8ee9e88a))
* **deps:** Update dependency @vitest/eslint-plugin to v1.1.25 ([#31](https://github.com/voice0726/nextjs-playground/issues/31)) ([f77e335](https://github.com/voice0726/nextjs-playground/commit/f77e3351fe686315a7e1602c76661fc20efac6e9))
* **deps:** Update dependency @vitest/eslint-plugin to v1.1.26 ([#49](https://github.com/voice0726/nextjs-playground/issues/49)) ([dfc53cf](https://github.com/voice0726/nextjs-playground/commit/dfc53cfaac1890b65342bf7189410f86b8ef9494))
* **deps:** Update dependency @vitest/eslint-plugin to v1.1.27 ([#53](https://github.com/voice0726/nextjs-playground/issues/53)) ([28aa2bb](https://github.com/voice0726/nextjs-playground/commit/28aa2bb3a70422344f89fa1b9b78743680bdcca9))
* **deps:** Update dependency @vitest/eslint-plugin to v1.1.28 ([#55](https://github.com/voice0726/nextjs-playground/issues/55)) ([6b50cf4](https://github.com/voice0726/nextjs-playground/commit/6b50cf462a006b49219bfb60cfe2af92603a4acc))
* **deps:** Update dependency next to v15.1.6 ([#32](https://github.com/voice0726/nextjs-playground/issues/32)) ([61ca48a](https://github.com/voice0726/nextjs-playground/commit/61ca48ac24166f4170c3fa21bfeaf3f75a0ca945))
* **deps:** Update dependency vite-tsconfig-paths to v5.1.4 ([#33](https://github.com/voice0726/nextjs-playground/issues/33)) ([9d777b4](https://github.com/voice0726/nextjs-playground/commit/9d777b45e3f56430609e98e7a2bf17c4eb63865b))
* **deps:** Update dependency zod to v3.24.1 ([#43](https://github.com/voice0726/nextjs-playground/issues/43)) ([5c6b717](https://github.com/voice0726/nextjs-playground/commit/5c6b717e04b02d6bca01589296b7f322bf5027e5))
* **deps:** Update react monorepo ([#34](https://github.com/voice0726/nextjs-playground/issues/34)) ([23e8915](https://github.com/voice0726/nextjs-playground/commit/23e8915772c10e9afa3631d7988e340911a6af77))
* **env:** Move NEXTAUTH_URL from env to authConfig for next-auth v5 update ([1ca79e1](https://github.com/voice0726/nextjs-playground/commit/1ca79e1557acf5b99f855190b3d7b04c3243baec))
* **eslint:** Add missing node global to suppress undef error for modules ([00a2ba5](https://github.com/voice0726/nextjs-playground/commit/00a2ba5474f9b6a201b13533397614b79da55c05))
* Fix auto-approve action ([#5](https://github.com/voice0726/nextjs-playground/issues/5)) ([fdd2b24](https://github.com/voice0726/nextjs-playground/commit/fdd2b24ea48dc14c8ee26617bf6d9c420350d85c))
* Fix env is not recognized in composite actions ([#64](https://github.com/voice0726/nextjs-playground/issues/64)) ([eac80a9](https://github.com/voice0726/nextjs-playground/commit/eac80a904cc2a0cd100aa60afaefe241dc6c8e97))
* Fix import of ReactNode ([fc02770](https://github.com/voice0726/nextjs-playground/commit/fc02770f0504eb1140f1343e5fd59d8def68ad1d))
* Fix inconsistent vitest version ([4ee7123](https://github.com/voice0726/nextjs-playground/commit/4ee71233c80961c6127c4fefc1f94cc0d9536ea5))
* Fix keys passed by spread syntax ([#8](https://github.com/voice0726/nextjs-playground/issues/8)) ([488f9ec](https://github.com/voice0726/nextjs-playground/commit/488f9ec84aa46f99b92619e6d682b55c2fde465e))
* Fix name of types:check ([04752cd](https://github.com/voice0726/nextjs-playground/commit/04752cdcd70e768b012cd3e17c211bcbab0e023b))
* Fix page have wrong props ([7f790ea](https://github.com/voice0726/nextjs-playground/commit/7f790eaac5469cd377501297257fc7806c5b5084))
* Fix release please config ([#70](https://github.com/voice0726/nextjs-playground/issues/70)) ([38d9e5e](https://github.com/voice0726/nextjs-playground/commit/38d9e5e48262e304ec69c04973965ed8a5a75f0e))
* Fix workflow ([#68](https://github.com/voice0726/nextjs-playground/issues/68)) ([3bf8cd8](https://github.com/voice0726/nextjs-playground/commit/3bf8cd8b5c4cb9b34e89db3566c0ca8cfee59919))
* Fix workflow ([#69](https://github.com/voice0726/nextjs-playground/issues/69)) ([5e1d681](https://github.com/voice0726/nextjs-playground/commit/5e1d68125901381a8d59ad6bf606f4eba7b73761))
* Happy-dom vulnerability ([#17](https://github.com/voice0726/nextjs-playground/issues/17)) ([f252432](https://github.com/voice0726/nextjs-playground/commit/f25243232ba9587446c97ed69db42e423e6e1de4))
* **modal:** Change modal ids to be unique ([f70f7f7](https://github.com/voice0726/nextjs-playground/commit/f70f7f7bbb05c5778ecae01602ab787799736b2c))
* **modal:** Make modal name unique ([a7a8d3e](https://github.com/voice0726/nextjs-playground/commit/a7a8d3eb869f8c050cca9ee5a2db624fcf712645))
* Remove duplicated package ([#22](https://github.com/voice0726/nextjs-playground/issues/22)) ([48a643f](https://github.com/voice0726/nextjs-playground/commit/48a643fa8e3e93a5924d3e754d89defa5715330b))
* Remove pnpx due to dependency problem ([5fc61f7](https://github.com/voice0726/nextjs-playground/commit/5fc61f79fadd11341ad1fd9228622b61a552bb33))
* Remove unused session provider ([1c51bd7](https://github.com/voice0726/nextjs-playground/commit/1c51bd7a1d0efe0c5dfc7ebfa745f932506b2347))
* Return NextResponse.redirect when already signed-in ([93e8a0d](https://github.com/voice0726/nextjs-playground/commit/93e8a0dd32e2f4ea53d72789ff4f215f02add33a))


### Reverts

* **eslint:** Revert to eslint v8 ([fd7ff7a](https://github.com/voice0726/nextjs-playground/commit/fd7ff7aca01d634b38778d60b5c468a0115f37a0))


### Documentation

* Update README.md ([#48](https://github.com/voice0726/nextjs-playground/issues/48)) ([2d30e7c](https://github.com/voice0726/nextjs-playground/commit/2d30e7c1000a14c512a2a85125c1dc64c4d82d72))


### Miscellaneous Chores

* **biome:** Fix biome indent config and set lineWidth 120 ([8ea9823](https://github.com/voice0726/nextjs-playground/commit/8ea9823f1ff91d310d18d64c6a150066070badd6))
* Bootstrap releases for path: . ([#67](https://github.com/voice0726/nextjs-playground/issues/67)) ([9514729](https://github.com/voice0726/nextjs-playground/commit/9514729278c9c58661d2b2413accaaeb3d9584e7))
* **ci:** Add auto pr approve ([#3](https://github.com/voice0726/nextjs-playground/issues/3)) ([ccac86c](https://github.com/voice0726/nextjs-playground/commit/ccac86c1b5c2f7e0fe6d4d1882ba5cbe1c3e1444))
* **ci:** Add conventional commit check on pull request ([#72](https://github.com/voice0726/nextjs-playground/issues/72)) ([0ec6021](https://github.com/voice0726/nextjs-playground/commit/0ec602121a0a379f33aacbd46efd7fc2008d7a82))
* Configure Renovate ([#19](https://github.com/voice0726/nextjs-playground/issues/19)) ([f236f66](https://github.com/voice0726/nextjs-playground/commit/f236f664c5d17947df43f93fc8f93d6bb1e329f1))
* **deps-dev:** Bump vitest from 2.1.5 to 2.1.9 in the npm_and_yarn group across 1 directory ([#18](https://github.com/voice0726/nextjs-playground/issues/18)) ([8189e1d](https://github.com/voice0726/nextjs-playground/commit/8189e1da6d635661edba0bb555c49a3fbed63518))
* **deps:** Bump dependencies ([#9](https://github.com/voice0726/nextjs-playground/issues/9)) ([dbdc18f](https://github.com/voice0726/nextjs-playground/commit/dbdc18f6b1147295f6018503a7f2aa1f4ac06379))
* **deps:** Bump nanoid from 3.3.7 to 3.3.8 ([1925156](https://github.com/voice0726/nextjs-playground/commit/1925156071bc8e34962cfa043db71e1bf945292e))
* **deps:** Bump the npm_and_yarn group across 1 directory with 2 updates ([#16](https://github.com/voice0726/nextjs-playground/issues/16)) ([c30d730](https://github.com/voice0726/nextjs-playground/commit/c30d730973b84a26be1f306833ec689c33bf9d6d))
* **deps:** Replace dependency eslint-plugin-vitest with @vitest/eslint-plugin ^1.0.1 ([#20](https://github.com/voice0726/nextjs-playground/issues/20)) ([39e3d69](https://github.com/voice0726/nextjs-playground/commit/39e3d692984b6cfafb97192d561aeec14abe7576))
* **deps:** Update actions/checkout action to v4 ([#44](https://github.com/voice0726/nextjs-playground/issues/44)) ([8ffc751](https://github.com/voice0726/nextjs-playground/commit/8ffc75109daf5ef9ac28f3afde139689160b0996))
* **deps:** Update actions/checkout action to v4 ([#62](https://github.com/voice0726/nextjs-playground/issues/62)) ([61a8790](https://github.com/voice0726/nextjs-playground/commit/61a87906d1609c013548e008722505412bb43a6e))
* **deps:** Update commitlint monorepo to v19.7.1 ([#35](https://github.com/voice0726/nextjs-playground/issues/35)) ([5f300fb](https://github.com/voice0726/nextjs-playground/commit/5f300fb8cb2a37984f13bb6dd4bf5e170b8c408c))
* **deps:** Update dependencies ([#2](https://github.com/voice0726/nextjs-playground/issues/2)) ([4217b85](https://github.com/voice0726/nextjs-playground/commit/4217b85242ecc1440daaefb7044d7db5b002f70a))
* **deps:** Update dependency @eslint/compat to v1.2.6 ([#21](https://github.com/voice0726/nextjs-playground/issues/21)) ([dfd3809](https://github.com/voice0726/nextjs-playground/commit/dfd3809ece6c7ae330e7d5d27b4433164e378aca))
* **deps:** Update dependency @eslint/js to v9.20.0 ([#50](https://github.com/voice0726/nextjs-playground/issues/50)) ([a26be7b](https://github.com/voice0726/nextjs-playground/commit/a26be7b9bbf5bac175792f58a0c308893dbd2dc0))
* **deps:** Update dependency @pandacss/dev to ^0.53.0 ([#58](https://github.com/voice0726/nextjs-playground/issues/58)) ([b9119fb](https://github.com/voice0726/nextjs-playground/commit/b9119fbd73a8e610bde1df65ee88f96d0ceed246))
* **deps:** Update dependency @types/node to v22.13.1 ([#36](https://github.com/voice0726/nextjs-playground/issues/36)) ([6326fdb](https://github.com/voice0726/nextjs-playground/commit/6326fdbe6b443f03c201aeb47d3d4b3880221aa7))
* **deps:** Update dependency @vitejs/plugin-react to v4.3.4 ([#24](https://github.com/voice0726/nextjs-playground/issues/24)) ([ac7614b](https://github.com/voice0726/nextjs-playground/commit/ac7614b6ef5d7fe05570d4a50d9593f2bf6d9106))
* **deps:** Update dependency dotenv to v16.4.7 ([#25](https://github.com/voice0726/nextjs-playground/issues/25)) ([24264bb](https://github.com/voice0726/nextjs-playground/commit/24264bbb3e13899c5986dff24fea717f4df26255))
* **deps:** Update dependency eslint to v9.20.0 ([#51](https://github.com/voice0726/nextjs-playground/issues/51)) ([ba71bf8](https://github.com/voice0726/nextjs-playground/commit/ba71bf8a14ab1b25c83e5d593f84e7bf4e6cfddd))
* **deps:** Update dependency eslint-plugin-perfectionist to v4.8.0 ([#37](https://github.com/voice0726/nextjs-playground/issues/37)) ([c020247](https://github.com/voice0726/nextjs-playground/commit/c020247de0ac55c875e723d00cb43860dfdf41ad))
* **deps:** Update dependency husky to v9.1.7 ([#27](https://github.com/voice0726/nextjs-playground/issues/27)) ([2116a29](https://github.com/voice0726/nextjs-playground/commit/2116a2931f4b69f52d44fb5b02e710d60aaaa180))
* **deps:** Update dependency jsdom to v26 ([#45](https://github.com/voice0726/nextjs-playground/issues/45)) ([3a79e8d](https://github.com/voice0726/nextjs-playground/commit/3a79e8d5e996fbd93da4aa27ffb6d4f4de4365e8))
* **deps:** Update dependency lint-staged to v15.4.3 ([#38](https://github.com/voice0726/nextjs-playground/issues/38)) ([2bbb479](https://github.com/voice0726/nextjs-playground/commit/2bbb4795459bdc918c9d8c429177d22f6945f769))
* **deps:** Update dependency prettier to v3.4.2 ([#39](https://github.com/voice0726/nextjs-playground/issues/39)) ([4c65d52](https://github.com/voice0726/nextjs-playground/commit/4c65d52a4f3b79ea281c7d335e44940c44685214))
* **deps:** Update dependency prettier to v3.5.0 ([#54](https://github.com/voice0726/nextjs-playground/issues/54)) ([82a0cbe](https://github.com/voice0726/nextjs-playground/commit/82a0cbedfb73f7dbdee2c8b616ba2cb7e3765ddb))
* **deps:** Update nextjs ([#6](https://github.com/voice0726/nextjs-playground/issues/6)) ([3a005f5](https://github.com/voice0726/nextjs-playground/commit/3a005f537c3df08d3c2a468c581a016a330390bb))
* **deps:** Update packages ([895bc37](https://github.com/voice0726/nextjs-playground/commit/895bc377b3f70d75c61cd7f44c8e71e13a54fad4))
* **deps:** Update react monorepo to v19 (major) ([#46](https://github.com/voice0726/nextjs-playground/issues/46)) ([1655b73](https://github.com/voice0726/nextjs-playground/commit/1655b733cf35d95b7bb3f647280c330027baf632))
* **deps:** Update storybook monorepo to v8.5.3 ([#40](https://github.com/voice0726/nextjs-playground/issues/40)) ([23bc609](https://github.com/voice0726/nextjs-playground/commit/23bc609b5c36cdd1f43bee62f1c127b5ded18188))
* **deps:** Update testing-library monorepo ([#41](https://github.com/voice0726/nextjs-playground/issues/41)) ([2d414f2](https://github.com/voice0726/nextjs-playground/commit/2d414f21bc7dd063b2230c18a62c03685602a2fc))
* **deps:** Update typescript-eslint monorepo to v8.23.0 ([#42](https://github.com/voice0726/nextjs-playground/issues/42)) ([401c68c](https://github.com/voice0726/nextjs-playground/commit/401c68cc29148c188e03a626b5a559b79182908c))
* **deps:** Update typescript-eslint monorepo to v8.24.0 ([#56](https://github.com/voice0726/nextjs-playground/issues/56)) ([ce5e1e1](https://github.com/voice0726/nextjs-playground/commit/ce5e1e189eab5ba472ea24ff6a72d355ce119440))
* **deps:** Update vitest monorepo to v2.1.9 ([#28](https://github.com/voice0726/nextjs-playground/issues/28)) ([6cda1cf](https://github.com/voice0726/nextjs-playground/commit/6cda1cf5c733a732b1b412ab884f062efe14043e))
* **deps:** Update vitest monorepo to v3 (major) ([#47](https://github.com/voice0726/nextjs-playground/issues/47)) ([d3fd099](https://github.com/voice0726/nextjs-playground/commit/d3fd0992e94c377769fa7de8edcfe7e58a2ae19d))
* **deps:** Update-eslint ([#11](https://github.com/voice0726/nextjs-playground/issues/11)) ([d862c47](https://github.com/voice0726/nextjs-playground/commit/d862c47dd74cbafcd62b914ee057940097fb4124))
* Fix import-x/no-named-as-default-member warnings in qodana ([#26](https://github.com/voice0726/nextjs-playground/issues/26)) ([9474660](https://github.com/voice0726/nextjs-playground/commit/94746608dda79eb4b50391afe5dc9fb9ca8b41e1))
* **git:** Update gitignore and remove unnecessary file ([#10](https://github.com/voice0726/nextjs-playground/issues/10)) ([5967311](https://github.com/voice0726/nextjs-playground/commit/5967311d9e25fdef4fbf53bf858e5a6668ffdb61))
* **husky:** Update configs to v9 style ([30ae8bd](https://github.com/voice0726/nextjs-playground/commit/30ae8bdfe1371d78fcb3e35b55eaf56556817fed))
* **lint:** Move eslint config from package.json to eslint.config.mjs ([9b877b4](https://github.com/voice0726/nextjs-playground/commit/9b877b46e023ff1db482935f44d03230d8d83887))
* **lint:** Update eslint-plugin-react-hooks and eslint config ([0deaea7](https://github.com/voice0726/nextjs-playground/commit/0deaea74ea860fda15002e8345ef889aef186452))
* **lint:** Update eslint-related packages and its config ([11f8951](https://github.com/voice0726/nextjs-playground/commit/11f8951346d1ecc9ec8977b809d8f23c77f3cb8f))
* **prettier:** Change printWidth to 120 ([1a0009b](https://github.com/voice0726/nextjs-playground/commit/1a0009be2f17b6fe98af6d74d75a90c9ed43a6b1))
* Stylistic change and replace eslint-plugin-import ([#7](https://github.com/voice0726/nextjs-playground/issues/7)) ([17e6f9c](https://github.com/voice0726/nextjs-playground/commit/17e6f9c7421206104d4fab5a23b2a1ff01c1b961))
* Update package-lock.yaml ([404b15b](https://github.com/voice0726/nextjs-playground/commit/404b15ba57e87223005f0c51cf1a565cb06d0f82))


### Code Refactoring

* Change root symbol from @ to ~ ([6460754](https://github.com/voice0726/nextjs-playground/commit/6460754df8663199c491ab7ba00c4405b90bb84f))
* **ci:** State permissions explicitly ([8d7d606](https://github.com/voice0726/nextjs-playground/commit/8d7d60630e85f0a8dd57ec196fc757a143b96ed1))
* **env:** Load all process.env to config.ts ([89c29a4](https://github.com/voice0726/nextjs-playground/commit/89c29a421331bc7a3c36d0d3d7bb187adbb89314))
* Remove qodana workflow for renovate workflow ([#65](https://github.com/voice0726/nextjs-playground/issues/65)) ([4ebf13a](https://github.com/voice0726/nextjs-playground/commit/4ebf13af5d3ad909a01cffe769fa83e5b762c6b1))
* **todo:** Add layout.tsx and fetch data in it ([cf35be6](https://github.com/voice0726/nextjs-playground/commit/cf35be678054cfa14404c37a1886dc17b3507388))
* **todo:** Move modals to page.tsx and delete Modals component ([15f8f68](https://github.com/voice0726/nextjs-playground/commit/15f8f68ffcb887e69ba9396f29e51b74e86291de))
* **todo:** Remove undefined from props of CreateForm ([#14](https://github.com/voice0726/nextjs-playground/issues/14)) ([7c9adc6](https://github.com/voice0726/nextjs-playground/commit/7c9adc652ab31cbb5f8e5a3a31f7901ab6b616ae))


### Continuous Integration

* Add release-please ([#66](https://github.com/voice0726/nextjs-playground/issues/66)) ([f718653](https://github.com/voice0726/nextjs-playground/commit/f718653ae492b7ee5034d251741a70f941c695c3))
* Add workflow ([db47c0e](https://github.com/voice0726/nextjs-playground/commit/db47c0eafdcd2a6843c7fe764f9da6fa1b290f41))
* Change default shell to bash ([0d06456](https://github.com/voice0726/nextjs-playground/commit/0d06456c8d983c824ffa7150b8805840ea70c6de))
* Limit concurrency ([3671fcb](https://github.com/voice0726/nextjs-playground/commit/3671fcbda7d8ead57d2f050adf38468aa3170b0b))
* Remove coverage report for non-pr pushing ([083ad54](https://github.com/voice0726/nextjs-playground/commit/083ad54a1ef6849c052eb84da3f8379a57ea9e55))
* Update actions/cache to v4 ([6a800a0](https://github.com/voice0726/nextjs-playground/commit/6a800a015b760d9ab4b658323b9ed76b35887cfb))
* Update github action flows to avoid unnecessary run ([#61](https://github.com/voice0726/nextjs-playground/issues/61)) ([c0ce45b](https://github.com/voice0726/nextjs-playground/commit/c0ce45b84284d860b8502b502e54a8613786c26b))
* Update qodana flow to avoid unnecessary run ([#63](https://github.com/voice0726/nextjs-playground/issues/63)) ([f3f2ce5](https://github.com/voice0726/nextjs-playground/commit/f3f2ce502082d880eab0278e83b45cd1927be68f))
