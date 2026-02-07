$ErrorActionPreference = "Stop"

$repoUrl = "https://github.com/PramodDutta/AI-Tester-Blueprint.git"
$tempDir = "temp_sync_pramod_chapters"
$projectRoot = Resolve-Path ".." 

Write-Host "Starting sync of specific chapters from PramodDutta..."

# 1. Cleanup temp directory if it exists
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

# 2. Clone the repository (Depth 1, sparse checkout)
Write-Host "Cloning repository..."
git clone --depth 1 --filter=blob:none --sparse $repoUrl $tempDir

if (-not (Test-Path $tempDir)) {
    Write-Error "Failed to clone repository."
    exit
}

Push-Location $tempDir
try {
    # 3. Use git ls-tree to find the actual folder names matching "chapter_03" and "chapter_04"
    # This works even in sparse mode because it queries the index/tree, not the working directory.
    $foldersToSync = git ls-tree -d --name-only HEAD | Where-Object { $_ -match "^chapter_0(3|4)" }

    if (-not $foldersToSync) {
        Write-Warning "No matching chapters found (chapter_03*, chapter_04*) in the remote repository."
    }
    else {
        Write-Host "Found chapters to sync: $($foldersToSync -join ', ')"

        # 4. Sparse checkout these specific folders
        git sparse-checkout set $foldersToSync

        # 5. Copy to Project Root
        foreach ($folderName in $foldersToSync) {
            $destPath = Join-Path $projectRoot $folderName
            
            if (-not (Test-Path $destPath)) {
                New-Item -ItemType Directory -Path $destPath -Force | Out-Null
            }

            Write-Host "Syncing $folderName to $destPath..."
            Copy-Item -Path $folderName\* -Destination $destPath -Recurse -Force
        }
    }
}
finally {
    Pop-Location
}

# 6. Cleanup
Write-Host "Cleaning up temp files..."
Remove-Item -Recurse -Force $tempDir

Write-Host "Sync Complete! Chapters 03 and 04 are now in your project root."
