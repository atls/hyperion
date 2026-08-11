package com.atls.hyperion.ui.primitives.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.LineHeight

class TextStory : ComponentExample {
    override val name: String = "Text"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.padding(Space.lg)
        ) {
            Text(
                text = "Heading XL",
                color = LegacyColors.Text.black,
                typography = TextStyle(
                    fontSize = FontSize.xl4,
                    lineHeight = LineHeight.xl4
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Body Medium",
                color = LegacyColors.Text.almostBlack,
                typography = TextStyle(
                    fontSize = FontSize.md,
                    lineHeight = LineHeight.md
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Small Caption",
                color = LegacyColors.Text.gray,
                typography = TextStyle(
                    fontSize = FontSize.xs,
                    lineHeight = LineHeight.xs
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Error Text",
                color = LegacyColors.Text.red,
                typography = TextStyle(
                    fontSize = FontSize.sm,
                    lineHeight = LineHeight.sm
                )
            )
        }
    }
}
