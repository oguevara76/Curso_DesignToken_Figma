import StyleDictionary from 'style-dictionary';
import { expandTypesMap, register } from '@tokens-studio/sd-transforms';
import ThemesLoader from 'sd-themes-loader';


register(StyleDictionary, {
withSDBuiltins: false,

});

// estas lineas sirven para meter la sintáxis para llamar a la URL del asset. Hemos creado un transformador
StyleDictionary.registerTransform({
    name: 'assets/background',
    type: 'value',
    filter: (token) => token.$type === 'asset',
    transform: (token) => `url('/app/assets/${token.$value}')`
});

const loader = ThemesLoader(StyleDictionary);

async function run() {
    const themes = await loader.load('/tokens');

    // Cargo los temas específicos a utilizar
    const globalTheme = themes.getThemeByName('global');
    const lightTheme = themes.getThemeByName('light');
    const darkTheme = themes.getThemeByName('dark');
    const desktopTheme = themes.getThemeByName('desktop');
    const mobileTheme = themes.getThemeByName('mobile');


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
                        options: {
                            selector: '.light'
                        }
                    }
                ],

                transforms: [
                    // Transformadores de valores para adaptar a la nomenclatura CSS
                    'name/kebab',
                    'color/rgb',
                    'assets/background'
                ]

            }
        } 
    }

    const darkConfig = {

        // Desde aqui hago la declaración del fichero para web, iOS, etc y lo creo, más sus transformadores.
        platforms: {
            web: {
                files: [
                    {   // Creo el fichero CSS y el formato
                        destination: 'app/build/dark/variables.css',
                        format: 'css/variables',
                        options: {
                            selector: '.dark'
                        }
                    }
                ],

                transforms: [
                    // Transformadores de valores para adaptar a la nomenclatura CSS
                    'name/kebab',
                    'color/rgb',
                    'assets/background'
                ]

            }
        } 
    }

    const desktopConfig = {

        expand:{
            typesMap: true,
        },

        platforms: {
            web: {
                files: [
                    {
                        destination: 'app/build/desktop/variables.css',
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
    }

    const mobileConfig = {

        expand:{
            typesMap: true,
        },

        platforms: {
            web: {
                files: [
                    {
                        destination: 'app/build/mobile/variables.css',
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
    }

    // Ejecuto las instrucciones antriores
    globalTheme.addConfig(globalConfig).build();
    lightTheme.addConfig(lightConfig).build();
    darkTheme.addConfig(darkConfig).build();
    desktopTheme.addConfig(desktopConfig).build();
    mobileTheme.addConfig(mobileConfig).build();
}

run();
