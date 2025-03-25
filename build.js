import StyleDictionary from 'style-dictionary'
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from 'sd-themes-loader';
import { config } from 'process';
import { platform } from 'os';
import { transform } from 'typescript';
import { transforms } from 'style-dictionary/enums';


register(StyleDictionary, {
withSDBuiltins: false,

});

const loader = ThemesLoader(StyleDictionary);

async function run() {
    const themes = await loader.load('/tokens');

    const globalThemes = themes.getThemeByName('global');

    const config = {
        platforms: {
            web: {
                files: [
                    {
                        destination: 'app/build/global/variables.css',
                        format: 'css/variables',
                    }
                ],

                transforms: [
                    'name/kebab',
                    'ts/resolveMath',
                    'size/pxToRem'
                ]
            }
        }
    };

    
    globalThemes.addConfig(config).build();
}

run();
