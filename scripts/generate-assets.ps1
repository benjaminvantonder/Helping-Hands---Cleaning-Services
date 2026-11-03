Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$public = Join-Path $root 'public'
New-Item -ItemType Directory -Force -Path $public | Out-Null

# ---------- Open Graph image ----------
$og = New-Object System.Drawing.Bitmap(1200, 630)
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$forest = [System.Drawing.Color]::FromArgb(15, 61, 53)
$cream = [System.Drawing.Color]::FromArgb(250, 247, 240)
$creamSoft = [System.Drawing.Color]::FromArgb(185, 250, 247, 240)
$gold = [System.Drawing.Color]::FromArgb(182, 139, 76)
$goldSoft = [System.Drawing.Color]::FromArgb(216, 188, 140)

$g.Clear($forest)

$bgBrush = New-Object System.Drawing.SolidBrush($forest)
$g.FillRectangle($bgBrush, 0, 0, 1200, 630)

$ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(34, 216, 188, 140), 1)
$g.DrawEllipse($ringPen, 800, -210, 640, 640)
$g.DrawEllipse($ringPen, 900, -110, 440, 440)
$g.DrawEllipse($ringPen, -260, 400, 540, 540)

$goldBrush = New-Object System.Drawing.SolidBrush($gold)
$creamBrush = New-Object System.Drawing.SolidBrush($cream)
$softBrush = New-Object System.Drawing.SolidBrush($creamSoft)

$g.FillRectangle($goldBrush, 90, 112, 46, 2)

$sans = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$g.DrawString('L&S HELPING HANDS & CLEANING SERVICES', $sans, $softBrush, 152, 100)

$serif = New-Object System.Drawing.Font('Georgia', 62, [System.Drawing.FontStyle]::Italic)
$g.DrawString('A beautifully', $serif, $creamBrush, 86, 210)
$g.DrawString('clean space.', $serif, $creamBrush, 86, 320)
$g.DrawString('Caring hands.', $serif, $goldBrush, 86, 430)

$footerFont = New-Object System.Drawing.Font('Segoe UI', 10.5, [System.Drawing.FontStyle]::Bold)
$g.DrawString('DURBAN NORTH  |  KWAZULU-NATAL', $footerFont, $softBrush, 90, 565)
$g.DrawString('075 101 9153  |  sinabondhlovu7@gmail.com', $footerFont, $softBrush, 740, 565)

# Monogram disc
$discBrush = New-Object System.Drawing.SolidBrush($cream)
$g.FillEllipse($discBrush, 960, 245, 150, 150)
$monoFont = New-Object System.Drawing.Font('Georgia', 34, [System.Drawing.FontStyle]::Regular)
$forestBrush = New-Object System.Drawing.SolidBrush($forest)
$g.DrawString('L&S', $monoFont, $forestBrush, 990, 300)

$g.Dispose()

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$og.Save((Join-Path $public 'og.jpg'), $codec, $encParams)
$og.Dispose()

# ---------- Apple touch icon ----------
$icon = New-Object System.Drawing.Bitmap(180, 180)
$ig = [System.Drawing.Graphics]::FromImage($icon)
$ig.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$ig.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$ig.Clear($forest)

$ringPen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 216, 188, 140), 1.5)
$ig.DrawEllipse($ringPen2, -40, 90, 220, 220)
$ig.DrawEllipse($ringPen2, 105, -40, 130, 130)

$iconFont = New-Object System.Drawing.Font('Georgia', 54, [System.Drawing.FontStyle]::Regular)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, 0, 180, 180)
$ig.DrawString('L&S', $iconFont, $creamBrush, $rect, $format)

$goldDot = New-Object System.Drawing.SolidBrush($goldSoft)
$ig.FillEllipse($goldDot, 127, 30, 10, 10)

$ig.Dispose()
$icon.Save((Join-Path $public 'apple-touch-icon.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$icon.Dispose()

Write-Output 'Generated public/og.jpg and public/apple-touch-icon.png'
