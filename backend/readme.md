# Django Backend Setup Guide

This guide will walk you through the steps to run the Django backend API for VisualVision. Ensure that you have Python and Pipenv installed on your system before proceeding.

## Prerequisites

- Python 3.10
- Pipenv

## Installation

1. Clone the repository:

2. Navigate to the project directory:

   ```bash
   cd backend
   ```

3. Install project dependencies using Pipenv:

   ```bash
   pipenv install -r requirements.txt
   ```

4. Activate the virtual environment:

   ```bash
   pipenv shell
   ```

## Running the Server

1. Apply migrations:

   ```bash
   python manage.py migrate
   ```

2. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

3. Visit `http://localhost:8000` in your web browser. You should see the default Django landing page or your project homepage if configured.

## Additional Notes

- To install additional Python packages, you can do so using Pipenv. Make sure to activate the virtual environment with `pipenv shell` before installing packages.

- Make sure to keep your virtual environment activated (`pipenv shell`) whenever you work on the project to ensure that you're using the correct dependencies.

- Don't forget to deactivate the virtual environment once you're done working on the project:

  ```bash
  exit
  ```

- For production deployments, refer to the Django documentation on deploying Django applications in production.

## Troubleshooting

- If you encounter any issues during the installation or setup process, feel free to open an issue on the project repository or reach out to the project maintainers for assistance.
