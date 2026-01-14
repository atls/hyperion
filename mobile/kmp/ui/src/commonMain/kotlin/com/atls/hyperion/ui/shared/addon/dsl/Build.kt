package com.atls.hyperion.ui.shared.addon.dsl

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.shared.addon.AddonScope
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
fun build(builder: @Composable AddonScope.() -> Unit): AddonSlotManager =
    AddonScope().apply { builder() }.build()
