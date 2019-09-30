/** eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_DEV = 'production';

console.log(chalk.blue('Generated Minified bundle for production. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
    if(err){ // so a fatal error accurred. Stop here
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasError) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if(jsonStats.hasWarnings){
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warnings => console.log(chalk.yellow(warnings)));
    }

    console.log(`webpack stats: ${stats}`);

    console.log(chalk.green('your apps hase been built for production and written to /dist'))

    return 0;
});