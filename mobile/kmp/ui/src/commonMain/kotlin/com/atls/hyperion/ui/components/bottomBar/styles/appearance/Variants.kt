package com.atls.hyperion.ui.components.bottomBar.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Alpha
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun BottomBarAppearance.Companion.primary(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.white,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithLabel(
                activeColor = ThemeColors.Palette.blueProtective,
                inactiveColor = ThemeColors.Palette.gray,
                activeLabelColor = ThemeColors.Palette.blueProtective,
                inactiveLabelColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.blueProtective.copy(alpha = Alpha.micro)
            )
        )
    )

fun BottomBarAppearance.Companion.secondary(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.white,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithLabel(
                activeColor = ThemeColors.Palette.green,
                inactiveColor = ThemeColors.Palette.gray,
                activeLabelColor = ThemeColors.Palette.green,
                inactiveLabelColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.green.copy(alpha = Alpha.micro)
            )
        )
    )

fun BottomBarAppearance.Companion.dark(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.black,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithLabel(
                activeColor = ThemeColors.Palette.white,
                inactiveColor = ThemeColors.Palette.gray,
                activeLabelColor = ThemeColors.Palette.white,
                inactiveLabelColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.white.copy(alpha = Alpha.micro)
            )
        )
    )


fun BottomBarAppearance.Companion.primaryWithoutLabel(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.white,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithoutLabel(
                activeColor = ThemeColors.Palette.blueProtective,
                inactiveColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.blueProtective.copy(alpha = Alpha.micro)
            )
        )
    )

fun BottomBarAppearance.Companion.secondaryWithoutLabel(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.white,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithoutLabel(
                activeColor = ThemeColors.Palette.green,
                inactiveColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.green.copy(alpha = Alpha.micro)
            )
        )
    )

fun BottomBarAppearance.Companion.darkWithoutLabel(): BottomBarAppearance =
    BottomBarAppearance(
        colors = Colors.Default(
            backgroundColor = ThemeColors.Palette.black,
            dividerColor = ThemeColors.Palette.gray,
            tabColors = Colors.TabColors.WithoutLabel(
                activeColor = ThemeColors.Palette.white,
                inactiveColor = ThemeColors.Palette.gray,
                rippleColor = ThemeColors.Palette.white.copy(alpha = Alpha.micro)
            )
        )
    )
