package com.atls.hyperion.sample

import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.fragments.storybook.Storybook
import com.atls.hyperion.ui.components.avatar.stories.AvatarStory
import com.atls.hyperion.ui.components.button.stories.ButtonStory
import com.atls.hyperion.ui.components.card.stories.CardStory
import com.atls.hyperion.ui.components.checkbox.stories.CheckboxStory
import com.atls.hyperion.ui.components.divider.stories.DividerStory
import com.atls.hyperion.ui.components.input.stories.InputStory
import com.atls.hyperion.ui.components.switch.stories.SwitchStory
import com.atls.hyperion.ui.primitives.stories.LinkStory
import com.atls.hyperion.ui.primitives.stories.TextStory

@Composable
fun App() {
    MaterialTheme {
        Storybook(
            components = listOf(
                AvatarStory(),
                ButtonStory(),
                CheckboxStory(),
                DividerStory(),
                InputStory(),
                SwitchStory(),
                CardStory(),
                TextStory(),
                LinkStory()
            )
        )
    }
}
