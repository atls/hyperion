package com.atls.hyperion.ui.shared.addon

data class AddonSlotManager(
    val addons: Map<AddonPosition, List<Addon>> = emptyMap()
) {
    fun get(position: AddonPosition): List<Addon> = addons[position].orEmpty()
}
