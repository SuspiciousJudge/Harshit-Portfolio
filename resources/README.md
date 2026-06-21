# Resources Folder

Drop your media files here, then run the sync script to copy them into `public/` for the site.

## Required files

| File | Destination | Description |
|------|-------------|-------------|
| `cv-en.pdf` | `public/cv-en.pdf` | English resume (Download CV button) |
| `cv-de.pdf` | `public/cv-de.pdf` | German resume |
| `clip1.mp4` | `public/clip1.mp4` | Hero background video (engineering footage) |
| `clip2.mp4` | `public/clip2.mp4` | Contact section space video |
| `profile.jpg` | `public/profile.jpg` | Profile photo (square, min 400×400) |
| `internship.jpg` | `public/internship.jpg` | DLR / ELARA internship photo (optional) |
| `projects/proj1.jpg` | `public/projects/proj1.jpg` | Battery Housing project |
| `projects/proj2.jpg` | `public/projects/proj2.jpg` | Battery Pack Design |
| `projects/proj3.jpg` | `public/projects/proj3.jpg` | Knee Orthosis |
| `projects/proj4.jpg` | `public/projects/proj4.jpg` | PLC Conveyor |
| `projects/proj5.jpg` | `public/projects/proj5.jpg` | Altair Competition |

## Sync to public

```powershell
.\scripts\sync-resources.ps1
```

## Video tips (smooth playback like thanhvtran.com)

- Format: H.264 MP4, 1280×720
- Compress with HandBrake (~8–15 Mbps)
- Keep clips 10–60 seconds, loop-friendly
- Add poster frames to `resources/posters/` if desired

## EmailJS

Copy `.env.local.example` to `.env.local` and add your EmailJS credentials.
