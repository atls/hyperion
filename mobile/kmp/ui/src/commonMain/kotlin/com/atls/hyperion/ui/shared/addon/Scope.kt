package com.atls.hyperion.ui.shared.addon

class AddonScope {
    private val slots = mutableMapOf<AddonPosition, MutableList<Addon>>()

    fun before(vararg addons: Addon) {
        slots.getOrPut(AddonPosition.Before) { mutableListOf() }.addAll(addons)
    }

    fun after(vararg addons: Addon) {
        slots.getOrPut(AddonPosition.After) { mutableListOf() }.addAll(addons)
    }

    fun build() = AddonSlotManager(slots)
}
