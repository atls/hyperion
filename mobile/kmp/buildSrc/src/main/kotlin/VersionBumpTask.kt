import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction

abstract class VersionBumpTask : DefaultTask() {

    @TaskAction
    fun run() {
        val modulePath = project.findProperty("module")
            ?.toString()
            ?: error("pass -Pmodule=path/to/module")

        val bumpType = project.findProperty("bump")
            ?.toString()
            ?: "minor"

        val file = project.file("$modulePath/build.gradle.kts")
        require(file.exists()) { "build.gradle.kts not found in $modulePath" }

        val text = file.readText()
        val regex = Regex("""version\s*=\s*"(\d+)\.(\d+)\.(\d+)"""")
        val match = regex.find(text)
            ?: error("version not found in $modulePath")

        val (major, minor, patch) = match.destructured

        val next = when (bumpType) {
            "major" -> "${major.toInt() + 1}.0.0"
            "minor" -> "$major.${minor.toInt() + 1}.0"
            "patch" -> "$major.$minor.${patch.toInt() + 1}"
            else -> error("unknown bump type: $bumpType")
        }

        file.writeText(text.replace(regex, """version = "$next""""))

        println("VERSION=$next")
    }
}
