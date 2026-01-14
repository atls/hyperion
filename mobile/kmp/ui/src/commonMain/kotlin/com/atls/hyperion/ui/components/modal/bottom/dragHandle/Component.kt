package com.atls.hyperion.ui.components.modal.bottom.dragHandle

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.appearance.DragHandleAppearance
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.shape.DragHandleShape

@Composable
fun DragHandle(
    appearance: DragHandleAppearance,
    shape: DragHandleShape
) {
    Box(
        modifier = Modifier
            .padding(shape.paddings)
            .width(shape.width)
            .height(shape.height)
            .background(
                color = appearance.backgroundColor,
                shape = RoundedCornerShape(shape.cornerRadius)
            )
    )
}
