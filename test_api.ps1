$body = '{"username":"test_user","password":"test123456"}'
$headers = @{ "Content-Type" = "application/json" }
try {
  $r = Invoke-WebRequest -Uri "http://39.107.64.163:3000/api/v1/auth/login" -Method POST -Headers $headers -Body $body -TimeoutSec 10 -UseBasicParsing
  Write-Host $r.Content
  Write-Host "STATUS: $($r.StatusCode)"
} catch {
  Write-Host "ERROR: $($_.Exception.Message)"
}
