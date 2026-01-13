package com.atls.hyperion.ui.components.modal.popup

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.default
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.components.modal.style.shape.popup

@Composable
fun Popup(
    modifier: Modifier = Modifier,
    appearance: ModalAppearance = ModalAppearance.default(),
    shape: ModalShape = ModalShape.popup(),
    onDismissRequest: () -> Unit,
    content: @Composable () -> Unit
) {
    Dialog(
        onDismissRequest = onDismissRequest,
        properties = DialogProperties(
            usePlatformDefaultWidth = false
        )
    ) {
        Box(
            modifier = modifier
                .padding(shape.spacers)
                .background(
                    color = appearance.backgroundColor,
                    shape = shape.shape
                )
                .fillMaxWidth()
                .padding(shape.paddings)
        ) {
            content()
        }
    }
}
