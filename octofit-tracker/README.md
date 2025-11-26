# Octofit Tracker (starter)

This folder keeps a small starter scaffold for the Octofit Tracker application used in the exercises.

Structure

```
octofit-tracker/
├── backend/    # Django starter layout + requirements
└── frontend/   # Minimal React starter app
```

Quick notes

- Backend: create a Python virtual environment and install `backend/requirements.txt`
- Frontend: run `npm install` inside `frontend/` and `npm start` to launch the placeholder app
- See `.github/instructions/octofit_tracker_setup_project.instructions.md` for environment guidance and required packages.

Running tests

- Backend tests:

```bash
cd octofit-tracker/backend
export DJANGO_SETTINGS_MODULE=octofit_tracker.settings
python -m django test tracker
```

- Frontend tests:

```bash
cd octofit-tracker/frontend
npm ci
npm test
```

CI

This repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs both backend and frontend tests on pushes to main and build-octofit-app and on pull requests.
