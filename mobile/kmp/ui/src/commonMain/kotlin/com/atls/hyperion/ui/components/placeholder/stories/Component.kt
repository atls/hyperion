package com.atls.hyperion.ui.components.placeholder.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.theme.tokens.layout.Space

class PlaceholderStory(
    override val name: String = "Placeholder"
) : ComponentExample {

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(Space.md),
            verticalArrangement = Arrangement.spacedBy(Space.xl2)
        ) {
            ImageBoxPlaceholderVariants()
            LogoPlaceholderHorizontalVariants()
            LogoPlaceholderVerticalVariants()
        }
    }
}
