# Publish ELAS with GitHub CLI (Windows)

This guide assumes the repository has already been created on GitHub as a public repository named `ELAS` under `Just4Stickman`.

## 1. Install and authenticate GitHub CLI

Open PowerShell:

```powershell
winget install --id GitHub.cli
```

Close and reopen PowerShell, then:

```powershell
gh auth login
```

Choose:
- GitHub.com
- HTTPS
- Login with a web browser

Complete the browser authorization.

Check authentication:

```powershell
gh auth status
```

## 2. Extract the ZIP

Extract `ELAS.zip` to a convenient location, for example:

```text
C:\Projects\ELAS
```

Open PowerShell in that folder:

```powershell
cd C:\Projects\ELAS
```

Confirm that `README.md` and `prompts` are present:

```powershell
Get-ChildItem
```

## 3. Initialize Git and publish

Run these commands one at a time:

```powershell
git init
git branch -M main
git add .
git status
git commit -m "Initial ELAS release"
git remote add origin https://github.com/Just4Stickman/ELAS.git
git push -u origin main
```

If Git asks for your identity, configure it:

```powershell
git config --global user.name "Just4Stickman"
git config --global user.email "YOUR_VERIFIED_GITHUB_EMAIL"
```

Then retry the commit and push. Replace the email with the email associated with your GitHub account; do not use a made-up address.

## 4. If the remote already contains a README or other commit

If the GitHub repository was initialized with files, the first push may be rejected because the remote has a separate history. Do not force-push blindly.

Use:

```powershell
git pull origin main --allow-unrelated-histories
```

Resolve any reported conflicts, then:

```powershell
git add .
git commit -m "Merge remote repository initialization"
git push -u origin main
```

If Git reports that there is nothing to merge or the histories already match, follow the exact error message rather than repeating commands.

## 5. Verify

Open:

```text
https://github.com/Just4Stickman/ELAS
```

Confirm that the README, prompts, documentation, examples, and license appear.

## Notes

- Do not upload API keys, passwords, personal legal documents, or confidential case files.
- Do not use `git push --force` as a routine fix.
- The repository's custom license is source-available with restrictions, not OSI-approved open source.
