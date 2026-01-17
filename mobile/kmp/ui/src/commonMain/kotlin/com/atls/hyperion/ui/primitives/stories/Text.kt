package com.atls.hyperion.ui.primitives.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.LineHeights

class TextStory : ComponentExample {
    override val name: String = "Text"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.padding(Space.lg)
        ) {
            Text(
                text = "Heading XL",
                color = Colors.Text.black,
                typography = TextStyle(
                    fontSize = FontSize.xl4,
                    lineHeight = LineHeights.xl4
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Body Medium",
                color = Colors.Text.almostBlack,
                typography = TextStyle(
                    fontSize = FontSize.md,
                    lineHeight = LineHeights.md
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Small Caption",
                color = Colors.Text.gray,
                typography = TextStyle(
                    fontSize = FontSize.xs,
                    lineHeight = LineHeights.xs
                )
            )
            VerticalSpacer(Space.sm)
            Text(
                text = "Error Text",
                color = Colors.Text.red,
                typography = TextStyle(
                    fontSize = FontSize.sm,
                    lineHeight = LineHeights.sm
                )
            )
        }
    }
}
