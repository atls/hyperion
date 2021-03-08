import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from './theme'
import * as actualTheme from './theme/theme'
import {useTheme} from "@emotion/react";
import {injectGlobalStyles} from "./theme/globals";

describe('test suit for theme', () => {

    it('should render ThemeProvider correctly', () => {
        const ThemeConsumer = () => {
            const theme = useTheme()

            expect(theme).toBe(actualTheme)

            return <p>{'Inside provider'}</p>
        }

        const tree = renderer.create(
            <ThemeProvider>
                <ThemeConsumer />
            </ThemeProvider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    });

    it('should injectGlobalStyles with no errors', () => {
        expect(injectGlobalStyles()).toBe(undefined)
    });
})
