package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Slider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.primitives.layout.column.Column
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun PercentSlider(percent: Float, onChange: (Float) -> Unit) {
    Column(modifier = Modifier.fillMaxWidth().padding(Space.lg)) {
        Text("Percent: ${percent.toInt()}%")
        Slider(value = percent, onValueChange = onChange, valueRange = 0f..100f)
    }
}
