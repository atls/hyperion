import config.Keys
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

group = "com.atls.hyperion"
version = VersionProvider.load(rootDir)

kotlin {
    androidTarget {
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
            baseName = "ui"
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
            implementation(compose.components.uiToolingPreview)
        }
    }
}

android {
    namespace = "com.atls.hyperion.ui"

    val compileSdkValue = System.getenv(Keys.COMPILE_SDK)?.toInt()
        ?: (extra[Keys.COMPILE_SDK] as String).toInt()
    val minSdkValue = System.getenv(Keys.MIN_SDK)?.toInt()
        ?: (extra[Keys.MIN_SDK] as String).toInt()
    val javaTargetValue = System.getenv(Keys.JAVA_TARGET)?.toInt()
        ?: (extra[Keys.JAVA_TARGET] as String).toInt()

    compileSdk = compileSdkValue
    defaultConfig {
        minSdk = minSdkValue
    }
    compileOptions {
        sourceCompatibility = JavaVersion.toVersion(javaTargetValue)
        targetCompatibility = JavaVersion.toVersion(javaTargetValue)
    }
}
