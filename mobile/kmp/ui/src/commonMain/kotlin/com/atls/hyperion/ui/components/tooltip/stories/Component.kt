package com.atls.hyperion.ui.components.tooltip.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.theme.tokens.layout.Space

class TextTooltipStories : ComponentExample {
    override val name: String = "Text Tooltip"

    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(Space.md),
            verticalArrangement = Arrangement.spacedBy(Space.md)
        ) {
            TextTooltipVariants()
        }
    }
}
