$root = Split-Path -Parent $PSScriptRoot
$resources = Join-Path $root "resources"
$public = Join-Path $root "public"

$maps = @(
  @("cv-en.pdf", "cv-en.pdf"),
  @("CV_n.pdf", "cv-de.pdf"),
  @("clip1.mp4", "clip1.mp4"),
  @("clip2.mp4", "clip2.mp4"),
  @("profile.jpg", "profile.jpg"),
  @("internship.jpg", "internship.jpg"),
  @("projects\proj1.jpg", "projects\proj1.jpg"),
  @("projects\proj2.jpg", "projects\proj2.jpg"),
  @("projects\proj3.jpg", "projects\proj3.jpg"),
  @("projects\proj4.jpg", "projects\proj4.jpg"),
  @("projects\proj5.jpg", "projects\proj5.jpg"),
  @("posters\hero-poster.jpg", "posters\hero-poster.jpg"),
  @("posters\space-poster.jpg", "posters\space-poster.jpg")
)

New-Item -ItemType Directory -Force -Path (Join-Path $public "projects"), (Join-Path $public "posters") | Out-Null

foreach ($m in $maps) {
  $src = Join-Path $resources $m[0]
  $dst = Join-Path $public $m[1]
  if (Test-Path $src) {
    Copy-Item $src $dst -Force
    Write-Host "Synced: $($m[0])"
  }
}

Write-Host "Done. Missing files keep existing public placeholders."
