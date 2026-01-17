package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space

class ProgressStory : ComponentExample {
    override val name: String = "Progress"

    @Composable
    override fun Content() {
        var percent by remember { mutableStateOf(40f) }

        Column(modifier = Modifier.fillMaxSize()) {
            PercentSlider(percent) { percent = it }
            VerticalSpacer(Space.md)
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(rememberScrollState())
                    .padding(horizontal = Space.lg)
            ) {
                LineProgressVariants(percent)
                VerticalSpacer(Space.lg)
                SegmentedLineProgressVariants(percent)
                VerticalSpacer(Space.xl3)
                CircleProgressVariants(percent)
                VerticalSpacer(Space.lg)
                SegmentedCircleProgressVariants(percent)
                VerticalSpacer(Space.xl3)
            }
        }
    }
}
