package com.atls.hyperion.ui.primitives.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.Link
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.LineHeights

class LinkStory : ComponentExample {
    override val name: String = "Link"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.padding(Space.g16)
        ) {
            Link(
                textDecoration = "Standard Blue Link",
                url = "https://google.com",
                color = Colors.Text.blue,
                typography = TextStyle(
                    fontSize = FontSize.md,
                    lineHeight = LineHeights.md
                )
            )
            VerticalSpacer(Space.g12)
            Link(
                textDecoration = "Soft Blue Link",
                url = "https://google.com",
                color = Colors.Text.softBlue,
                typography = TextStyle(
                    fontSize = FontSize.md,
                    lineHeight = LineHeights.md
                )
            )
            VerticalSpacer(Space.g12)
            Link(
                textDecoration = "Small Gray Link",
                url = "https://google.com",
                color = Colors.Text.gray,
                typography = TextStyle(
                    fontSize = FontSize.xs,
                    lineHeight = LineHeights.xs
                )
            )
        }
    }
}
