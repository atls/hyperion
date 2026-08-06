package com.atls.hyperion.ui.theme.typography

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily

class TextStyles(fontFamily: FontFamily) {
    val display = Display(
        lg = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl6,
            lineHeight = LineHeight.xl4,
            fontWeight = FontWeight.semiBold,
            letterSpacing = LetterSpacing.md
        ),
        md = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl5,
            lineHeight = LineHeight.xl3,
            fontWeight = FontWeight.semiBold,
            letterSpacing = LetterSpacing.md
        ),
        sm = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl4,
            lineHeight = LineHeight.xl2,
            fontWeight = FontWeight.semiBold,
            letterSpacing = LetterSpacing.md
        )
    )
    val heading = Heading(
        lg = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl3,
            lineHeight = LineHeight.xl,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.md
        ),
        md = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl2,
            lineHeight = LineHeight.lg,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.md
        ),
        sm = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xl,
            lineHeight = LineHeight.md,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.md
        )
    )
    val title = Title(
        lg = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.lg,
            lineHeight = LineHeight.sm,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.md
        ),
        md = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.md,
            lineHeight = LineHeight.sm,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.md
        )
    )
    val body = Body(
        lg = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.md,
            lineHeight = LineHeight.sm,
            fontWeight = FontWeight.regular,
            letterSpacing = LetterSpacing.md
        ),
        md = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.sm,
            lineHeight = LineHeight.xs,
            fontWeight = FontWeight.regular,
            letterSpacing = LetterSpacing.md
        ),
        sm = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xs,
            lineHeight = LineHeight.xs2,
            fontWeight = FontWeight.regular,
            letterSpacing = LetterSpacing.md
        )
    )
    val label = Label(
        lg = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.md,
            lineHeight = LineHeight.xs,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.lg
        ),
        md = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.sm,
            lineHeight = LineHeight.xs,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.lg
        ),
        sm = TextStyle(
            fontFamily = fontFamily,
            fontSize = FontSize.xs,
            lineHeight = LineHeight.xs2,
            fontWeight = FontWeight.medium,
            letterSpacing = LetterSpacing.lg
        )
    )
    val caption: TextStyle = TextStyle(
        fontFamily = fontFamily,
        fontSize = FontSize.xs2,
        lineHeight = LineHeight.xs2,
        fontWeight = FontWeight.regular,
        letterSpacing = LetterSpacing.xl
    )
    val overline: TextStyle = TextStyle(
        fontFamily = fontFamily,
        fontSize = FontSize.xs3,
        lineHeight = LineHeight.xs3,
        fontWeight = FontWeight.medium,
        letterSpacing = LetterSpacing.xl
    )
}
