# visual-e2e

Simple Visual E2E Test Repo

## Prerequisite

- Node installed
- [WebdriverIO](https://webdriver.io/) installed (Will be installed in next step)
- Have a test framework installed e.g Mocha, Jest (Will be installed in next step)

### Clone repo

```bash
git clone git@github.com:luisVelasquezSauce/visual-e2e.git
```

### Install dependencies

#### Linux/macOS

```bash
npm install
```

### Define environment variables

Replace values in <> for actual values e.g `export SAUCE_USERNAME="developerAccount"`

#### Linux/macOS

```bash
export SAUCE_USERNAME="<REPLACE THIS WITH A VALID SAUCE USERNAME>"
export SAUCE_ACCESS_KEY="<REPLACE THIS WITH A VALID SAUCE ACCESS KEY>"
export SCREENER_API_KEY="<REPLACE THIS WITH A VALID SCREENER API KEY>"
```

#### Windows powershell

```powershell
$Env:SAUCE_USERNAME = "<REPLACE THIS WITH A VALID SAUCE USERNAME>"
$Env:SAUCE_ACCESS_KEY = "<REPLACE THIS WITH A VALID SAUCE ACCESS KEY>"
$Env:SAUCE_ACCESS_KEY = "<REPLACE THIS WITH A VALID SCREENER API KEY>"
```

## Run tests

NOTE: Your **first test run will fail** as there are no baselines to compare against to. More info [here](https://docs.saucelabs.com/visual/e2e-testing/setup/#5-run) or configure your test to not fail on new states using `failOnNewStates` capability, more info [here](https://docs.saucelabs.com/visual/e2e-testing/commands-options/#saucevisual-capability-options). Once you have accepted your changes you can rerun your tests.

### Using only webdriverio

```bash
npm run webdriverio
```

### Using webdriverio and mocha

```bash
npm run test:mocha
```

### Using webdriverio and jest

```bash
npm run test:jest
```
