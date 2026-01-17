package com.atls.hyperion.ui.components.list.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.theme.tokens.layout.Space

class ListStories : ComponentExample {
    override val name: String = "Lists"

    @Composable
    override fun Content() {
        Column {
            VerticalListVariants()

            Spacer(Modifier.height(Space.md))

            SelectableListVariants()

            Spacer(Modifier.height(Space.md))

            FlowSelectableListVariants()

            Spacer(Modifier.height(Space.xl2))
        }
    }
}
