/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs'

const coverageData = JSON.parse(
  fs.readFileSync('coverage/coverage-summary.json', 'utf8')
)

const coverageThreshold = 80

const totalCoverage = {
  lines: coverageData.total.lines.pct,
  statements: coverageData.total.statements.pct,
  functions: coverageData.total.functions.pct,
  branches: coverageData.total.branches.pct,
}

const totalCoverageAvg =
  Object.values(totalCoverage)
    .filter((pct) => typeof pct === 'number')
    .reduce((acc, pct) => acc + pct, 0) / Object.keys(totalCoverage).length

if (totalCoverageAvg < coverageThreshold) {
  console.error(
    `The total code coverage is (${totalCoverageAvg.toFixed(
      2
    )}%), so the total code coverage is less than the minimum threshold of ${coverageThreshold}%.`
  )
  process.exit(1)
} else {
  console.log(`The total code coverage is ${totalCoverageAvg.toFixed(2)}%.`)
}
