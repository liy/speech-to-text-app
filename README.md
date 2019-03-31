### Run in HTTPS
As it uses service worker for notification, HTTPS has to be used.
On windows: `($env:HTTPS = "true") -and (npm start)`

If localhost certificate is not valid, manually import to `Trusted Root Certification` should solve the issue. But remember to remove them!