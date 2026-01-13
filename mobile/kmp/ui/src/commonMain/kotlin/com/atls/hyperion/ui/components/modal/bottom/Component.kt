package com.atls.hyperion.ui.components.modal.bottom

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.SheetState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.DragHandle
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.appearance.DragHandleAppearance
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.appearance.default
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.shape.DragHandleShape
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.shape.default
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.default
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.components.modal.style.shape.bottom

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BottomDialog(
    modifier: Modifier = Modifier,
    appearance: ModalAppearance = ModalAppearance.default(),
    shape: ModalShape = ModalShape.bottom(),
    dragHandleShape: DragHandleShape = DragHandleShape.default(),
    dragHandleAppearance: DragHandleAppearance = DragHandleAppearance.default(),
    dragHandle: @Composable () -> Unit = {
        DragHandle(
            appearance = dragHandleAppearance,
            shape = dragHandleShape
        )
    },
    sheetState: SheetState,
    onDismissRequest: () -> Unit,
    content: @Composable () -> Unit
) {
    ModalBottomSheet(
        modifier = modifier
            .windowInsetsPadding(WindowInsets.statusBars),
        onDismissRequest = onDismissRequest,
        sheetState = sheetState,
        shape = shape.shape,
        dragHandle = dragHandle,
        containerColor = appearance.backgroundColor,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(shape.paddings)
        ) {
            content()
        }
    }
}
