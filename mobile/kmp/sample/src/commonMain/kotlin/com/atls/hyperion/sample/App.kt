package com.atls.hyperion.sample

import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.fragments.storybook.Storybook
import com.atls.hyperion.ui.components.avatar.stories.AvatarStory
import com.atls.hyperion.ui.components.bottombar.stories.BottomBarStory
import com.atls.hyperion.ui.components.button.stories.ButtonStory
import com.atls.hyperion.ui.components.card.stories.CardStory
import com.atls.hyperion.ui.components.carousel.stories.CarouselStory
import com.atls.hyperion.ui.components.checkbox.stories.CheckboxStory
import com.atls.hyperion.ui.components.divider.stories.DividerStory
import com.atls.hyperion.ui.components.input.stories.InputStory
import com.atls.hyperion.ui.components.modal.bottom.stories.BottomDialogStory
import com.atls.hyperion.ui.components.modal.popup.stories.PopupStory
import com.atls.hyperion.ui.components.pagination.stories.PaginationStory
import com.atls.hyperion.ui.components.placeholder.stories.PlaceholderStory
import com.atls.hyperion.ui.components.progress.stories.ProgressStory
import com.atls.hyperion.ui.components.switch.stories.SwitchStory
import com.atls.hyperion.ui.fragments.datepicker.stories.DatePickerStory
import com.atls.hyperion.ui.fragments.datepicker.stories.DateRangePickerStory
import com.atls.hyperion.ui.primitives.stories.LinkStory
import com.atls.hyperion.ui.primitives.stories.TextStory

@Composable
fun App() {
    MaterialTheme {
        Storybook(
            components = listOf(
                AvatarStory(),
                BottomDialogStory(),
                BottomBarStory(),
                ButtonStory(),
                CardStory(),
                CarouselStory(),
                CheckboxStory(),
                DatePickerStory(),
                DateRangePickerStory(),
                DividerStory(),
                InputStory(),
                PaginationStory(),
                PlaceholderStory(),
                PopupStory(),
                ProgressStory(),
                SwitchStory(),
                TextStory(),
                LinkStory()
            )
        )
    }
}
