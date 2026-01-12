package com.atls.hyperion.ui.components.input.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun InputAppearance.Companion.blue(): InputAppearance =
    InputAppearance(
        default = Colors.fromColorSet(TokenColors.Input.Blue.Default),
        filled = Colors.fromColorSet(TokenColors.Input.Blue.Default),
        focused = Colors.fromColorSet(TokenColors.Input.Blue.Focus),
        disabled = Colors.fromColorSet(TokenColors.Input.Blue.Disabled),
        error = Colors.fromColorSet(TokenColors.Input.Blue.Default), // TODO: Add error colors to tokens
        active = Colors.fromColorSet(TokenColors.Input.Blue.Active)
    )

@Composable
fun InputAppearance.Companion.white(): InputAppearance =
    InputAppearance(
        default = Colors.fromColorSet(TokenColors.Input.White.Default),
        filled = Colors.fromColorSet(TokenColors.Input.White.Default),
        focused = Colors.fromColorSet(TokenColors.Input.White.Focus),
        disabled = Colors.fromColorSet(TokenColors.Input.White.Disabled),
        error = Colors.fromColorSet(TokenColors.Input.White.Default), // TODO: Add error colors to tokens
        active = Colors.fromColorSet(TokenColors.Input.White.Active)
    )
