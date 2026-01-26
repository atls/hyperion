import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
    `maven-publish`
     base
}

group = "com.atls.hyperion"
version = "0.1.0"
description = "KMP Storybook"

base {
    archivesName.set("storybook")
}

kotlin {
    androidTarget {
        publishLibraryVariants("release")
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_21)
        }
    }

    listOf(
        iosX64(),
        iosArm64(),
        iosSimulatorArm64()
    ).forEach { iosTarget ->
        iosTarget.binaries.framework {
            baseName = "storybook"
            isStatic = true
        }
    }

    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.ui)
            implementation(compose.components.resources)
        }
    }
}

compose.resources {
    publicResClass = false
    generateResClass = auto
}

android {
    namespace = "com.atls.hyperion.storybook"

    val compileSdkValue = System.getenv(Versions.COMPILE_SDK_KEY)?.toInt()
        ?: (extra[Versions.COMPILE_SDK_KEY] as String).toInt()
    val minSdkValue = System.getenv(Versions.MIN_SDK_KEY)?.toInt()
        ?: (extra[Versions.MIN_SDK_KEY] as String).toInt()
    val javaTargetValue = System.getenv(Versions.JAVA_TARGET_KEY)?.toInt()
        ?: (extra[Versions.JAVA_TARGET_KEY] as String).toInt()

    compileSdk = compileSdkValue
    defaultConfig {
        minSdk = minSdkValue
    }
    compileOptions {
        sourceCompatibility = JavaVersion.toVersion(javaTargetValue)
        targetCompatibility = JavaVersion.toVersion(javaTargetValue)
    }

    publishing {
        singleVariant("release") {
            withSourcesJar()
        }
    }
}

apply(from = "../ui/publishing.gradle.kts")
