import StyleDictionary from 'style-dictionary'
import { expandTypesMap, register } from '@tokens-studio/sd-transforms';
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

    // Cargo los temas específicos a utilizar
    const globalTheme = themes.getThemeByName('global');
    const lightTheme = themes.getThemeByName('light');


    const globalConfig = {

        // Esto lo que me genera es que expande las fuentes que están con valores compuestas, heredado desde el Token Studio
        expand:{
            typesMap: true,
        },

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
                    'ts/typography/fontWeight',
                    'ts/size/lineheight',
                    'size/pxToRem'
                ]
            }
        }
    };

    const lightConfig = {

        // Desde aqui hago la declaración del fichero para web, iOS, etc y lo creo, más sus transformadores.
        platforms: {
            web: {
                files: [
                    {   // Creo el fichero CSS y el formato
                        destination: 'app/build/light/variables.css',
                        format: 'css/variables',
                    }
                ],

                transforms: [
                    // Transformadores de valores para adaptar a la nomenclatura CSS
                    'name/kebab',
                    'color/rgb'
                ]

            }
        } 
    }

    globalTheme.addConfig(globalConfig).build();
    lightTheme.addConfig(lightConfig).build();
}

run();
