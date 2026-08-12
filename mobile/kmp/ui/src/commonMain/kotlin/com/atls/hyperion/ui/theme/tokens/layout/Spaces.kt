package com.atls.hyperion.ui.theme.tokens.layout

import androidx.compose.ui.unit.dp

object Space { //TODO remove after components refactoring
    val zero = 0.dp
    val xs5 = 2.dp
    val xs4 = 4.dp
    val xs3 = 6.dp
    val xs2 = 8.dp
    val xs = 10.dp
    val sm = 12.dp
    val md = 14.dp
    val lg = 16.dp
    val xl = 20.dp
    val xl2 = 22.dp
    val xl3 = 24.dp
}

object Spacing {
    val component = Component()
    val layout = Layout()

    class Component internal constructor() {
        val none = 0.dp
        val xs2 = 2.dp
        val xs = 4.dp
        val sm = 6.dp
        val md = 8.dp
        val lg = 12.dp
        val xl = 16.dp
        val xl2 = 20.dp
        val xl3 = 24.dp
        val xl4 = 32.dp
    }

    class Layout internal constructor() {
        val xs2 = 40.dp
        val xs = 48.dp
        val sm = 64.dp
        val md = 80.dp
        val lg = 96.dp
        val xl = 128.dp
    }
}
