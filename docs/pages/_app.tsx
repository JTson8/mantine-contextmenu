import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from 'mantine-contextmenu';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppWrapper from '~/components/AppWrapper';
import { SEO_DEFAULT_DESCRIPTION, SEO_DEFAULT_TITLE } from '~/config';

export default function CustomApp(props: AppProps) {
  const { Component, pageProps } = props;

  // const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
  //   key: 'mantine-color-scheme',
  //   defaultValue: 'light',
  // });

  // const toggleColorScheme = () => {
  //   setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  // };

  // useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>{SEO_DEFAULT_TITLE}</title>
        <meta property="og:title" content={SEO_DEFAULT_TITLE} />
        <meta name="twitter:title" content={SEO_DEFAULT_TITLE} />
        <meta name="description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta property="og:description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta name="twitter:description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta name="author" content="Ionut-Cristian Florescu" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        theme={
          {
            // colorScheme,
            // components: {
            //   Code: {
            //     styles: (theme) => ({
            //       root: {
            //         border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
            //       },
            //     }),
            //   },
            //   Prism: {
            //     styles: (theme) => {
            //       const border = `1px solid ${
            //         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            //       }`;
            //       return {
            //         root: {
            //           border,
            //           '&&': { borderRadius: 0 },
            //         },
            //         copy: {
            //           '&&': {
            //             border,
            //             background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
            //           },
            //         },
            //       };
            //     },
            //   },
            // },
          }
        }
      >
        <Notifications />
        <AppWrapper>
          <ContextMenuProvider>
            <Component {...pageProps} />
          </ContextMenuProvider>
        </AppWrapper>
      </MantineProvider>
    </>
  );
}
